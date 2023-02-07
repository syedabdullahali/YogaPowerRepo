import React,{useState} from 'react'
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


// form 
import FitnessMeasurmentForm from './form/FitnessMeasurmentForm'
import AllDietClientForm from './form/AllDietClientForm';
import DietPlanTempletForm from './form/DietPlanTempletForm';
import WorkoutTempletForm from './form/WorkoutTempletForm';
import ExerciseLbiiry from './form/ExerciseLibiry';
import DailyWorkoutScheduling from './form/DailyWorkoutScheduling';

// Tables
const MeasurementTable = React.lazy(()=>import('./form/Tablels/MeasurmentTable'))
const ClientDietTable  = React.lazy(()=>import('./form/Tablels/ClientDietTable'))



const Fitness = () => {

  const [active,setActiveButton] = useState(1)
    // Forms 
  const [showForm,setForm]  =useState(false)
  // Barriar Token 
  let user = JSON.parse(localStorage.getItem('user-info'))
  const token = user.token;   




const  closeFormFun =()=>{
    setForm(()=>false)
 }  





  return (
   <CCard style={{overflow:'hidden'}}>
    
    <CNav variant="pills" role="tablist" style={{background:'#0B5345'}}> 
        <CNavLink className='m-2 p-2' style={{color:'white',cursor:'pointer'}}  active={active ===1} onClick={()=>{setActiveButton(1),closeFormFun()}}>
         Measurment
        </CNavLink >
        <CNavLink className='m-2 p-2' style={{color:'white',cursor:'pointer'}} active={active ===2} onClick={()=>{setActiveButton(2),closeFormFun()}}>
         ALL Diet Client 
        </CNavLink>
        <CNavLink className='m-2 p-2' style={{color:'white',cursor:'pointer'}} active={active ===3} onClick={()=>{setActiveButton(3),closeFormFun()}}>
         Diet Plan Templet
        </CNavLink>
        <CNavLink className='m-2 p-2' style={{color:'white',cursor:'pointer'}} active={active ===4} onClick={()=>{setActiveButton(4),closeFormFun()}}>
         Work out Templet 
        </CNavLink>
        <CNavLink className='m-2 p-2' style={{color:'white',cursor:'pointer'}} active={active ===5} onClick={()=>{setActiveButton(5),closeFormFun()}}>
          Exercise Libiry
        </CNavLink>
        <CNavLink className='m-2 p-2' style={{color:'white',cursor:'pointer'}} active={active ===6} onClick={()=>{setActiveButton(6),closeFormFun()}}>
         Daily Workout Scheduling
        </CNavLink>
    </CNav >
         <CCol className='m-4 mt-1 p-4' style={{position:'relative'}}>   
         <CButton style={{position:'absolute',right:'0'}}  onClick={()=>setForm((value)=>!value)}>Add New</CButton>
         </CCol>
    {showForm && active ===1?<FitnessMeasurmentForm  closeFormFun={closeFormFun} />:''}    
    {showForm && active ===2?<AllDietClientForm  closeFormFun={closeFormFun} />:''}  
    {showForm && active ===3?<DietPlanTempletForm  closeFormFun={closeFormFun} />:''}  
    {showForm && active ===4?<WorkoutTempletForm  closeFormFun={closeFormFun} />:''}   
    {showForm && active ===5?<ExerciseLbiiry closeFormFun={closeFormFun} />:''}     
    {showForm && active ===6?<DailyWorkoutScheduling closeFormFun={closeFormFun} />:''}     

  
   
   
 

   { active ===1 &&  <MeasurementTable Token={token}/>}
   { active ===2 &&  <ClientDietTable Token={token}/>}   

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
