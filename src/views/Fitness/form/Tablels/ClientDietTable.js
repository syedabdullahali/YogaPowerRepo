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

function ClientDietTable ({Token}){

const [clientDite,setClientDite] =useState([])

  const headers = {
    'Authorization': `Bearer ${Token}`
}

// MeasurmentApi Fetch Data
  const getAllmembersData = useCallback(async ()=>{
    const {data} = await axios.get(`https://yog-seven.vercel.app/dietDetail/all`,{headers})
    setClientDite(data)
  console.log(data)
   },[])
  
useEffect(()=>{
getAllmembersData()
},[getAllmembersData])









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
      <CTableDataCell>{el['Member_ID']}</CTableDataCell>
      <CTableDataCell>{new Date(el.DietStartDate).toLocaleDateString()}</CTableDataCell>
      <CTableDataCell>{el.Fullname}</CTableDataCell>
      <CTableDataCell>{el.ContactNumber}</CTableDataCell>
      <CTableDataCell>{el.Gender}</CTableDataCell>
      <CTableDataCell>{el.Purpose}</CTableDataCell>
      <CTableDataCell>{new Date(el.DietEndDate).toLocaleDateString()} </CTableDataCell>
      <CTableDataCell></CTableDataCell>
      <CTableDataCell>{el.DietitianName }</CTableDataCell>
      <CTableDataCell></CTableDataCell>                        
   </CTableRow>


    )}
   
   
</CTableBody>
</CTable>
}

export default ClientDietTable