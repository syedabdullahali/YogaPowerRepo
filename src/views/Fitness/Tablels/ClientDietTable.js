import axios from 'axios';
import { useEffect,useCallback,useState } from 'react'

import {  
    CFormInput,   
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
  } from '@coreui/react'

  import { useSelector } from 'react-redux'
  import { MdCall, MdMail } from "react-icons/md";
  import { BsWhatsapp } from "react-icons/bs";



function ClientDietTable ({Token}){
    const url = useSelector((el)=>el.domainOfApi) 


const [clientDite,setClientDite] =useState([])



  const getClientDietData = useCallback(async ()=>{
    const {data} = await axios.get(`${url}/alldietclient`)
    setClientDite(data)
  console.log(data)
   },[])
  
useEffect(()=>{
getClientDietData()
},[getClientDietData])









return<CTable className='m-3 p-2' align="middle" bordered style={{ borderColor: "#0B5345",width:'180%' }} hover responsive>
<CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
    <CTableRow >
        <CTableHeaderCell>Member ID</CTableHeaderCell>
        <CTableHeaderCell>Start Date</CTableHeaderCell>
        <CTableHeaderCell>Name</CTableHeaderCell>
        <CTableHeaderCell>Mobile.No</CTableHeaderCell>
        <CTableHeaderCell>Gender</CTableHeaderCell>
        <CTableHeaderCell>Purpose</CTableHeaderCell>
        <CTableHeaderCell>EndDate</CTableHeaderCell>
        <CTableHeaderCell>package</CTableHeaderCell>
        <CTableHeaderCell>Dietitian Name</CTableHeaderCell>
        <CTableHeaderCell>Action</CTableHeaderCell>
      

     

    </CTableRow>
</CTableHead>
<CTableBody>
    <CTableRow>
        <CTableDataCell>
            <CFormInput
                className="mb-1"
                style={{ minWidth: "60px" }}
                type="text"
                aria-describedby="exampleFormControlInputHelpInline"
            />
        </CTableDataCell>
        <CTableDataCell>
            <CFormInput
                className="mb-1"
                style={{ minWidth: "120px" }}
                type="text"
                aria-describedby="exampleFormControlInputHelpInline"
            />
        </CTableDataCell>
        <CTableDataCell>
            <CFormInput
                className="mb-1"
                type="text"
                style={{ minWidth: "120px" }}
                aria-describedby="exampleFormControlInputHelpInline"
            />
        </CTableDataCell>
        <CTableDataCell>
            <CFormInput
                className="mb-1"
                type="text"
                style={{ minWidth: "90px" }}
               
                aria-describedby="exampleFormControlInputHelpInline"
            />
        </CTableDataCell>
        <CTableDataCell>
            <CFormInput
                className="mb-1"
                type="number"
                style={{ minWidth: "100px" }}
            
            />
        </CTableDataCell>
        <CTableDataCell>
            <CFormInput
                className="mb-1"
                type="text"
            />
        </CTableDataCell>
        <CTableDataCell>
            <CFormInput
                className="mb-1"
                type="text"
            />
        </CTableDataCell>
        <CTableDataCell>
            <CFormInput
                className="mb-1"
                type="text"
               
            />
        </CTableDataCell>
        <CTableDataCell>
            <CFormInput
                className="mb-1"
                type="text"
            />
        </CTableDataCell>
        <CTableDataCell>
            <CFormInput
                className="mb-1"
                type="text"
            />
        </CTableDataCell>
       
        
       
    </CTableRow>
    {clientDite.map((el)=>

    <CTableRow>                               
      <CTableDataCell>{el._id}</CTableDataCell>
      <CTableDataCell>{el.Start_Date}</CTableDataCell>
      <CTableDataCell>{el.Name}</CTableDataCell>
      <CTableDataCell>{el.Mobile_No}</CTableDataCell>
      <CTableDataCell>{el.Gender}</CTableDataCell>
      <CTableDataCell>{el.Purpose}</CTableDataCell>
      <CTableDataCell>{el.EndDate} </CTableDataCell>
      <CTableDataCell>{el.Package}</CTableDataCell>
      <CTableDataCell>{el.DietitianName}</CTableDataCell>
      <CTableDataCell className='text-center'><a href={`tel:${el.Mobile_No}`} 
      target="_black"><MdCall style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' /></a>
      <a href={`https://wa.me/${el.Mobile_No}`} target="_black">
            <BsWhatsapp style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a>
            <a href={`mailto`} target="_black"> <MdMail style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "4px" }} size='20px' />
            </a> </CTableDataCell>
                    
   </CTableRow>


    )}
   
   
</CTableBody>
</CTable>
}

export default ClientDietTable