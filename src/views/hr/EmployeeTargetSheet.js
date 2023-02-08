import {CCard,CCardTitle,CCardHeader,CTable,CTableHead,
    CTableHeaderCell,CTableBody,CTableRow,CTableDataCell, 
    CButton,CCol}from '@coreui/react'

import React,{useState} from 'react'    

const  EmployeeTargetSetupForm =  React.lazy(()=>import('./EmployeeTargetSetupForm'))
  

function EmployeeTargetSheet(){

  const [activeForm,setActiveForm] = useState(false)

  const closeForm  = ()=>{
    setActiveForm(false)
  }


return <CCard>



   

     <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
         <CCardTitle className='p-2'>
            <h4>Empyolee Target Sheet</h4></CCardTitle>
     </CCardHeader>

     <div className='p-4'>
     <CCol className='pb-4 mt-3  d-flex justify-content-end '>
  <CButton onClick={()=>setActiveForm((value)=>!value)} >Add New</CButton>
  </CCol>
  {activeForm && <EmployeeTargetSetupForm closeForm={closeForm}/>}

  </div>   


   <div style={{overflowX:'scroll',boxSizing:'border-box'}} className='p-4'>

     <CTable style={{width:'180%'}} className='mt-3'>
          <CTableHead >
             <CTableHeaderCell className='p-3'>Sr No</CTableHeaderCell>
             <CTableHeaderCell className='p-3'>Emp</CTableHeaderCell>
             <CTableHeaderCell className='p-3'>Types Of Target</CTableHeaderCell>
             <CTableHeaderCell className='p-3'>Year</CTableHeaderCell>
             <CTableHeaderCell className='p-3'>Jan</CTableHeaderCell>
             <CTableHeaderCell className='p-3'>Feb</CTableHeaderCell>
             <CTableHeaderCell className='p-3'>March</CTableHeaderCell>
             <CTableHeaderCell className='p-3'>April</CTableHeaderCell>
             <CTableHeaderCell className='p-3'>May</CTableHeaderCell>
             <CTableHeaderCell className='p-3'>Jun</CTableHeaderCell>
             <CTableHeaderCell className='p-3'>July</CTableHeaderCell>
             <CTableHeaderCell className='p-3'>August</CTableHeaderCell>
             <CTableHeaderCell className='p-3'>Sep</CTableHeaderCell>
             <CTableHeaderCell className='p-3'>Oct</CTableHeaderCell>
             <CTableHeaderCell className='p-3'>Nov</CTableHeaderCell>
             <CTableHeaderCell className='p-3'>Dec</CTableHeaderCell>
          </CTableHead>
          <CTableBody>
            <CTableRow>
                <CTableDataCell>1</CTableDataCell>
                <CTableDataCell></CTableDataCell>
                <CTableDataCell></CTableDataCell>
                <CTableDataCell></CTableDataCell>
                <CTableDataCell></CTableDataCell>
                <CTableDataCell></CTableDataCell>
                <CTableDataCell></CTableDataCell>
                <CTableDataCell></CTableDataCell>
                <CTableDataCell></CTableDataCell>
                <CTableDataCell></CTableDataCell>
                <CTableDataCell></CTableDataCell>
                <CTableDataCell></CTableDataCell>
                <CTableDataCell></CTableDataCell>
                <CTableDataCell></CTableDataCell>
                <CTableDataCell></CTableDataCell>
                <CTableDataCell></CTableDataCell>
            </CTableRow>
            

              


          </CTableBody>
     </CTable>
     </div>

</CCard>

}


export default EmployeeTargetSheet