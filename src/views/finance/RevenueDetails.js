import React,{useState,useEffect} from 'react'
import {
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CFormInput,
    CFormSelect,
    CInputGroup,
    CInputGroupText,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilArrowCircleBottom, cilArrowCircleTop, cilPlus } from '@coreui/icons'
import axios from 'axios'

   let user = JSON.parse(localStorage.getItem('user-info'))
    // console.log(user);
    const token = user.token;
    const username = user.user.username;
    import { useSelector } from "react-redux";

    var monthNaame= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];

const RevenueDetails = () => {

    const [AllYearInfo,setAllYearToInfo] = useState([])
    const url1 = useSelector((el)=>el.domainOfApi) 


const [years,setYears]= useState([])
const [selectedYear,setSelectedYear] = useState('')
const [month,setMonth] = useState('')


    
    const getAllInvoiceData = async ()=>{
        const {data} = await axios.get(`${url1}/invoice/all`,{ 
                headers: {
                    'Authorization': `Bearer ${token}`
                }})       
        const getAllYearToCompare  = 
       [...data?.reverse()?.map((el)=>{
        return {
           Year:new Date(el.createdAt).getFullYear(),
           Month:new Date(el.createdAt).getMonth(),
           date:new Date(el.createdAt)
        }}

        )    
        ].sort((a,b)=>b.Year-a.Year)
        const AllYear = [...getAllYearToCompare,].reduce((crr,el,i)=>{
         if(!crr.length){crr.push(el)}
        else if(crr?.length) {
        const val =  crr.some((el2)=>   el2.Year  === el.Year && el2.Month  === el.Month)
        if(!val){crr.push(el)}} return crr
        },[])

      setYears(AllYear.map((el)=>el.Year))


let revenueDetails = {
    totaLInvoiceAmount:0,
    totalColectionAmount:0,
    totalBalanceAmoutn:0
} 





const total = AllYear.map((el)=>{

   return  {...el,...data.reverse().reduce((crr,el2)=>{
          if(new Date(el2.createdAt).getFullYear()  === el.Year && new Date(el2.createdAt).getMonth()  === el.Month){
            crr.totaLInvoiceAmount += (+el2.amount)
            crr.totalColectionAmount += (+el2.paidAmount)
            crr.totalBalanceAmoutn+= (+el2.pendingAmount)

                  if(el2.Receipts.length){
                    el2?.Receipts.forEach((el3)=>{
                     crr.totalColectionAmount += (+el3.PaidAmount)
                    })
                }       
}
return crr
},{...revenueDetails})}
})


setAllYearToInfo(total)

    } 
    
    useEffect(()=>{
       getAllInvoiceData()
    },[])

    
    


function clearFilter(){
    setSelectedYear('')
    setMonth('')
}



    return (
        <CRow>
            <CCol lg={12} sm={12}>
                <CCard className='mb-3 border-top-success border-top-3'>
                    <CCardHeader>
                        <strong className="mt-2">Revenue Details</strong>
                    </CCardHeader>
                    <CCardBody>
                    <CRow className=' mb-2' >
                             <CCol lg={4} className='mb-2'>
                             <CFormSelect value={month} onChange={(e)=>setMonth(e.target.value)}>
                                <option>Select  Month </option>
                                 {monthNaame.map((el,i)=>{
                                    return <option key={i}> {el}</option>
                                })}                                                                                 
                           </CFormSelect>
                            </CCol >
                            <CCol lg={4} className='mb-2'>
                            <CFormSelect value={selectedYear} onChange={(e)=>setSelectedYear(e.target.value)}>
                                <option>Select Year</option>
                                {years.map((el,i)=>{
                                    return <option key={i}>{el}</option>
                                })}  

                            </CFormSelect>
                            </CCol>
                            
                        
                        </CRow>
                        <CRow>
                            <CCol className='px-3 mb-3'>
                            <CButton onClick={(e)=>clearFilter(e.target.value)}>Clear Filter</CButton>
                            </CCol>
                        </CRow>
                        
                        <CTable bordered style={{ borderColor: "#106103" }} responsive>
                            <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }}>
                                <CTableRow>
                                    <CTableHeaderCell scope="col">Sr No</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">year</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Month</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">
                                        Total Invoice Amount
                                    </CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Total Collection Amount</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Total Balance Amount</CTableHeaderCell>
                              
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                {AllYearInfo.filter((el)=>{    
                                   
                                   return monthNaame[el.Month].includes(month) &&  
                                   (el.Year+"").includes(selectedYear)
                                   
                                }).map((el,i)=>
                                <CTableRow key={i}>
                                <CTableDataCell>{i+1}</CTableDataCell>
                                    <CTableDataCell>{el.Year}</CTableDataCell>
                                    <CTableDataCell>{monthNaame[el.Month]}</CTableDataCell>
                                    <CTableDataCell>Rs {el.totaLInvoiceAmount}</CTableDataCell>
                                    <CTableDataCell>Rs {el.totalColectionAmount}</CTableDataCell>
                                    <CTableDataCell>Rs {el.totalBalanceAmoutn}</CTableDataCell>                                  
                                </CTableRow>
                               )}
                               
                            </CTableBody>
                        </CTable>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default RevenueDetails