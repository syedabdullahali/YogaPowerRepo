import {CTable,CTableHead,CTableRow,CTableHeaderCell,CTableBody,CTableDataCell,CCard,CCardHeader,CCardTitle} from '@coreui/react'


function TtcClientDetails (){


return<CCard className=''>
 <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }} className='mb-4'>
                        <CCardTitle className="mt-2">Teachers Training Course Client Details</CCardTitle>
 </CCardHeader>
<CTable className='m-3 p-2' align="middle" bordered style={{ borderColor: "#0B5345",width:'180%' }} hover responsive>
   <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }}>
       <CTableRow>
        <CTableHeaderCell>Member ID</CTableHeaderCell>    
        <CTableHeaderCell>Client Name</CTableHeaderCell>    
        <CTableHeaderCell>Mob</CTableHeaderCell>    
        <CTableHeaderCell>Gender</CTableHeaderCell>    
        <CTableHeaderCell>Course Types</CTableHeaderCell>    
        <CTableHeaderCell>Packages</CTableHeaderCell>    
        <CTableHeaderCell>Start Date</CTableHeaderCell>    
        <CTableHeaderCell>End Date</CTableHeaderCell> 
        <CTableHeaderCell>Invoice </CTableHeaderCell>    
        <CTableHeaderCell>Trainner</CTableHeaderCell>    
        <CTableHeaderCell>Action</CTableHeaderCell>    
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
    </CTableRow>
    </CTableBody>
</CTable>
</CCard>
}

export default TtcClientDetails