import {
    CCol,
    CFormSwitch,
    CRow,
    CTabPane,
} from '@coreui/react'

function HrRights(){

return  <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={true} >


<CRow >
<CCol>
   <h5>Recuritment</h5>
   <CFormSwitch size="xl" label="Recuritment" />
   <CFormSwitch size="xl" label="Add Recuritment" />
   <CFormSwitch size="xl" label="Edit Recuritment" />
   <CFormSwitch size="xl" label="Delete Recuritment" />
</CCol>
<CCol>
   <h5>All Employee Profile</h5>
   <CFormSwitch size="xl" label="All Employee Profile"  />
   <CFormSwitch size="xl" label="Edit Employee Profile" />
   <CFormSwitch size="xl" label="Delete Employee Profile" />
</CCol>
<CCol>
   <h5>Empyolee Target Sheet</h5>
   <CFormSwitch size="xl" label="Empyolee Target Sheet"  />
   <CFormSwitch size="xl" label="Add Empyolee Target " />
   <CFormSwitch size="xl" label="Edit Empyolee Target " />
   <CFormSwitch size="xl" label="Delete Empyolee Target " />
</CCol>

</CRow>

<CRow className='my-5' >

<CCol>
   <h5>Biometric Staff</h5>
   <CFormSwitch size="xl" label="Biometric Staff" />
   <CFormSwitch size="xl" label="Edit Biometric Staff" />
   <CFormSwitch size="xl" label="Delete Biometric Staff" />
</CCol>
<CCol>
   <h5>EMP Attendance Register</h5>
   <CFormSwitch size="xl" label="EMP Attendance Register"  />
   <CFormSwitch size="xl" label="Edit Attendance Register" />
   <CFormSwitch size="xl" label="Delete Attendance Register" />
</CCol>
<CCol>
   <h5>Emp Check Ins</h5>
   <CFormSwitch size="xl" label="Emp Check Ins"  />
   <CFormSwitch size="xl" label="Edit Emp" />
   <CFormSwitch size="xl" label="Delete Emp" />
</CCol>

</CRow>



<CRow className='my-5'>
<CCol>
   <h5>EMP joining</h5>
   <CFormSwitch size="xl" label="EMP joining" />
   <CFormSwitch size="xl" label="Edit EMP joining" />
   <CFormSwitch size="xl" label="Delete EMP joining" />
</CCol>
<CCol>
   <h5>Job Profile</h5>
   <CFormSwitch size="xl" label="Job Profile" />
   <CFormSwitch size="xl" label="Edit Job Profile" />
   <CFormSwitch size="xl" label="Delete Job Profile" />
</CCol>
<CCol>
   <h5>Hr Policy</h5>
   <CFormSwitch size="xl" label="Hr Policy" />
   <CFormSwitch size="xl" label="Edit Hr Policy" />
   <CFormSwitch size="xl" label="Delete Hr Policy" />
</CCol>

</CRow>


<CRow className='my-5'>
<CCol>
   <h5>Holiday List</h5>
   <CFormSwitch size="xl" label="Holiday List" />
   <CFormSwitch size="xl" label="Edit Holiday List" />
   <CFormSwitch size="xl" label="Delete Holiday List" />
</CCol>
<CCol>
   <h5>Employee Document</h5>
   <CFormSwitch size="xl" label="Employee Document" />
   <CFormSwitch size="xl" label="Edit Employee Document" />
   <CFormSwitch size="xl" label="Delete Employee Document" />
</CCol>
<CCol>
   <h5>Leave Setup</h5>
   <CFormSwitch size="xl" label="Leave Setup" />
   <CFormSwitch size="xl" label="Edit Leave Setup" />
   <CFormSwitch size="xl" label="Delete Leave Setup" />
</CCol>

</CRow>

<CRow className='my-5'>

<CCol>
   <h5>Payrol Setup</h5>
   <CFormSwitch size="xl" label="Payrol Setup" />
   <CFormSwitch size="xl" label="Add Payrol " />
   <CFormSwitch size="xl" label="Edit Payrol " />
   <CFormSwitch size="xl" label="Delete Payrol " />
</CCol>
<CCol>
   <h5>Salary Sheet</h5>
   <CFormSwitch size="xl" label="Salary Sheet" />
   <CFormSwitch size="xl" label="Add Salary Sheet" />
   <CFormSwitch size="xl" label="Edit Salary Sheet" />
   <CFormSwitch size="xl" label="Delete Salary Sheet" />
</CCol>
<CCol>
   <h5>Emp Salary Slip</h5>
   <CFormSwitch size="xl" label="Emp Salary Slip" />
   <CFormSwitch size="xl" label="Edit Emp Salary Slip" />
   <CFormSwitch size="xl" label="Delete Emp Salary Slip" />
</CCol>

</CRow>

<CRow className='my-5'>

<CCol>
   <h5>Shift Timing Managment</h5>
   <CFormSwitch size="xl" label="Shift Timing Managment" />
   <CFormSwitch size="xl" label="Edit Shift Timing " />
   <CFormSwitch size="xl" label="Delete Shift Timing  " />
</CCol>
<CCol>
   <h5>Emp Salary Slip</h5>
   <CFormSwitch size="xl" label="Emp Salary Slip" />
   <CFormSwitch size="xl" label="Edit Emp Salary Slip" />
   <CFormSwitch size="xl" label="Delete Emp Salary Slip" />
</CCol>
<CCol>
   <h5>Emp Performance</h5>
   <CFormSwitch size="xl" label="Emp Performance" />
   <CFormSwitch size="xl" label="Trainer Performance" />
</CCol>

</CRow>




</CTabPane>



} 

export default HrRights