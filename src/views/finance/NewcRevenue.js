import React from 'react'
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
import {useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'


let user = JSON.parse(localStorage.getItem('user-info'))
const token = user.token;
const username = user.user.username;
const url = 'https://yog-seven.vercel.app'

const NewcRevenue = () => {

const [newcRevenue,setRevnewData] = useState([])
const [years,setYears]= useState([])
const [selectedYear,setSelectedYear] = useState('')
const [month,setMonth] = useState('')
const [serviceName,setServiceName] = useState('')
const [serviceData,setserviceData] = useState([])

const url1 = useSelector((el)=>el.domainOfApi) 


var monthName= ["January","February","March","April","May","June","July",
"August","September","October","November","December"];


   const headers = {
    'Authorization': `Bearer ${token}`,
    'My-Custom-Header': 'foobar'
   };

  

const getAllData = async  ()=>{
try{
const response1 = axios.get(`${url1}/invoice/all`,{headers})
const response2 = axios.get(`${url1}/memberForm/all`,{headers})
const response3 = axios.get(`${url}/enquiryForm/all`,{headers})
      
const allApiData = await Promise.all([response1,response2,response3])

const invoiceData = allApiData[0].data
const clientData = allApiData[1].data
const enquiryData = allApiData[2].data 
console.log(enquiryData)

const serviceAcordingToMonth   = ([...enquiryData.filter((list) => list.username === username)?.reverse()?.map((el)=>{
                return {
                   Service:el?.ServiceName,
                   Month:new Date(el.createdAt).getMonth(),
                   Year:new Date(el.createdAt).getFullYear()
                }}       
)].sort((a,b)=>b.Month-a.Month))         


const classiFyAcordingToMonth = [...serviceAcordingToMonth].reduce((crr,el,i)=>{
    if(!crr.length){crr.push(el)}
   else if(crr?.length) {
   const val =  crr.some((el2)=>   el2.Service  === el.Service && el2.Month  === el.Month)
   if(!val){crr.push(el)}} return crr
},[])


 const serviceRevenueData =  classiFyAcordingToMonth.map((el)=>{
    let num =0;
    const obj = {
       month:el.Month,
       typeOfService:el.Service,
       noOfClient:0,
       noOfLeads:0,
       amount:0 ,
       date:el.date,
       year:el.Year
    }
 return   enquiryData.reduce((crr,el2)=>{
    if(el2.ServiceName === el.Service && new Date(el2.createdAt).getMonth()  === el.Month){
        num++
       crr.noOfLeads  = num 
       return crr
    }             
    return crr
   },{...obj})
}) 

const FilterFirstInvoiceData = [...clientData.filter((list) => list.username === username)].map((el)=>{
            return invoiceData.find((el1)=>el._id===el1.MemberId)
}).filter((el)=>el)
        

console.log(serviceRevenueData)


   
console.log(serviceRevenueData.filter((el,i,arr)=>arr.indexOf(el.year)===i))



    serviceRevenueData.forEach(element => {
            let num =0
        clientData.forEach((el)=>{
        if(element.typeOfService===el.serviceName && new Date(el.createdAt).getMonth()  === element.month){
        num++
        element.noOfClient = num
        }
        })
    })

    
    serviceRevenueData.forEach(element => {    
        let amount =0
    FilterFirstInvoiceData.forEach((el)=>{

        if(element.typeOfService===el.ServiceName && new Date(el.createdAt).getMonth()  === element.month ){
            console.log(element.typeOfService,'kff')
            console.log(el.ServiceName)
            console.log(amount)

             amount += el.amount
            element.amount = amount
    }})  
    })
setRevnewData(serviceRevenueData)    



const AllYear = [...serviceRevenueData,  {Year:2022,Month:2},{Year:2021,Month:5}].reduce((crr,el,i)=>{
    if(!crr.length){crr.push(el)}
   else if(crr?.length) {
   const val =  crr.some((el2)=>   el2.Year  === el.Year && el2.Month  === el.Month)
   if(!val){crr.push(el)}} return crr
   },[])

setYears([...new Set(AllYear.map((el)=>el.year)).filter((el)=>el)])

}catch{

}

}

function getPackage() {
    axios.get(`${url1}/packagemaster`, {

    })
        .then((res) => {
            setserviceData(res.data)
            console.log(res.data)
        })
        .catch((error) => {
            console.error(error)
        })
}
useEffect(()=>{
getAllData()
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
                        <strong className="mt-2">New Client Revenue</strong>
                    </CCardHeader>
                    <CCardBody>
                    <CRow className=' mb-2' >
                             <CCol lg={4} className='mb-2'>
                             <CFormSelect value={month} onChange={(e)=>setMonth(e.target.value)}>
                                <option>Select Your Month </option>
                                 {monthName.map((el)=>{
                                    return <option>{el}</option>
                                })}                                                                                 
                           </CFormSelect>
                            </CCol >
                            <CCol lg={4} className='mb-2'>
                            <CFormSelect value={selectedYear} onChange={(e)=>setSelectedYear(e.target.value)}>
                                <option>slecte Year</option>
                                {years.map((el)=>{
                                    return <option>{el}</option>
                                })}  

                            </CFormSelect>
                            </CCol>
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
                                    <CTableHeaderCell scope="col">Type of Service</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">
                                        No of Leads
                                    </CTableHeaderCell>
                                    <CTableHeaderCell scope="col">No of clients</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Amount</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                {newcRevenue.filter((el)=>{
                                   if(month){
                                     return month===monthName[el.month]                
                                   }else if(selectedYear){
                                    return selectedYear ==el.year                
                                   } else  if(serviceName){
                                    return serviceName== el.typeOfService
                                   }
                                   return el                     
                                }).map((el,i)=>{
                               return <CTableRow key={i}>
                                <CTableDataCell>{i+1}</CTableDataCell>
                                    <CTableDataCell>{el.year}</CTableDataCell>
                                    <CTableDataCell>{monthName[el.month]}</CTableDataCell>
                                    <CTableDataCell>{el.typeOfService}</CTableDataCell>
                                    <CTableDataCell>{el.noOfLeads}</CTableDataCell>
                                    <CTableDataCell>{el.noOfClient}</CTableDataCell>     
                                    <CTableDataCell>Rs {el.amount}</CTableDataCell>                                                             
                                </CTableRow>
                                })}
                                
                            </CTableBody>
                        </CTable>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default NewcRevenue