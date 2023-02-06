import { CForm,CCard,CNav,CCol,CFormInput,CRow,CButton} from "@coreui/react"


function FitnessMeasurmentForm(){

return <CCard className="m-3 overflow-hidden" >
    <CNav className="p-2 px-3" style={{background:'#0B5345'}}>
     <h2 className="text-white"  >Measurment Form</h2>
    </CNav>    
<CForm className="p-3">
 <h3 style={{marginBottom:'2rem'}}>Body Measurement </h3>


<CRow className='mt-4'>
 <CCol   className='d-flex justify-content-between '  md={6}>
  <h5>Date</h5>
  <CFormInput
  type="date"
  className="w-50" 
  />
 </CCol>

 <CCol  className='d-flex justify-content-between '  md={6} >
  <h5 >Waist</h5>
  <CFormInput
  type="text"
  className="ms-4 w-50"
  placeholder="Enter Waist"
  />
 </CCol>
</CRow> 

<CRow  className='mt-4'>
 <CCol  className='d-flex justify-content-between '  md={6} >
  <h5 >Weight</h5>
  <CFormInput
  type="text"
  className="w-50"
  placeholder="Enter Weight"
  />
 </CCol>

 <CCol  className='d-flex justify-content-between '   md={6}>
  <h5 className="me-1">Lower Abs:</h5>
  <CFormInput
  type="text"
  placeholder="Enter Waist"
  className="w-50"
  />
 </CCol>
</CRow>

<CRow  className='mt-4'>
 <CCol  className='d-flex justify-content-between ' md={6} >
  <h5 >Neck</h5>
  <CFormInput
  type="text"
  className="w-50"
  placeholder="Enter Neck"
  />
 </CCol>

 <CCol  className='d-flex justify-content-between ' md={6}  >
  <h5 className="me-1">Hips</h5>
  <CFormInput
  type="text"
  placeholder="Enter Hips"
  className="w-50"
  />
 </CCol>
</CRow> 

<CRow  className='mt-4'>
 <CCol  className='d-flex justify-content-between '   md={6}>
  <h5 >Shoulder</h5>
  <CFormInput
  type="text"
  className="w-50"
  placeholder="Enter Shoulder"
  />
 </CCol>

 <CCol  className='d-flex justify-content-between '  md={6} >
  <h5 className="me-1">Left-Thigh</h5>
  <CFormInput
  type="text"
  placeholder="Enter Left Thigh"
  className="w-50"
  />
 </CCol>

 
</CRow> 


<CRow  className='mt-4'>
 <CCol  className='d-flex justify-content-between '   md={6}>
  <h5 >Chest</h5>
  <CFormInput
  type="text"
  className="w-50"
  placeholder="Enter Chest"
  />
 </CCol>

 <CCol  className='d-flex justify-content-between '  md={6}>
  <h5 className="me-1">Right-Thigh</h5>
  <CFormInput
  type="text"
  placeholder="Enter Right Thigh"
  className="w-50"
  />
 </CCol>

 </CRow> 

 <CRow className='mt-4'>
 <CCol  className='d-flex justify-content-between '  md={6} >
  <h5 >Upper Abs</h5>
  <CFormInput
  type="text"
  className="w-50"
  placeholder="Enter Upper Abs"
  />
 </CCol>

 <CCol  className='d-flex justify-content-between '  md={6} >
  <h5 className="me-1">Left-Arms</h5>
  <CFormInput
  type="text"
  placeholder="Enter Left Arms"
  className="w-50"
  />
 </CCol>

 
</CRow> 

<CRow  className='mt-4'>
 <CCol>

 </CCol>

 <CCol  className='d-flex justify-content-between '   md={6}>
  <h5 className="me-1">Right-Arms</h5>
  <CFormInput
  type="text"
  placeholder="Enter Right Arms"
  className="w-50"
  />
 </CCol>
</CRow> 

<h3 style={{marginBottom:'2rem'}}>BMI</h3>
<CRow className='mt-4'>
 <CCol  className='d-flex justify-content-between '   md={6}>
  <h5 >Fat</h5>
  <CFormInput
  type="text"
  className="w-50"
  placeholder="Enter Fat"
  />
 </CCol>

 <CCol  className='d-flex justify-content-between '  md={6} >
  <h5 className="me-1">RBM:</h5>
  <CFormInput
  type="text"
  placeholder="Enter RBM:"
  className="w-50"
  />
 </CCol>
 </CRow>

 <CRow className='mt-4'>
 <CCol  className='d-flex justify-content-between '  md={6}>
  <h5 >Body Age</h5>
  <CFormInput
  type="text"
  className="w-50"
  placeholder="Enter Body Age"
  />
 </CCol>

 <CCol  className='d-flex justify-content-between '  md={6} >
  <h5 className="me-1">Vis. Fat:</h5>
  <CFormInput
  type="text"
  placeholder="Enter RBM:"
  className="w-50"
  />
 </CCol>
 </CRow>

 
 <CRow  className='mt-4'  md={6}>
 <CCol  className='d-flex justify-content-between ' >
  <h5 >BMI</h5>
  <CFormInput
  type="text"
  className="w-50"
  placeholder="Enter BMI"
  />
 </CCol>

 <CCol  className='d-flex justify-content-between '  md={6} >
  <h5 className="me-1">Sub Fat:</h5>
  <CFormInput
  type="text"
  placeholder="Enter Sub Fat"
  className="w-50"
  />
 </CCol>
 </CRow>


 <CRow className='mt-4'>
 <CCol  className='d-flex justify-content-between '  md={6} >
 <h5 className="me-1">Muscle</h5>
  <CFormInput
  type="text"
  placeholder="Enter  "
  className="w-50"
  />

 </CCol>

 <CCol  className='d-flex justify-content-between '  md={6} >

 </CCol>
 </CRow>


</CForm>
<CCol className="p-3">
  <CButton>Save Measurments</CButton>  
</CCol>

<CCol  className="d-flex justify-content-around p-1 text-white " style={{background:'#0B5345'}}>
<p  className="m-2">S.No</p>
<p className="m-2">Date	Weight</p>
<p className="m-2">Neck</p>
<p className="m-2">Shoulder</p>	
<p className="m-2">Chest</p>
<p className="m-2">Upper Abs</p>
<p className="m-2">Waist</p>
<p className="m-2">Lower Abs</p>
<p className="m-2">Hips</p>		
<p className="m-2">Left-Thigh</p>	
<p className="m-2">Right-Thigh</p>		
<p className="m-2">Left-Arms</p>	
<p className="m-2">Right-Arms</p>	
<p className="m-2">Fat	Body Age</p>	
<p className="m-2">BMI</p>
<p className="m-2"> Muscle</p>	
<p className="m-2">RBM</p>	
<p className="m-2">	Vis Fat.</p>	
<p className="m-2"> Sub Fat</p>				
</CCol>


</CCard>




}

export default FitnessMeasurmentForm 