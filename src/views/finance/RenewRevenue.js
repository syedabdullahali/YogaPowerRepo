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

const RenewRevenue = () => {
    return (
        <CRow>
            <CCol lg={12} sm={12}>
                <CCard className='mb-3 border-top-success border-top-3'>
                    <CCardHeader>
                        <strong className="mt-2">Renewals/Upgrade Revenue</strong>
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
                        <CTable bordered style={{ borderColor: "#106103" }} responsive>
                            <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }}>
                                <CTableRow>
                                    <CTableHeaderCell scope="col">Sr No</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Month</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Services wise client</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">
                                        Total Renewal client
                                    </CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Renewed</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">No. of Left</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Renewls Revenue</CTableHeaderCell>
                                    {/* <CTableHeaderCell scope="col">
                                        Balance Collection
                                    </CTableHeaderCell>
                                    <CTableHeaderCell scope="col">View</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Achived %</CTableHeaderCell> */}
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
                                    {/* <CTableDataCell>View</CTableDataCell> */}
                                    {/* <CTableDataCell>100%</CTableDataCell> */}
                                </CTableRow>
                                <CTableRow>
                                <CTableDataCell>2</CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                    {/* <CTableDataCell>View</CTableDataCell> */}
                                    {/* <CTableDataCell>100%</CTableDataCell> */}
                                </CTableRow>
                                <CTableRow>
                                <CTableDataCell>3</CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                    {/* <CTableDataCell>View</CTableDataCell> */}
                                    {/* <CTableDataCell>100%</CTableDataCell> */}
                                </CTableRow>
                            </CTableBody>
                        </CTable>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default RenewRevenue