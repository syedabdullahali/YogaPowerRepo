import { cilArrowCircleBottom, cilArrowCircleTop } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import { MdCall, MdDelete, MdEdit, MdMail } from 'react-icons/md';
import { BsPlusCircle, BsWhatsapp } from 'react-icons/bs';
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
    CNav,
    CNavItem,
    CNavLink,
    CRow,
    CTabContent,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CTabPane,
} from '@coreui/react'
import React, { useState } from 'react'
const SalesCall = () => {
    const [activeKey, setActiveKey] = useState(1)

    return (
        <CRow>
            <CCol xs={12}>
                <CCard>
                    <CCardHeader>
                        <CNav responsive variant="pills" role="tablist">
                            <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 1}
                                    onClick={() => setActiveKey(1)}
                                >
                                    Upgrade Calls
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 2}
                                    onClick={() => setActiveKey(2)}
                                >

                                    Renewals Calls
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 3}
                                    onClick={() => setActiveKey(3)}
                                >
                                    Cross-Cell Calls
                                </CNavLink>
                            </CNavItem>
                            {/* <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 4}
                                    onClick={() => setActiveKey(4)}
                                >
                                    Irregular Member Call
                                </CNavLink>
                            </CNavItem> */}
                            {/* <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 5}
                                    onClick={() => setActiveKey(5)}
                                >
                                    Courtesy Calls
                                </CNavLink>
                            </CNavItem> */}
                            {/* <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 6}
                                    onClick={() => setActiveKey(6)}
                                >
                                    Greeting Calls
                                </CNavLink>
                            </CNavItem> */}
                        </CNav>
                    </CCardHeader>
                    <CCardBody >
                        <CTabContent>
                            <CTabPane responsives role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>

                                <CRow className='mb-3'>
                                    <CCol lg={2} sm={6} className='mb-2'>
                                        <CInputGroup>
                                            <CInputGroupText
                                                component="label"
                                                htmlFor="inputGroupSelect01"
                                            >
                                                Month
                                            </CInputGroupText>
                                            <CFormSelect id="inputGroupSelect01">
                                                <option>Sep</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </CFormSelect>
                                        </CInputGroup>
                                    </CCol>
                                    <CCol lg={2} sm={6} className='mb-2'>
                                        <CInputGroup>
                                            <CInputGroupText
                                                component="label"
                                                htmlFor="inputGroupSelect01"
                                            >
                                                Year
                                            </CInputGroupText>
                                            <CFormSelect id="inputGroupSelect01">
                                                <option>2022</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </CFormSelect>
                                        </CInputGroup>
                                    </CCol>
                                    <CCol lg={5} sm={8} className='mb-2'>
                                        <CInputGroup className="left">
                                            <CFormInput
                                                placeholder="Staff Name"
                                                aria-label="Recipient's username"
                                                aria-describedby="button-addon2"
                                            />
                                            <CButton type="button" color="primary" id="button-addon2">
                                                Go
                                            </CButton>
                                        </CInputGroup>
                                    </CCol>
                                    <CCol lg={3} sm={3} className='mb-2'>
                                        <CButtonGroup>
                                            <CButton color="primary">
                                                <CIcon icon={cilArrowCircleBottom} />
                                                Import
                                            </CButton>
                                            <CButton color="primary">
                                                <CIcon icon={cilArrowCircleTop} />
                                                Export
                                            </CButton>
                                        </CButtonGroup>
                                    </CCol>
                                </CRow>
                                <CTable bordered borderColor="success" responsive>
                                    <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                                        <CTableRow>
                                            <CTableHeaderCell scope="col">Sr.No.</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Timing</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">
                                                Client_Id
                                            </CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Contact</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">
                                                Service
                                            </CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Type of Calls</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Discussion</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Counseller</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Action</CTableHeaderCell>
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
                                            <CTableDataCell className='text-center'><a href={`tel`} target="_black"><MdCall style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`https://wa.me/$}`} target="_black"><BsWhatsapp style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`mailto`} target="_black"> <MdMail style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "4px" }} size='20px' /></a><a href={`https://wa.me/`} target="_black"><BsPlusCircle style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a></CTableDataCell>
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
                                            <CTableDataCell className='text-center'><a href={`tel`} target="_black"><MdCall style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`https://wa.me/$}`} target="_black"><BsWhatsapp style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`mailto`} target="_black"> <MdMail style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "4px" }} size='20px' /></a><a href={`https://wa.me/`} target="_black"><BsPlusCircle style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a></CTableDataCell>
                                        </CTableRow>
                                        <CTableRow>
                                        <CTableDataCell>3</CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell className='text-center'><a href={`tel`} target="_black"><MdCall style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`https://wa.me/$}`} target="_black"><BsWhatsapp style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`mailto`} target="_black"> <MdMail style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "4px" }} size='20px' /></a><a href={`https://wa.me/`} target="_black"><BsPlusCircle style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a></CTableDataCell>
                                        </CTableRow>
                                    </CTableBody>
                                </CTable>
                            </CTabPane>
                            <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 2}>
                                <CRow className='mb-3'>
                                    <CCol xs={2}>
                                        <CInputGroup>
                                            <CInputGroupText
                                                component="label"
                                                htmlFor="inputGroupSelect01"
                                            >
                                                Month
                                            </CInputGroupText>
                                            <CFormSelect id="inputGroupSelect01">
                                                <option>Sep</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </CFormSelect>
                                        </CInputGroup>
                                    </CCol>
                                    <CCol xs={2}>
                                        <CInputGroup>
                                            <CInputGroupText
                                                component="label"
                                                htmlFor="inputGroupSelect01"
                                            >
                                                Year
                                            </CInputGroupText>
                                            <CFormSelect id="inputGroupSelect01">
                                                <option>2022</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </CFormSelect>
                                        </CInputGroup>
                                    </CCol>
                                    <CCol>
                                        <CInputGroup className="left">
                                            <CFormInput
                                                placeholder="Staff Name"
                                                aria-label="Recipient's username"
                                                aria-describedby="button-addon2"
                                            />
                                            <CButton type="button" color="primary" id="button-addon2">
                                                Go
                                            </CButton>
                                        </CInputGroup>
                                    </CCol>
                                    <CCol>
                                        <CButtonGroup>
                                            <CButton color="primary">
                                                <CIcon icon={cilArrowCircleBottom} />
                                                Import
                                            </CButton>
                                            <CButton color="primary">
                                                <CIcon icon={cilArrowCircleTop} />
                                                Export
                                            </CButton>
                                        </CButtonGroup>
                                    </CCol>
                                </CRow>
                                <CTable bordered borderColor="primary" responsive>
                                    <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                                        <CTableRow>
                                            <CTableHeaderCell scope="col">S.No</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Timing</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">
                                                Client_Id
                                            </CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Contact</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">
                                                service
                                            </CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Type of Calls</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Discussion</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Counseller</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Action</CTableHeaderCell>
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
                                            <CTableDataCell className='text-center'><a href={`tel`} target="_black"><MdCall style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`https://wa.me/$}`} target="_black"><BsWhatsapp style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`mailto`} target="_black"> <MdMail style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "4px" }} size='20px' /></a><a href={`https://wa.me/`} target="_black"><BsPlusCircle style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a></CTableDataCell>
                                           
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
                                            <CTableDataCell className='text-center'><a href={`tel`} target="_black"><MdCall style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`https://wa.me/$}`} target="_black"><BsWhatsapp style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`mailto`} target="_black"> <MdMail style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "4px" }} size='20px' /></a><a href={`https://wa.me/`} target="_black"><BsPlusCircle style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a></CTableDataCell>
                                            
                                        </CTableRow>
                                        <CTableRow>
                                        <CTableDataCell>3</CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell className='text-center'><a href={`tel`} target="_black"><MdCall style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`https://wa.me/$}`} target="_black"><BsWhatsapp style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`mailto`} target="_black"> <MdMail style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "4px" }} size='20px' /></a><a href={`https://wa.me/`} target="_black"><BsPlusCircle style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a></CTableDataCell>
                                        </CTableRow>
                                    </CTableBody>
                                </CTable>
                            </CTabPane>
                            <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 3}>
                                <CRow className='mb-3'>
                                    <CCol xs={2}>
                                        <CInputGroup>
                                            <CInputGroupText
                                                component="label"
                                                htmlFor="inputGroupSelect01"
                                            >
                                                Month
                                            </CInputGroupText>
                                            <CFormSelect id="inputGroupSelect01">
                                                <option>Sep</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </CFormSelect>
                                        </CInputGroup>
                                    </CCol>
                                    <CCol xs={2}>
                                        <CInputGroup>
                                            <CInputGroupText
                                                component="label"
                                                htmlFor="inputGroupSelect01"
                                            >
                                                Year
                                            </CInputGroupText>
                                            <CFormSelect id="inputGroupSelect01">
                                                <option>2022</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </CFormSelect>
                                        </CInputGroup>
                                    </CCol>
                                    <CCol>
                                        <CInputGroup className="left">
                                            <CFormInput
                                                placeholder="Staff Name"
                                                aria-label="Recipient's username"
                                                aria-describedby="button-addon2"
                                            />
                                            <CButton type="button" color="primary" id="button-addon2">
                                                Go
                                            </CButton>
                                        </CInputGroup>
                                    </CCol>
                                    <CCol>
                                        <CButtonGroup>
                                            <CButton color="primary">
                                                <CIcon icon={cilArrowCircleBottom} />
                                                Import
                                            </CButton>
                                            <CButton color="primary">
                                                <CIcon icon={cilArrowCircleTop} />
                                                Export
                                            </CButton>
                                        </CButtonGroup>
                                    </CCol>
                                </CRow>
                                <CTable bordered borderColor="primary" responsive>
                                    <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                                        <CTableRow>
                                            <CTableHeaderCell scope="col">S.No</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Timing</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">
                                                Client-Id
                                            </CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Contact</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">
                                                Service
                                            </CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Type of Calls</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Discussion</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Counseller</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Action</CTableHeaderCell>
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
                                            <CTableDataCell className='text-center'><a href={`tel`} target="_black"><MdCall style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`https://wa.me/$}`} target="_black"><BsWhatsapp style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`mailto`} target="_black"> <MdMail style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "4px" }} size='20px' /></a><a href={`https://wa.me/`} target="_black"><BsPlusCircle style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a></CTableDataCell>
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
                                            <CTableDataCell className='text-center'><a href={`tel`} target="_black"><MdCall style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`https://wa.me/$}`} target="_black"><BsWhatsapp style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`mailto`} target="_black"> <MdMail style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "4px" }} size='20px' /></a><a href={`https://wa.me/`} target="_black"><BsPlusCircle style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a></CTableDataCell>
                                        </CTableRow>
                                        <CTableRow>
                                        <CTableDataCell>3</CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell className='text-center'><a href={`tel`} target="_black"><MdCall style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`https://wa.me/$}`} target="_black"><BsWhatsapp style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`mailto`} target="_black"> <MdMail style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "4px" }} size='20px' /></a><a href={`https://wa.me/`} target="_black"><BsPlusCircle style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a></CTableDataCell>
                                        </CTableRow>
                                    </CTableBody>
                                </CTable>
                            </CTabPane>
                            {/* <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 4}>
                                <CRow className='mb-3'>
                                    <CCol xs={2}>
                                        <CInputGroup>
                                            <CInputGroupText
                                                component="label"
                                                htmlFor="inputGroupSelect01"
                                            >
                                                Month
                                            </CInputGroupText>
                                            <CFormSelect id="inputGroupSelect01">
                                                <option>Sep</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </CFormSelect>
                                        </CInputGroup>
                                    </CCol>
                                    <CCol xs={2}>
                                        <CInputGroup>
                                            <CInputGroupText
                                                component="label"
                                                htmlFor="inputGroupSelect01"
                                            >
                                                Year
                                            </CInputGroupText>
                                            <CFormSelect id="inputGroupSelect01">
                                                <option>2022</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </CFormSelect>
                                        </CInputGroup>
                                    </CCol>
                                    <CCol>
                                        <CInputGroup className="left">
                                            <CFormInput
                                                placeholder="Staff Name"
                                                aria-label="Recipient's username"
                                                aria-describedby="button-addon2"
                                            />
                                            <CButton type="button" color="primary" id="button-addon2">
                                                Go
                                            </CButton>
                                        </CInputGroup>
                                    </CCol>
                                    <CCol>
                                        <CButtonGroup>
                                            <CButton color="primary">
                                                <CIcon icon={cilArrowCircleBottom} />
                                                Import
                                            </CButton>
                                            <CButton color="primary">
                                                <CIcon icon={cilArrowCircleTop} />
                                                Export
                                            </CButton>
                                        </CButtonGroup>
                                    </CCol>
                                </CRow>
                                <CTable bordered borderColor="primary" responsive>
                                    <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                                        <CTableRow>
                                            <CTableHeaderCell scope="col">S.No</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Timing</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">
                                                Client-Id
                                            </CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Contact</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">
                                                Service
                                            </CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Duration</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Expiry Date</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Discussion</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Counseller</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Action</CTableHeaderCell>
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
                                            <CTableDataCell className='text-center'><a href={`tel`} target="_black"><MdCall style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`https://wa.me/$}`} target="_black"><BsWhatsapp style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`mailto`} target="_black"> <MdMail style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "4px" }} size='20px' /></a><a href={`https://wa.me/`} target="_black"><BsPlusCircle style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a></CTableDataCell>
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
                                            <CTableDataCell className='text-center'><a href={`tel`} target="_black"><MdCall style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`https://wa.me/$}`} target="_black"><BsWhatsapp style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`mailto`} target="_black"> <MdMail style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "4px" }} size='20px' /></a><a href={`https://wa.me/`} target="_black"><BsPlusCircle style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a></CTableDataCell>
                                        </CTableRow>
                                        <CTableRow>
                                        <CTableDataCell>3</CTableDataCell>
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
                                            <CTableDataCell className='text-center'><a href={`tel`} target="_black"><MdCall style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`https://wa.me/$}`} target="_black"><BsWhatsapp style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`mailto`} target="_black"> <MdMail style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "4px" }} size='20px' /></a><a href={`https://wa.me/`} target="_black"><BsPlusCircle style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a></CTableDataCell>
                                        </CTableRow>
                                    </CTableBody>
                                </CTable>
                            </CTabPane>
                            <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 6}>
                                <CRow className='mb-3'>
                                    <CCol xs={2}>
                                        <CInputGroup>
                                            <CInputGroupText
                                                component="label"
                                                htmlFor="inputGroupSelect01"
                                            >
                                                Month
                                            </CInputGroupText>
                                            <CFormSelect id="inputGroupSelect01">
                                                <option>Sep</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </CFormSelect>
                                        </CInputGroup>
                                    </CCol>
                                    <CCol xs={2}>
                                        <CInputGroup>
                                            <CInputGroupText
                                                component="label"
                                                htmlFor="inputGroupSelect01"
                                            >
                                                Year
                                            </CInputGroupText>
                                            <CFormSelect id="inputGroupSelect01">
                                                <option>2022</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </CFormSelect>
                                        </CInputGroup>
                                    </CCol>
                                    <CCol>
                                        <CInputGroup className="left">
                                            <CFormInput
                                                placeholder="Staff Name"
                                                aria-label="Recipient's username"
                                                aria-describedby="button-addon2"
                                            />
                                            <CButton type="button" color="primary" id="button-addon2">
                                                Go
                                            </CButton>
                                        </CInputGroup>
                                    </CCol>
                                    <CCol>
                                        <CButtonGroup>
                                            <CButton color="primary">
                                                <CIcon icon={cilArrowCircleBottom} />
                                                Import
                                            </CButton>
                                            <CButton color="primary">
                                                <CIcon icon={cilArrowCircleTop} />
                                                Export
                                            </CButton>
                                        </CButtonGroup>
                                    </CCol>
                                </CRow>
                                <CTable bordered borderColor="primary" responsive>
                                    <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                                        <CTableRow>
                                            <CTableHeaderCell scope="col">S.No</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Timing</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">
                                                Client Id
                                            </CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Contact</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">
                                                Service
                                            </CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Expiry Date</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Date of Birth</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Discussion</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Counseller</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Action</CTableHeaderCell>
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
                                            <CTableDataCell className='text-center'><a href={`tel`} target="_black"><MdCall style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`https://wa.me/$}`} target="_black"><BsWhatsapp style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`mailto`} target="_black"> <MdMail style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "4px" }} size='20px' /></a><a href={`https://wa.me/`} target="_black"><BsPlusCircle style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a></CTableDataCell>
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
                                            <CTableDataCell className='text-center'><a href={`tel`} target="_black"><MdCall style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`https://wa.me/$}`} target="_black"><BsWhatsapp style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`mailto`} target="_black"> <MdMail style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "4px" }} size='20px' /></a><a href={`https://wa.me/`} target="_black"><BsPlusCircle style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a></CTableDataCell>
                                        </CTableRow>
                                        <CTableRow>
                                        <CTableDataCell>3</CTableDataCell>
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
                                            <CTableDataCell className='text-center'><a href={`tel`} target="_black"><MdCall style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`https://wa.me/$}`} target="_black"><BsWhatsapp style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`mailto`} target="_black"> <MdMail style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "4px" }} size='20px' /></a><a href={`https://wa.me/`} target="_black"><BsPlusCircle style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a></CTableDataCell>
                                        </CTableRow>
                                    </CTableBody>
                                </CTable>
                            </CTabPane> */}
                        </CTabContent>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}
export default SalesCall