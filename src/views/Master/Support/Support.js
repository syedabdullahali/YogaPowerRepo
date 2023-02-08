import {CCard,CCardTitle,CCardHeader,CTable,CTableHead,
    CTableHeaderCell,CTableBody,CTableRow,CTableDataCell, 
    CButton,CCol,CFormInput,CFormSwitch}from '@coreui/react'


function Support (){

    // const [activeForm,setActiveForm] = useState(false)

    // const closeForm  = ()=>{
    //   setActiveForm(false)
    // }
  
  
  return <CCard>

       <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
           <CCardTitle className='p-2'>
              <h4>Empyolee Target Sheet</h4></CCardTitle>
       </CCardHeader>
  
      
         <CCol className='d-flex p-4'>
          <CFormInput
            type="text"
            id="exampleFormControlInput1"
            placeholder="Enter Your Request Type"
            label='Request'
             className='w-50'
          />
          <CButton className='mx-2 ' >Save</CButton>
        </CCol>
        
  
  
  
     <div style={{overflowX:'scroll',boxSizing:'border-box'}} className='p-4'>
  
       <CTable  >
            <CTableHead >
               <CTableHeaderCell className='p-3'>Sr No</CTableHeaderCell>
               <CTableHeaderCell className='p-3'>Date</CTableHeaderCell>
               <CTableHeaderCell className='p-3'>Request Type</CTableHeaderCell>
               <CTableHeaderCell className='p-3'>ON/OFF</CTableHeaderCell>
               <CTableHeaderCell className='p-3'>Action</CTableHeaderCell>
               <CTableHeaderCell className='p-3'>Edit/Delete</CTableHeaderCell>
               
            </CTableHead>
            <CTableBody>
              <CTableRow>
                  <CTableDataCell>1</CTableDataCell>
                  <CTableDataCell></CTableDataCell>
                  <CTableDataCell></CTableDataCell>
                  <CTableDataCell className=''>
                  <CFormSwitch size="xl"  id="formSwitchCheckDefaultXL" style={{margin:'auto'}}/>
                  </CTableDataCell>
                  <CTableDataCell></CTableDataCell>
                  <CTableDataCell></CTableDataCell>
                 
              </CTableRow>
            </CTableBody>
       </CTable>
       </div>
  
  </CCard>






}


export default Support 




