import {CTable,CTableHead,CTableRow,CTableHeaderCell,CTableBody,CTableDataCell,CCard,CCardHeader,CCardTitle} from '@coreui/react'

function TtcPdfDetails(){


    return<CCard className=''>
    <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }} className='mb-4'>
                           <CCardTitle className="mt-2">Teachers Training Course PDF Details</CCardTitle>
    </CCardHeader>
   <CTable className='m-3 p-2' align="middle" bordered style={{ borderColor: "#0B5345",width:'100%' }} hover responsive>
      <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }}>
          <CTableRow>
           <CTableHeaderCell>Sr No</CTableHeaderCell>    
           <CTableHeaderCell>Course Name</CTableHeaderCell>    
           <CTableHeaderCell>Formal of PDF</CTableHeaderCell>    
           <CTableHeaderCell>Type Of Doc</CTableHeaderCell>    
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
       </CTableRow>
   
       <CTableRow>
        <CTableDataCell>2</CTableDataCell>
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



export default TtcPdfDetails