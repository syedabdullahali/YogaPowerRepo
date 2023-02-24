import {CForm,CCard,CCardHeader,CCardTitle,CFormInput,CCol,CFormSelect,
    CRow,CTable,CTableHead,CTableHeaderCell,CTableRow,CTableBody, 
    CTableDataCell,CButton} from '@coreui/react'

import {useState} from 'react'    

function EmployeeTargetSetupForm({closeForm}){
   
    const [TargetValue,setTargetValue] = useState('')

    console.log(TargetValue)

return <CCard>

    <CCardHeader  style={{ backgroundColor: '#0B5345', color: 'white' }}>
            <CCardTitle><h4>Empyolee Target Setup</h4></CCardTitle>


    </CCardHeader>
    <CCol className='d-flex justify-content-end mt-4 pe-4'>

    <CButton onClick={()=>closeForm()} color='danger' >Close</CButton>
    </CCol >


    <CForm className='p-4' style={{boxSizing:'border-box'}}>
        <CCol lg={6}>
             <CFormInput
             label='Employee'
             type='text'
             />
        </CCol>  

        <CCol lg={6}>
             <CFormSelect
             label='Types Of Target'
             onChange={(e)=>setTargetValue(e.target.value)}
             >
                <option ></option>
                <option >Sales Target</option>
                <option > Client Target</option>
                <option > Calls Target</option>
                <option >Lead Target</option>
                <option >Renewals</option>
                <option >Referral Leads</option>
                <option > Media Target</option>
             </CFormSelect>
        </CCol>
  
    <CRow>
        <CCol lg={6}>
             <CFormSelect
             label='Year'>
                <option>Year</option>
                <option value='Target 2'>2020</option>
                <option value='Target 3'>2021</option>
                <option value='Target 4'>2022</option>
                <option value='Target 5'>2023</option>

             </CFormSelect>
        </CCol>
       
    </CRow>

<div style={{overflowY:'scroll'}} className='mb-3'>
    <CTable  className='mt-3' style={{width:'200%'}}>
          <CTableHead >
             <CTableHeaderCell className=' '>Jan</CTableHeaderCell>
             <CTableHeaderCell className=''>Feb</CTableHeaderCell>
             <CTableHeaderCell className=''>March</CTableHeaderCell>
             <CTableHeaderCell className=''>April</CTableHeaderCell>
             <CTableHeaderCell className=''>May</CTableHeaderCell>
             <CTableHeaderCell className=''>Jun</CTableHeaderCell>
             <CTableHeaderCell className=''>July</CTableHeaderCell>
             <CTableHeaderCell className=''>August</CTableHeaderCell>
             <CTableHeaderCell className=''>Sep</CTableHeaderCell>
             <CTableHeaderCell className=''>Oct</CTableHeaderCell>
             <CTableHeaderCell className=''>Nov</CTableHeaderCell>
             <CTableHeaderCell className=''>Dec</CTableHeaderCell>
          </CTableHead>
          <CTableBody>
            <CTableRow>
                <CTableDataCell>
                    <CFormInput type='number'></CFormInput>
                </CTableDataCell>
                <CTableDataCell>
                    <CFormInput type='number'  ></CFormInput>
                </CTableDataCell>      <CTableDataCell>
                    <CFormInput type='number'></CFormInput>
                </CTableDataCell>      <CTableDataCell>
                    <CFormInput type='number'></CFormInput>
                </CTableDataCell>      <CTableDataCell>
                    <CFormInput type='number'></CFormInput>
                </CTableDataCell>      <CTableDataCell>
                    <CFormInput type='number'></CFormInput>
                </CTableDataCell>      <CTableDataCell>
                    <CFormInput type='number'></CFormInput>
                </CTableDataCell>      <CTableDataCell>
                    <CFormInput type='number'></CFormInput>
                </CTableDataCell>      <CTableDataCell>
                    <CFormInput type='number'></CFormInput>
                </CTableDataCell>      <CTableDataCell>
                    <CFormInput type='number'></CFormInput>
                </CTableDataCell>      <CTableDataCell>
                    <CFormInput type='number'></CFormInput>
                </CTableDataCell>      <CTableDataCell>
                    <CFormInput type='number'></CFormInput>
                </CTableDataCell>      
               
            </CTableRow>
            

          </CTableBody>
     </CTable>
</div>

     
     <CCol >
       <CButton onClick={()=>setActiveForm((value)=>!value)} >Save</CButton>
     </CCol>
    </CForm>
      </CCard>

}

export default EmployeeTargetSetupForm