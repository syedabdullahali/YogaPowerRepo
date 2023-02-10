import { CCard,CTable,CTableHead,CTableHeaderCell,CTableRow
    ,CTableBody,CTableDataCell,CCol,CRow,CButton,CForm,
    CCardHeader,CCardTitle,CFormInput,CCallout,CModal,
    CModalHeader,CModalTitle
 } from "@coreui/react"

 import React,{useState} from 'react'
 import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';

function ShiftTimingManagment (){

    const [showForm,setForm] = useState(true)
    const [visible, setVisible] = useState(false)






    return  <> 
 <CModal visible={visible} onClose={() => setVisible(false)}>
       <CModalHeader>
        <CModalTitle>Successfully Save   <CIcon icon={icon.cilCheckAlt} size="xl" color="success"/></CModalTitle>
        </CModalHeader> 
</CModal>



{showForm?<CCallout color="primary" className="bg-body d-flex justify-content-end my-4 p-4">
        <CButton onClick={()=>setForm((value)=>!value)}>Add New </CButton>
</CCallout>:

<CCard className="overflow-hidden my-4"   >
        <CCardHeader className="p-4" style={{ backgroundColor: '#0B5345', color: 'white' }}>
                 <CCardTitle> <h4>Shift Timing Managment</h4></CCardTitle>
        </CCardHeader>
    <div className="p-4">
         <CForm>
            <CCol className="d-flex justify-content-end">
                <CButton color='danger' onClick={()=>setForm(()=>true)}>Close</CButton>
            </CCol>
            <CRow>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  placeholder="Enter Shift Name"
                  label='Shift Name'
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="time"
                  label='Start Time'
                />
              </CCol>
            </CRow> 
            <CRow >
              <CCol md={6}>
              <CFormInput
                  type="time"
                  label='End Time'
                />
             
              </CCol>
            </CRow>    

          
          <CButton color="primary mt-4 px-4" onClick={(()=>{
            setVisible(value=>!value) 
            setForm(value=>!value) 
            })} >Save</CButton>

         </CForm>
    </div>
    <CCol style={{ backgroundColor: '#0B5345'}} className='p-1'>

    </CCol>
      </CCard>}
      
<CCard className="p-4">
<CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} hover responsive>
                            <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                                <CTableRow >
                                    <CTableHeaderCell>Sr.No</CTableHeaderCell>
                                    <CTableHeaderCell>Shift Name</CTableHeaderCell>
                                    <CTableHeaderCell>Start Time</CTableHeaderCell>
                                    <CTableHeaderCell>End Time</CTableHeaderCell>
                                    <CTableHeaderCell>Action </CTableHeaderCell>
                                    <CTableHeaderCell>Edit/Delete</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                <CTableRow>
                                    <CTableDataCell>
                                        
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        
                                    </CTableDataCell>
                                    <CTableDataCell>
                                       
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        
                                    </CTableDataCell>
                                    <CTableDataCell>
                                       
                                    </CTableDataCell>
                                    <CTableDataCell>
                                       
                                    </CTableDataCell>
                                                               
                                </CTableRow>
                               
                            </CTableBody>
</CTable>
</CCard>
</>

}



export default ShiftTimingManagment