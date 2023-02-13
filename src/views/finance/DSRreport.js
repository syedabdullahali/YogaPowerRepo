import React from 'react'
import {
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CFormInput,
    CFormSelect,
    CInputGroup,
    CInputGroupText,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilArrowCircleBottom, cilArrowCircleTop, cilPlus } from '@coreui/icons'

const DSRreport = () => {
    return (
        <CRow>
            <CCol lg={12} sm={12}>
                <CCard className='mb-3 border-top-success border-top-3'>

                    <CCardHeader>
                        <strong className="mt-2">DSR Report</strong>
                    </CCardHeader>

                    <CCardBody>
                        

                        




                        <CRow className='d-flex justify-content-center mb-2'>
                            <CCol lg={3} sm={6} className='mb-2'>
                                <CInputGroup
                                    className='mb-2'
                                >
                                    <CInputGroupText
                                        component="label"
                                        htmlFor="inputGroupSelect01"
                                    >
                                        From
                                    </CInputGroupText>
                                    <CFormInput
                                        type='date'
                                        placeholder="Search"
                                        aria-label="Recipient's username"
                                        aria-describedby="button-addon2"
                                    />
                                </CInputGroup>
                            </CCol>
                            <CCol lg={3} sm={6} className='mb-2'>
                                <CInputGroup className='mb-2'>
                                    <CInputGroupText
                                        component="label"
                                        htmlFor="inputGroupSelect01"
                                    >
                                        To
                                    </CInputGroupText>
                                    <CFormInput
                                        type='date'
                                        placeholder="Search"
                                        aria-label="Recipient's username"
                                        aria-describedby="button-addon2"
                                    />
                                </CInputGroup>
                            </CCol>
                            <CCol lg={5} className='mb-2'>
                                <CButton type="button" color="primary">
                                    Search
                                </CButton>
                            </CCol>
                            <CCol></CCol>
                        </CRow>
                        <CRow >
                            <CCol lg={2} sm={6} className='mb-2'>
                                <CInputGroup>
                                    <CInputGroupText
                                        component="label"
                                        htmlFor="inputGroupSelect01"
                                    >
                                        All
                                    </CInputGroupText>
                                    <CFormSelect id="inputGroupSelect01">
                                        <option>Select</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </CFormSelect>
                                </CInputGroup>
                            </CCol>
                            <CCol lg={3} sm={6} className='mb-2'>
                                <CInputGroup>
                                    <CFormSelect id="inputGroupSelect01">
                                        <option>Service Receipt</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </CFormSelect>
                                </CInputGroup>
                            </CCol>
                            <CCol lg={3} sm={6} className='mb-2'>
                                <CInputGroup>
                                    <CFormSelect id="inputGroupSelect01">
                                        <option>Select Service</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </CFormSelect>
                                </CInputGroup>
                            </CCol>
                            <CCol lg={4} sm={6} className='mb-2' >
                                <CButton color="primary" className='float-end '>
                                    <CIcon icon={cilPlus} />
                                    {' '}New Invoice
                                </CButton>
                            </CCol>
                        </CRow>
                    <div className='table_parent'>
                         <div className='dsr_report_table'>
                            <div className="md"></div>
                            <div className="md"></div>
                            <div className="table_header-1">Lead Analysis</div>
                            <div className="table_header-2">Trail Analysis</div>
                            <div className="table_header-3">Lead Analysis</div>
                            <div className="table_header-4">New Clients</div>
                            <div className="table_header-5">Existing Clients </div>
                            <div className="table_header-6">Incremental Revenue</div>
                            <div className="table_header-7"></div>
                            <div className="table_header-8">Collection</div>
                            
                            <div className="md2">Date</div>
                            <div className="md2">Day</div>
                            <div className="table-1">Existing Leads</div>
                            <div className="table-2">Added Today</div>
                            <div className="table-3">Referral generated</div>
                            <div className="table-4">Lead Converted</div>
                            <div className="table-5">Spot Coversion</div>
                            <div className="table-6">Total Closures</div>
                            <div className="table-7">Trial Scheduled</div>
                            <div className="table-8">Trial Completed</div>
                            <div className="table-9">Today's SALE </div>
                            <div className="table-10">Service Non-PT</div>
                            <div className="table-11">PT</div>
                            <div className="table-12">Service Non-PT</div>
                            <div className="table-13">PT</div>
                            <div className="table-14">Store</div>
                            <div className="table-15">Others(Admin Fee)</div>
                            <div className="table-16">Today Collection</div>
                            <div className="table-17">New Sales</div>
                            <div className="table-18">Due Recovered</div>



                            <div className="table_header"></div>
                            <div className="table_header"></div>
                            <div className="table_header">Count</div>
                            <div className="table_header">Count</div>
                            <div className="table_header">Count</div>
                            <div className="table_header">Count</div>
                            <div className="table_header">Value</div>
                            <div className="table_header">Count</div>
                            <div className="table_header">Value</div>
                            <div className="table_header">Count</div>
                            <div className="table_header">Value</div>
                            <div className="table_header">Count</div>
                            <div className="table_header">Count</div>
                            <div className="table_header">Value</div>
                            <div className="table_header">Count</div>
                            <div className="table_header">Revenue</div>
                            <div className="table_header">Count</div>
                            <div className="table_header">Revenue</div>
                            <div className="table_header">Count</div>
                            <div className="table_header">Revenue</div>
                            <div className="table_header">Count</div>
                            <div className="table_header">Revenue</div>
                            <div className="table_header">Count</div>
                            <div className="table_header">Revenue</div>
                            <div className="table_header">Count</div>
                            <div className="table_header">Revenue</div>
                            <div className="table_header">Value</div>
                            <div className="table_header">Revenue</div>
                            <div className="table_header">Revenue</div>

                             <div id="table_row"></div>
                             <div id="table_row"></div>
                             <div id="table_row"></div>
                             <div id="table_row"></div>
                             <div id="table_row"></div>
                             <div id="table_row"></div>
                             <div id="table_row"></div>
                             <div id="table_row"></div>
                             <div id="table_row"></div>
                             <div id="table_row"></div>
                             <div id="table_row"></div>
                             <div id="table_row"></div>
                             <div id="table_row"></div>
                             <div id="table_row"></div>
                             <div id="table_row"></div>
                             <div id="table_row"></div>
                             <div id="table_row"></div>
                             <div id="table_row"></div>
                             <div id="table_row"></div>
                             <div id="table_row"></div>
                             <div id="table_row"></div>
                             <div id="table_row"></div>
                             <div id="table_row"></div>
                             <div id="table_row"></div>
                             <div id="table_row"></div>
                             <div id="table_row"></div>
                             <div id="table_row"></div>
                             <div id="table_row"></div>
                             <div id="table_row"></div>



                         </div>
                    </div>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default DSRreport