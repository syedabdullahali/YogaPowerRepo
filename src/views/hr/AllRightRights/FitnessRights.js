import {
    CCol,
    CFormSwitch,
    CRow,
    CTabPane,
} from '@coreui/react'

function FitnessRights(){

return <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={true} >
     <h4 className='mb-4'>Fitness Goal <span><CFormSwitch size="lg"/></span></h4>


<CRow >
    <CCol>
        <h5>Measurment</h5>
        <CFormSwitch size="xl" label="Measurment" />
        <CFormSwitch size="xl" label="Add Measurment" />
        <CFormSwitch size="xl" label="Edit Measurment " />
        <CFormSwitch size="xl" label="Delete Measurment " />
    </CCol>
    <CCol>
        <h5>All Client Dite</h5>
        <CFormSwitch size="xl" label="All Client Dite"  />
        <CFormSwitch size="xl" label="Add Client Dite" />
        <CFormSwitch size="xl" label="Edit Measurment " />
        <CFormSwitch size="xl" label="Delete Measurment " />
    </CCol>
    <CCol>
        <h5>Diet Plan Templet</h5>
        <CFormSwitch size="xl" label="Diet Plan Templet"  />
        <CFormSwitch size="xl" label="Add Diet Plan" />
        <CFormSwitch size="xl" label="Edit Diet Plan" />
        <CFormSwitch size="xl" label="Delete Diet Plan" />
    </CCol>
  
</CRow>

<CRow className='mt-5' >
     <h4 className='mb-4'>Stock Listing  <span><CFormSwitch size="lg"/></span></h4>

    <CCol>
        <h5>Clothes Product</h5>
        <CFormSwitch size="xl" label="Clothes Product" />
        <CFormSwitch size="xl" label="Add Clothes Product" />
        <CFormSwitch size="xl" label="Edit Clothes Product" />
        <CFormSwitch size="xl" label="Delete Clothes Product" />
    </CCol>
    <CCol>
        <h5>Ayurveda Medicine</h5>
        <CFormSwitch size="xl" label="Ayurveda Medicine"  />
        <CFormSwitch size="xl" label="Add Ayurveda Medicine" />
        <CFormSwitch size="xl" label="Edit Ayurveda Medicine" />
        <CFormSwitch size="xl" label="Delete Ayurveda Medicine" />
    </CCol>
    <CCol>
        <h5>Fitness Product</h5>
        <CFormSwitch size="xl" label="Fitness Product"  />
        <CFormSwitch size="xl" label="Add Fitness Product" />
        <CFormSwitch size="xl" label="Edit Fitness Product" />
        <CFormSwitch size="xl" label="Delete Fitness Product" />
    </CCol>
</CRow>

<CRow className='mt-5' > 
   <CCol>
   <h5>Foods Product</h5>

   </CCol>


</CRow>




<CRow className='mt-4'>
 

</CRow>



</CTabPane>

}


export default FitnessRights