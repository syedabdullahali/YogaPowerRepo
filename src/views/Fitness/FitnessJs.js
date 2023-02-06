import { useEffect,useCallback,useState } from 'react'
import axios from 'axios';
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
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTabPane,
} from '@coreui/react'

import FitnessMeasurmentForm from './form/FitnessMeasurmentForm'

const Token =`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzQxMzZlNmJlMTBkMTdjZjRhMzQ4YWQiLCJlbWFpbCI6InlvZ3Bvd2VyaW50ZXJuYXRpb25hbEBnbWFpbC5jb20iLCJkYXNoYm9hcmRBY2Nlc3MiOiJhZG1pbiIsImNlbnRlciI6IlRoYWt1ci1WbWFsbCIsImNlbnRlckNvZGUiOiJWTSIsImlhdCI6MTY3NTQxNzI2NSwiZXhwIjoxNjc1NTc5MjY1fQ.tn6qYM3WPXaEk9wtLbyIi1YsYIIBjn6BGUViqVL1x4E`

const Fitness = () => {

  const [active,setActiveButton] = useState(1)
  const [allMeasurmentMembers,setAllMeasurmentMembers] =useState([])

  // Forms 
  const [showMeasurmentForm,setMeasurmentForm]  =useState(false)




  const getAllmembersData = useCallback(async ()=>{

    const {data} = await axios.get(`https://yog-seven.vercel.app/memberForm/all`,{
      headers: {
          'Authorization': `Bearer ${Token}`
      }
  })
    setAllMeasurmentMembers(data)

  console.log(data)
   },[])
  

useEffect(()=>{
getAllmembersData()
},[getAllmembersData])


  





  return (
   <CCard style={{overflow:'hidden'}}>
    
    <CNav variant="pills" role="tablist" style={{background:'#0B5345'}}> 
        <CNavLink className='m-2 p-2' style={{color:'white',cursor:'pointer'}}  active={active ===1} onClick={()=>setActiveButton(1)}>
         Measurment
        </CNavLink >
        <CNavLink className='m-2 p-2' style={{color:'white',cursor:'pointer'}} active={active ===2} onClick={()=>setActiveButton(2)}>
         ALL Diet Client 
        </CNavLink>
        <CNavLink className='m-2 p-2' style={{color:'white',cursor:'pointer'}} active={active ===3} onClick={()=>setActiveButton(3)}>
         Diet Plan Templet
        </CNavLink>
        <CNavLink className='m-2 p-2' style={{color:'white',cursor:'pointer'}} active={active ===4} onClick={()=>setActiveButton(4)}>
         Work out Templet 
        </CNavLink>
        <CNavLink className='m-2 p-2' style={{color:'white',cursor:'pointer'}} active={active ===5} onClick={()=>setActiveButton(5)}>
          Exercise Libiry
        </CNavLink>
        <CNavLink className='m-2 p-2' style={{color:'white',cursor:'pointer'}} active={active ===6} onClick={()=>setActiveButton(6)}>
         Daily Workout Scheduling
        </CNavLink>
    </CNav >
         <CCol className='m-4 mt-1 p-4' style={{position:'relative'}}>   
         <CButton style={{position:'absolute',right:'0'}}  onClick={()=>setMeasurmentForm((value)=>!value)}>Add New</CButton>
         </CCol>
    {showMeasurmentForm && active ===1?<FitnessMeasurmentForm/>:''}     

   { active ===1 &&  <CTable className='m-3 ' align="middle" bordered style={{ borderColor: "#0B5345",width:'440%' }} hover responsive>
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
                                 

                                           <CTableRow>                       
                                            <CTableDataCell>1</CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>      
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>  
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>  
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            </CTableRow>
                                   
                            </CTableBody>
      </CTable>}

      { active ===2 &&  <CTable className='m-3 p-2' align="middle" bordered style={{ borderColor: "#0B5345",width:'180%' }} hover responsive>
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
                                <CTableRow>                              
                                            <CTableDataCell>1</CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                                                    
                                  </CTableRow>
                               
                            </CTableBody>
      </CTable>}   

      { active ===3 &&  <CTable className='m-3 p-2' align="middle" bordered style={{ borderColor: "#0B5345",width:'120%' }} hover responsive>
                            <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                                <CTableRow >
                                    <CTableHeaderCell>Sr No</CTableHeaderCell>
                                    <CTableHeaderCell>Diet plan name</CTableHeaderCell>
                                    <CTableHeaderCell>Diet Duretion</CTableHeaderCell>
                                    <CTableHeaderCell>Format</CTableHeaderCell>
                                    <CTableHeaderCell>Diet Plan</CTableHeaderCell>
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
                                <CTableRow>                              
                                            <CTableDataCell>1</CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                                                                                                
                                  </CTableRow>
                               
                            </CTableBody>
      
      
      </CTable>} 
         
      { active ===4 &&  <CTable className='m-3 p-2' align="middle" bordered style={{ borderColor: "#0B5345",width:'180%' }} hover responsive>
                            <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                                <CTableRow >
                                    <CTableHeaderCell>Sr No</CTableHeaderCell>
                                    <CTableHeaderCell>Types of Exercise</CTableHeaderCell>
                                    <CTableHeaderCell>Exercise Image</CTableHeaderCell>
                                    <CTableHeaderCell>Video</CTableHeaderCell>
                                    <CTableHeaderCell>Exercise Name</CTableHeaderCell>
                                    <CTableHeaderCell>Description</CTableHeaderCell>
                                    <CTableHeaderCell>Edit/Delete</CTableHeaderCell>
                                    <CTableHeaderCell>Create Workout</CTableHeaderCell>
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
                                    
                                    
                                   
                                </CTableRow>
                                <CTableRow>                              
                                            <CTableDataCell>1</CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            
                                                                    
                                  </CTableRow>
                               
                            </CTableBody>
      </CTable>}   
      { active ===5 &&  <CTable className='m-3 p-2' align="middle" bordered style={{ borderColor: "#0B5345",width:'180%' }} hover responsive>
                            <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                                <CTableRow >
                                    <CTableHeaderCell>Sr No</CTableHeaderCell>
                                    <CTableHeaderCell>Category Name</CTableHeaderCell>
                                    <CTableHeaderCell>Exercise Image</CTableHeaderCell>
                                    <CTableHeaderCell>Video</CTableHeaderCell>
                                    <CTableHeaderCell>Exercise Name</CTableHeaderCell>
                                    <CTableHeaderCell>Description </CTableHeaderCell>
                                    <CTableHeaderCell>Created By</CTableHeaderCell>
                                    <CTableHeaderCell>Edit/delete</CTableHeaderCell>
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
                                    
                                    
                                    
                                   
                                </CTableRow>
                                <CTableRow>                              
                                            <CTableDataCell>1</CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            
                                                                    
                                  </CTableRow>
                               
                            </CTableBody>
      </CTable>}  
      { active ===6 &&  <CTable className='m-3 p-2' align="middle" bordered style={{ borderColor: "#0B5345",width:'150%' }} hover responsive>
                            <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                                <CTableRow >
                                    <CTableHeaderCell>Sr No</CTableHeaderCell>
                                    <CTableHeaderCell>Workout Name</CTableHeaderCell>
                                    <CTableHeaderCell>No of Days</CTableHeaderCell>
                                    <CTableHeaderCell>Created Date</CTableHeaderCell>
                                    <CTableHeaderCell>Created From</CTableHeaderCell>
                                    <CTableHeaderCell>Created By</CTableHeaderCell>
                                    <CTableHeaderCell>Edit/delete</CTableHeaderCell>
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
                                    
                                    
                                    
                                   
                                </CTableRow>
                                <CTableRow>                              
                                            <CTableDataCell>1</CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            
                                            
                                                                    
                                  </CTableRow>
                               
                            </CTableBody>
      </CTable>}   


  </CCard> 
  )
}

export default Fitness
