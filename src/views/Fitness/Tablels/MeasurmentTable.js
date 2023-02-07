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



function MeasurementTable({Token}){
    const [allMeasurmentMembers,setAllMeasurmentMembers] =useState([])

  const headers = {
    'Authorization': `Bearer ${Token}`
}

// MeasurmentApi Fetch Data
  const getAllmembersData = useCallback(async ()=>{
    const {data} = await axios.get(`https://yog-seven.vercel.app/fitnessDetail/all`,{headers})
    setAllMeasurmentMembers(data)
  console.log(data)
   },[])
  
useEffect(()=>{
getAllmembersData()
},[getAllmembersData])


    return  <CTable className='m-3 ' align="middle" bordered style={{ borderColor: "#0B5345",width:'440%' }} hover responsive>
    <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
        <CTableRow >
            <CTableHeaderCell>Measurement_Date</CTableHeaderCell>
            <CTableHeaderCell>Member_ID</CTableHeaderCell>
            <CTableHeaderCell>Apply Date</CTableHeaderCell>
            <CTableHeaderCell>Name</CTableHeaderCell>
            <CTableHeaderCell>Contact</CTableHeaderCell>
            <CTableHeaderCell>Weight</CTableHeaderCell>
            <CTableHeaderCell>Height</CTableHeaderCell>
            <CTableHeaderCell>BMI</CTableHeaderCell>
            <CTableHeaderCell>Age</CTableHeaderCell>
            <CTableHeaderCell>Fat</CTableHeaderCell>
            <CTableHeaderCell>Neck</CTableHeaderCell>
            <CTableHeaderCell>Shoulder</CTableHeaderCell>
            <CTableHeaderCell>Chest</CTableHeaderCell>
            <CTableHeaderCell>Arms(R)</CTableHeaderCell>

            <CTableHeaderCell>Arms(L)</CTableHeaderCell>
            <CTableHeaderCell>ForArms</CTableHeaderCell>
            <CTableHeaderCell>Waist</CTableHeaderCell>
            <CTableHeaderCell>Hips</CTableHeaderCell>

            
            <CTableHeaderCell>Thigh(R)</CTableHeaderCell>
            <CTableHeaderCell>Thigh(L)</CTableHeaderCell>
            <CTableHeaderCell>Calf(R)</CTableHeaderCell>
            <CTableHeaderCell>Calf(L)</CTableHeaderCell>

            <CTableHeaderCell>Counseller</CTableHeaderCell>
            <CTableHeaderCell>NextFollowup_Date</CTableHeaderCell>
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
            <CTableDataCell>
                <CFormInput
                    className="mb-1"
                    type="text"
                />
            </CTableDataCell>
            <CTableDataCell>
                <CFormInput
                    className="mb-1"
                    type="number"                                           
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
                    style={{ minWidth: "70px" }}
                    type="text"
                />
            </CTableDataCell>
            <CTableDataCell>
                <CFormInput
                    className="mb-1"
                    style={{ minWidth: "100px" }}
                    type="text"
                />
            </CTableDataCell>
            <CTableDataCell>
                <CFormInput
                    className="mb-1"
                    style={{ minWidth: "70px" }}
                    type="text"
                />
            </CTableDataCell>
            <CTableDataCell>
                <CFormInput
                    className="mb-1"
                    style={{ minWidth: "70px" }}
                    type="text"
                />
            </CTableDataCell>
            <CTableDataCell>
                <CFormInput
                    className="mb-1"
                    style={{ minWidth: "70px" }}
                    type="text"
                />
            </CTableDataCell>
            <CTableDataCell>
                <CFormInput
                    className="mb-1"
                    style={{ minWidth: "70px" }}
                    type="text"
                />
            </CTableDataCell>
            <CTableDataCell>
                <CFormInput
                    className="mb-1"
                    style={{ minWidth: "70px" }}
                    type="text"
                />
            </CTableDataCell>
            <CTableDataCell>
                <CFormInput
                    className="mb-1"
                    style={{ minWidth: "70px" }}
                    type="text"
                />
            </CTableDataCell>
            <CTableDataCell>
                <CFormInput
                    className="mb-1"
                    style={{ minWidth: "70px" }}
                    type="text"
                />
            </CTableDataCell>
            <CTableDataCell>
                <CFormInput
                    className="mb-1"
                    style={{ minWidth: "70px" }}
                    type="text"
                />
            </CTableDataCell>
        </CTableRow>
         
                  {allMeasurmentMembers.map((el)=>
                   <CTableRow>                       
                    <CTableDataCell>{new Date(el.createdAt).toLocaleDateString()}</CTableDataCell>
                    <CTableDataCell>{el['Member_ID']}</CTableDataCell>
                    <CTableDataCell>{new Date(el.updatedAt).toLocaleDateString()}</CTableDataCell>
                    <CTableDataCell>{el.Fullname}</CTableDataCell>
                    <CTableDataCell>{el.ContactNumber}</CTableDataCell>
                    <CTableDataCell>{el.Weight}</CTableDataCell>
                    <CTableDataCell>{el.Height}</CTableDataCell>
                    <CTableDataCell>{el.BMI}</CTableDataCell>
                    <CTableDataCell>{el.Age}</CTableDataCell>
                    <CTableDataCell>{el.Fat}</CTableDataCell>
                    <CTableDataCell>{el.Neck}</CTableDataCell>
                    <CTableDataCell>{el.Shoulder}</CTableDataCell>
                    <CTableDataCell>{el.Chest}</CTableDataCell>
                    <CTableDataCell>{el.ArmsR}</CTableDataCell>      
                    <CTableDataCell>{el.ArmsL}</CTableDataCell>
                    <CTableDataCell>{el.ForArms}</CTableDataCell>
                    <CTableDataCell>{el.Waist}</CTableDataCell>
                    <CTableDataCell>{el.Hips}</CTableDataCell>  
                    <CTableDataCell>{el.ThighR}</CTableDataCell>
                    <CTableDataCell>{el.ThighL}</CTableDataCell>
                    <CTableDataCell>{el.CalfR}</CTableDataCell>
                    <CTableDataCell>{el.CalfL}</CTableDataCell>  
                    <CTableDataCell>{el.Counseller}</CTableDataCell>
                    <CTableDataCell>{new Date(el.NextFollowup_Date).toLocaleDateString()}</CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    </CTableRow>)}
           
    </CTableBody>
</CTable>
}

export default MeasurementTable