import {CCard,CTable,CCol,CTableHead,CTableRow,CTableHeaderCell,
    CTableBody,CTableDataCell,CFormInput,CCardHeader,CCardTitle,CButton
 } from '@coreui/react'

function StockOrderList (){

    return (
        <CCard >
             <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                        <CCardTitle>Stock Order List</CCardTitle>
            </CCardHeader>
        
                    <CCol className='mt-2 p-4'>
                        <CButton className="float-end" onClick={() => { setAction(!action), clear() }}> Add Supplier List</CButton>
                    </CCol>
        
        
        <CTable className='mt-3 ' align="middle" bordered style={{ borderColor: "#0B5345",width:'150%' }} hover responsive>
                        <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                            <CTableRow >
                            <CTableHeaderCell>Sr No</CTableHeaderCell>
                                <CTableHeaderCell>Order date</CTableHeaderCell>
                                <CTableHeaderCell>Product Category</CTableHeaderCell>
                                <CTableHeaderCell>Product Name</CTableHeaderCell>
                                <CTableHeaderCell>Brand Name</CTableHeaderCell>
                                <CTableHeaderCell>Category</CTableHeaderCell>
                                <CTableHeaderCell>Product Prize</CTableHeaderCell>
                                <CTableHeaderCell>Orders Qty</CTableHeaderCell>
                                <CTableHeaderCell>Total Prize</CTableHeaderCell>
                                <CTableHeaderCell>Action</CTableHeaderCell>
                                <CTableHeaderCell>Edit/Delete</CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            <CTableRow>
                                <CTableDataCell>
                                    <CFormInput
                                        className="mb-1"
                                        style={{ minWidth: "60px" }}
                                        type="text"
                                        disabled
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />
                                </CTableDataCell>
                                <CTableDataCell>
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        style={{ minWidth: "120px" }}
                                        disabled
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />
                                </CTableDataCell>
                                <CTableDataCell>
                                    <CFormInput
                                        className="mb-1"
                                        style={{ minWidth: "120px" }}
                                        type="text"
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />
                                </CTableDataCell>
                                <CTableDataCell>
                                    <CFormInput
                                        className="mb-1"
                                        style={{ minWidth: "100px" }}
                                        type="text"
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />
                                </CTableDataCell>
                                <CTableDataCell>
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        style={{ minWidth: "200px" }}
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />
                                </CTableDataCell>
                                <CTableDataCell>
                                    <CFormInput
                                        className="mb-1"
                                        style={{ minWidth: "120px" }}
                                        type="text"
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />
                                </CTableDataCell>
                                <CTableDataCell>
                                    <CFormInput
                                        className="mb-1"
                                        style={{ minWidth: "120px" }}
                                        type="number"
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />
                                </CTableDataCell>
                                 <CTableDataCell>
                                    <CFormInput
                                        className="mb-1"
                                        style={{ minWidth: "120px" }}
                                        type="number"
                                        disabled
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />
                                </CTableDataCell>
                                <CTableDataCell>
                                    <CFormInput
                                        className="mb-1"
                                        style={{ minWidth: "120px" }}
                                        type="number"
                                        disabled
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />
                                </CTableDataCell>
                                <CTableDataCell>
                                    <CFormInput
                                        className="mb-1"
                                        style={{ minWidth: "120px" }}
                                        type="number"
                                        disabled
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />
                                </CTableDataCell>
                                <CTableDataCell>
                                    <CFormInput
                                        className="mb-1"
                                        style={{ minWidth: "120px" }}
                                        type="number"
                                        disabled
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />
                                </CTableDataCell>
                                
                            </CTableRow>
                            <CTableRow>
                                <CTableDataCell>1
                                    
                                </CTableDataCell>   
                                <CTableDataCell>
                                    
                                </CTableDataCell>
                                
                                <CTableDataCell>
                                   
                                </CTableDataCell>
                                <CTableDataCell>
                                  
                                </CTableDataCell>
                                <CTableDataCell>
                                    
                                </CTableDataCell>
                                <CTableDataCell>
                                    
                                </CTableDataCell>
                                <CTableDataCell>
                                   
                                </CTableDataCell>
                                 <CTableDataCell>
                                    
                                </CTableDataCell>
                                <CTableDataCell>
                                    
                                </CTableDataCell>
                                <CTableDataCell>
                                    
                                </CTableDataCell>
                               
                            </CTableRow>
                          
                        </CTableBody>
                    </CTable>
        
        
        
        </CCard>
        
        )



}


export default StockOrderList
