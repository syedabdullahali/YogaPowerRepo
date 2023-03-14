import React, { useEffect ,useState} from 'react'
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
import { useSelector } from "react-redux";

let user = JSON.parse(localStorage.getItem('user-info'))
const token = user.token;
const username = user.user.username;

var monthName= ["January","February","March","April","May","June","July",
"August","September","October","November","December"];


const ServiceRevenue = () => {

    const url1 = useSelector((el)=>el.domainOfApi) 
    const [result, setResult] = useState([]);
    const [serviceRevinueData,setServiceRevenueData] = useState([])
    const [serviceName,setServiceName] = useState('')

const [newcRevenue,setRevnewData] = useState([])
const [years,setYears]= useState([])
const [selectedYear,setSelectedYear] = useState('')
const [month,setMonth] = useState('')
const [serviceData,setserviceData] = useState([])



    function getPackage() {
        axios.get(`${url1}/packagemaster`, {
    
        })
            .then((res) => {
                setResult(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

  
    useEffect(()=>{
        getPackage()                    
    },[])

    const getAllInvoiceData = async ()=>{
        const {data} = await axios.get(`${url1}/invoice/all`,{ 
                headers: {
                    'Authorization': `Bearer ${token}`
                }})
       const serviceAcordingToMonth   = ([...data?.reverse()?.map((el)=>{
                    return {
                       Service:el?.ServiceName,
                       Month:new Date(el.createdAt).getMonth(),
                       date:new Date(el.createdAt),
                       Year:new Date(el.createdAt).getFullYear()
                    }}
            
                    )
                    
                    ].sort((a,b)=>b.Month-a.Month))


         const classiFyAcordingToMonth = [...serviceAcordingToMonth].reduce((crr,el,i)=>{
            if(!crr.length){crr.push(el)}
           else if(crr?.length) {
           const val =  crr.some((el2)=>   el2.Service  === el.Service && el2.Month  === el.Month)
           if(!val){crr.push(el)}} return crr
           },[])
           setYears([...new Set(classiFyAcordingToMonth.map((el)=>el.Year))])

// console.log()


 const serviceRevenueData =  classiFyAcordingToMonth.map((el)=>{
            let num =0;
            let amount =0
            const obj = {
               month:el.Month,
               typeOfService:el.Service,
               noOfClient:0,
               amount:0 ,
               date:el.date,
               year:el.Year
            }
         return   data.reduce((crr,el2)=>{
            if(el2.ServiceName === el.Service && new Date(el2.createdAt).getMonth()  === el.Month){

                num++
               crr.noOfClient  = num 
               amount +=el2.amount
               crr.amount = amount
               return crr
            }             
            return crr
           },{...obj})
        }) 



setServiceRevenueData(serviceRevenueData)
              

    }   




    function getPackage() {
        axios.get(`${url1}/packagemaster`, {
    
        })
            .then((res) => {
                setserviceData(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    useEffect(()=>{
      getAllInvoiceData()
      getPackage()
    },[])
            
   
    function clearFilter(){
        setServiceName('')
        setSelectedYear('')
        setMonth('')
    }
      

    return (
        <CRow>
        <CCol lg={12} sm={12}>
            <CCard className='mb-3 border-top-success border-top-3'>
                <CCardHeader>
                    <strong className="mt-2">Service Revenue</strong>
                </CCardHeader>
                <CCardBody>

                <CRow className=' mb-2' >
                          <CCol lg={4} className='mb-2'>
                            <CFormSelect value={selectedYear} onChange={(e)=>setSelectedYear(e.target.value)}>
                                <option>slecte Year</option>
                                {years.map((el,i)=>{
                                    return <option key={i}>{el}</option>
                                })}  

                            </CFormSelect>
                            </CCol>
                             <CCol lg={4} className='mb-2'>
                             <CFormSelect value={month} onChange={(e)=>setMonth(e.target.value)}>
                                <option>Select Your Month </option>
                                 {monthName.map((el,i)=>{
                                    return <option key={i}>{el}</option>
                                })}                                                                                 
                           </CFormSelect>
                            </CCol >
                          
                            <CCol lg={4}  className='mb-2'>
                            <CFormSelect  id="inputGroupSelect01"
                                     onChange={(e)=>setServiceName(e.target.value)}
                                    >
                                    <option>Select Service</option>
                                        {serviceData.map((item, index) => (
                                            item.username === username && (
                                               item.Status=== true && (
                                                    <option key={index}>{item.Service }</option>                                                  
                                                )
                                            
                                            )))}
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
                                    <CTableHeaderCell scope="col">Year</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Month</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">
                                       Type of Service 
                                    </CTableHeaderCell>
                                    <CTableHeaderCell scope="col">No Of Clients</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Total Amounts</CTableHeaderCell>
                                   
                        </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            {serviceRevinueData.filter((el)=>{
                if(serviceName){
                    return serviceName=== el.typeOfService
                }if(month){
                    return month===monthName[el.month]         
                } if(selectedYear){
                    return selectedYear ==el.year                
                }
                return el
              }).map((el,i)=>
                            <CTableRow key={i}>
                              <CTableDataCell>{i+1}</CTableDataCell>
                                <CTableDataCell>{el.year}</CTableDataCell>
                                <CTableDataCell> {monthName[el.month]}</CTableDataCell>
                                <CTableDataCell>{el.typeOfService}</CTableDataCell>
                                <CTableDataCell>{el.noOfClient}</CTableDataCell>
                                <CTableDataCell>{el.amount}</CTableDataCell>
                              
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

export default ServiceRevenue