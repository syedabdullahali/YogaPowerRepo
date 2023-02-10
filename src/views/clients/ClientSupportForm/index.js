import { CCard,CCol,CRow,CButton,CForm,
    CCardHeader,CCardTitle,CFormInput,CCallout,CModal,
 } from "@coreui/react"



function ClientSupportForm (){



return <CCard className="overflow-hidden my-4"   >
    <CCardHeader className="p-4" style={{ backgroundColor: '#0B5345', color: 'white' }}>
             <CCardTitle> <h4>Client Support Form</h4></CCardTitle>
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
              placeholder="Enter Client Name"
              label='Client Name'
            />
          </CCol>
          <CCol md={6}>
            <CFormInput
              type="number"
              label='Reg Mobile '
              placeholder="Enter Mobile  No"

            />
          </CCol>
        </CRow> 
        <CRow >
          <CCol md={6}>
          <CFormInput
              type="text"
              label='Type of Request'
              placeholder="Enter Type of Request"
            />
         
          </CCol>
          <CCol md={6}>
            <CFormInput
              type="date"
              label='Request Date'
            />
          </CCol>
        </CRow>    

        <CRow>
        
          <CCol md={6}>
            <CFormInput
              type="text"
              label='Request details'
              placeholder="Enter Request details"
            />
          </CCol>
        <CCol md={6}>
        <CFormInput
              type="text"
              label='Medium'
              placeholder="Enter Medium"
            />
        </CCol>

        </CRow> 


      
      <CButton color="primary mt-4 px-4" onClick={(()=>{
        setForm(value=>!value) 
        })} >Save</CButton>

     </CForm>
</div>

  </CCard>


}


export default ClientSupportForm