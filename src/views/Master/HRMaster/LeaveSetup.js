import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCardTitle,
    CCol,
    CFormInput,
    CRow,
    CForm,
    CFormSelect,
    CCallout,
    CModal,
    CModalHeader,
    CModalTitle,
    CTable,
    CTableHead,
    CTableRow,
    CTableHeaderCell,
    CTableBody,
    CTableDataCell

} from "@coreui/react";

import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';

import React, { useState } from "react";




function LeaveSetup(){

    const [showForm,setForm] = useState(true)
    const [visible, setVisible] = useState(false)


return <div>
<CModal visible={visible} onClose={() => setVisible(false)}>
   <CModalHeader>
    <CModalTitle>Successfully Save   <CIcon icon={icon.cilCheckAlt} size="xl" color="success"/></CModalTitle>
    </CModalHeader> 
</CModal>

{showForm?<CCallout color="primary" className="bg-body d-flex justify-content-end">
        <CButton onClick={()=>setForm((value)=>!value)}>Add New Payrol Setup</CButton>
</CCallout>:

<CCard className="overflow-hidden"   >
    <CCardHeader className="p-4" style={{ backgroundColor: '#0B5345', color: 'white' }}>
             <CCardTitle> <h4>Job Profile </h4></CCardTitle>
    </CCardHeader>
<div className="p-4">
     <CForm>
        <CCol className="d-flex justify-content-end">
            <CButton color='danger' onClick={()=>setForm(()=>true)}>Close</CButton>
        </CCol>
         

        <CRow>
          <CCol md={6}>
          <CFormSelect
              label='Department'
              options={[
                "Select Dpartment"
              ]}
          />
            </CCol>   
            <CCol md={6}>
          <CFormSelect
              label='Designation'
              options={[
               "Select Designation"
              ]}
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




  <CCard className="mb-3 border-success mt-4">
                <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                    <CCardTitle className="mt-2">Leave Setup</CCardTitle>
                </CCardHeader>
                <CCardBody>
                    
                <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} hover responsive>
                        <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                            <CTableRow >
                                <CTableHeaderCell>Sr.No</CTableHeaderCell>
                                <CTableHeaderCell>Department</CTableHeaderCell>

                                <CTableHeaderCell>Designation</CTableHeaderCell>
                                <CTableHeaderCell>Job Profile</CTableHeaderCell>

                                <CTableHeaderCell>Action</CTableHeaderCell>
                                <CTableHeaderCell>Edit/Delete </CTableHeaderCell>
                             
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
                </CCardBody>
            </CCard>
  </div>
} 

export default LeaveSetup