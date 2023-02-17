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
  import { BsWhatsapp } from "react-icons/bs";
  import { MdCall, MdDelete, MdEdit, MdMail } from "react-icons/md";


function DietPlanTable(){

 const url = useSelector((el)=>el.domainOfApi) 


const [Diteplan,setDitePlan] =useState([])



  const getClientDietData = useCallback(async ()=>{
    const {data} = await axios.get(`${url}/dietplantemplate`)
    setDitePlan(data)
  console.log(data)
   },[])
  
useEffect(()=>{
getClientDietData()
},[getClientDietData])

    
    return <CTable className='m-3 p-2' align="middle" bordered style={{ borderColor: "#0B5345",width:'120%' }} hover responsive>
    <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
        <CTableRow >
            <CTableHeaderCell>Sr No</CTableHeaderCell>
            <CTableHeaderCell>Diet plan name</CTableHeaderCell>
            <CTableHeaderCell>Diet Duretion</CTableHeaderCell>
            <CTableHeaderCell>Format</CTableHeaderCell>
            <CTableHeaderCell>Edit Delete</CTableHeaderCell>
           
          

         

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
        </CTableRow>
        { Diteplan.map((el,i)=>

 <CTableRow key={i}>                               
  <CTableDataCell>{i+1}</CTableDataCell>
  <CTableDataCell>{el.Diet_Plan_Name}</CTableDataCell>
  <CTableDataCell>{el.Diet_Duration}</CTableDataCell>
  <CTableDataCell>{el.Format}</CTableDataCell>
  <CTableDataCell className='text-center'>
    <MdEdit  style={{ fontSize: '35px', cursor: 'pointer', markerStart: '10px' }}  size='20px' /> 
    <MdDelete style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "5px" }}  size='20px' />
    </CTableDataCell>

 
                
</CTableRow>


)}
       
    </CTableBody>


</CTable>
}

export default DietPlanTable