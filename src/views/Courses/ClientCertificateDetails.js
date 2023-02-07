import {CTable,CTableHead,CTableRow,CTableHeaderCell,CTableBody,CTableDataCell,CCard,CCardHeader,CCardTitle} from '@coreui/react'




function ClientCertificateDetails(){


    return<CCard className=''>
    <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }} className='mb-4'>
                           <CCardTitle className="mt-2">Teachers Training Course Client Certificate Details </CCardTitle>
    </CCardHeader>
   <CTable className='m-3 p-2' align="middle" bordered style={{ borderColor: "#0B5345",width:'240%' }} hover responsive>
      <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }}>
          <CTableRow>
           <CTableHeaderCell>Sr No</CTableHeaderCell>    
           <CTableHeaderCell>Name</CTableHeaderCell>    
           <CTableHeaderCell>Contact No</CTableHeaderCell>    
           <CTableHeaderCell>Email ID</CTableHeaderCell>    
           <CTableHeaderCell>Course </CTableHeaderCell>    
           <CTableHeaderCell>Joining date</CTableHeaderCell>    
           <CTableHeaderCell>Books</CTableHeaderCell>    
           <CTableHeaderCell>PRACTICAL</CTableHeaderCell>   
           <CTableHeaderCell>VIVA</CTableHeaderCell>    
           <CTableHeaderCell>Project</CTableHeaderCell>    
           <CTableHeaderCell>Videos</CTableHeaderCell>    
           <CTableHeaderCell>THEORY Exam</CTableHeaderCell>    
           <CTableHeaderCell>Result</CTableHeaderCell>    
           <CTableHeaderCell>Certification</CTableHeaderCell>    
           <CTableHeaderCell>Grade</CTableHeaderCell>    
           <CTableHeaderCell>Certification num</CTableHeaderCell>   
           <CTableHeaderCell>Couirer</CTableHeaderCell>   
           <CTableHeaderCell>Visit</CTableHeaderCell>   
           <CTableHeaderCell>Action</CTableHeaderCell>   
           <CTableHeaderCell>Edit/Delete</CTableHeaderCell>   
        </CTableRow>
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
        <CTableDataCell></CTableDataCell>
        <CTableDataCell></CTableDataCell>
        <CTableDataCell></CTableDataCell>
        <CTableDataCell></CTableDataCell>      
       </CTableRow>
   
       <CTableRow>
        <CTableDataCell>2</CTableDataCell>
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
        <CTableDataCell></CTableDataCell>
        <CTableDataCell></CTableDataCell>
        <CTableDataCell></CTableDataCell>
        <CTableDataCell></CTableDataCell>  
     
       </CTableRow>
       </CTableBody>
   </CTable>
   </CCard>



} 



export default ClientCertificateDetails


