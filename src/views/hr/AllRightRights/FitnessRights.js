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
    
    <CCol>
        <h5>Work out Templet</h5>
        <CFormSwitch size="xl" label="Work out Templet" />
        <CFormSwitch size="xl" label="Add Work out" />
        <CFormSwitch size="xl" label="Edit Work out" />
        <CFormSwitch size="xl" label="Delete Work out " />
    </CCol>
    <CCol>
        <h5>Exercise Libiry</h5>
        <CFormSwitch size="xl" label="Exercise Libiry"  />
        <CFormSwitch size="xl" label="Add Exercise" />
        <CFormSwitch size="xl" label="Edit Exercise" />
        <CFormSwitch size="xl" label="Delete Exercise" />
    </CCol>
    <CCol>
        <h5>Daily Workout Scheduling</h5>
        <CFormSwitch size="xl" label="Daily Workout Scheduling"  />
        <CFormSwitch size="xl" label="Add Daily Workout" />
        <CFormSwitch size="xl" label="Edit Daily Workout" />
        <CFormSwitch size="xl" label="Delete Daily Workout" />
    </CCol>
  
</CRow>



<CRow className='mt-4'>
 

</CRow>



</CTabPane>

}


export default FitnessRights