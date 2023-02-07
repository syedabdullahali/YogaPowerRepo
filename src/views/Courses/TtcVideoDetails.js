import {CTable,CTableHead,CTableRow,CTableHeaderCell,CTableBody,CTableDataCell,CCard,CCardHeader,CCardTitle} from '@coreui/react'




function TtcVideoDetails(){


    return<CCard className=''>
    <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }} className='mb-4'>
                           <CCardTitle className="mt-2">Teachers Training Course Video Details</CCardTitle>
    </CCardHeader>
   <CTable className='m-3 p-2' align="middle" bordered style={{ borderColor: "#0B5345",width:'140%' }} hover responsive>
      <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }}>
          <CTableRow>
           <CTableHeaderCell>Sr No</CTableHeaderCell>    
           <CTableHeaderCell>Date</CTableHeaderCell>    
           <CTableHeaderCell>Course Name</CTableHeaderCell>    
           <CTableHeaderCell>Formal of Videos</CTableHeaderCell>    
           <CTableHeaderCell>Session No</CTableHeaderCell>    
           <CTableHeaderCell>Document</CTableHeaderCell>    
           <CTableHeaderCell>Action</CTableHeaderCell>    
           <CTableHeaderCell>Sender</CTableHeaderCell>    
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
     
       </CTableRow>
       </CTableBody>
   </CTable>
   </CCard>



} 



export default TtcVideoDetails


