import {
    CCol,
    CFormSwitch,
    CRow,
    CTabPane,
} from '@coreui/react'

function InventoryRights(){


    return <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={true} >
    <h3 className='mb-4'>IMP Call List <span><CFormSwitch size="lg"/></span></h3>

<CRow >
   <CCol>
       <h5>IMP Call List</h5>
       <CFormSwitch size="xl" label="IMP Call lsit" />
       <CFormSwitch size="xl" label="Add IMP Call" />
       <CFormSwitch size="xl" label="Edit IMP Call" />
       <CFormSwitch size="xl" label="Delete IMP Call" />
   </CCol>
   <CCol>
       <h5>All Suppiler List</h5>
       <CFormSwitch size="xl" label="All Suppiler List"  />
       <CFormSwitch size="xl" label="Add Suppiler List" />
       <CFormSwitch size="xl" label="Edit Suppiler List" />
       <CFormSwitch size="xl" label="Delete Suppiler List" />
   </CCol>
   <CCol>
       <h5>Guest List</h5>
       <CFormSwitch size="xl" label="Guest List"  />
       <CFormSwitch size="xl" label="Add Guest List" />
       <CFormSwitch size="xl" label="Edit Guest List" />
       <CFormSwitch size="xl" label="Delete Guest List" />
   </CCol>

 
</CRow>

<CRow className='mt-5' >
<h3 className='mb-4 mt-2'>Stock Listing <span><CFormSwitch size="lg"/></span></h3>

   <CCol>
       <h5>Clothes Product </h5>
       <CFormSwitch size="xl" label="Clothes Product" />
       <CFormSwitch size="xl" label="Add Clothe Product" />
       <CFormSwitch size="xl" label="Edit Clothe Product" />
       <CFormSwitch size="xl" label="Delete Clothe Product" />
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



<CRow className='mt-4'>
<CCol>
       <h5>Foods Product </h5>
       <CFormSwitch size="xl" label="Foods Product" />
       <CFormSwitch size="xl" label="Add Foods Product" />
       <CFormSwitch size="xl" label="Edit Foods Product" />
       <CFormSwitch size="xl" label="Delete Foods Product" />
   </CCol>
   <CCol>
       <h5>Genral Product</h5>
       <CFormSwitch size="xl" label="Genral Product"  />
       <CFormSwitch size="xl" label="Add Genral Product" />
       <CFormSwitch size="xl" label="Edit Genral Product" />
       <CFormSwitch size="xl" label="Delete Genral Product" />
   </CCol>
   <CCol></CCol>


</CRow>

<CRow className='mt-4 pt-5'>
<CCol>
<h3>Stock Report</h3>
<CFormSwitch size="xl" label="Stock Report"  />
</CCol>

<CCol>
<h3>Purchase Report</h3>
<CFormSwitch size="xl" label="Purchase Report"  />
</CCol>

<CCol>
<h3>Stock Assigning</h3>
<CFormSwitch size="xl" label="Stock Assigning"  />
<CFormSwitch size="xl" label="Add Stock Assigning"  />

</CCol>
</CRow>

<CRow className='mt-4 '>
    <CCol>
        <h3>Stock Alert</h3>
        <CFormSwitch size="xl" label="Stock Alert"/>
        <CFormSwitch size="xl" label="Add Stock Alert"/>
    </CCol>
    <CCol>
        <h3>Stock Order List</h3>
        <CFormSwitch size="xl" label="Stock Order List"/>
        <CFormSwitch size="xl" label="Add Stock Order List"/>
    </CCol>
    <CCol></CCol>

</CRow>


</CTabPane> 


}

export default InventoryRights