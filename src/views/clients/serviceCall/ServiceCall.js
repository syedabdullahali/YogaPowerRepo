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
import React, { useState,useCallback,useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

const ServiceCall = () => {
    const [activeKey, setActiveKey] = useState(1)
    const url = useSelector((el)=>el.domainOfApi) 
    const [welcomecallsData,setWelcomeCallsData] = useState([])
    const [feedbackCallsData,setFeedBackCallsData] = useState([])
    const [paymentCalssData,setPaymentCallsData] = useState([])
    const [irregularCallData,setIrregularCallData] = useState([])
    const [greetingCallsData,setgreeTingCallsData] = useState([])


    const  getServiseCallData = useCallback(async function() {
        try{
        const response1 = await axios.get(`${url}/welcomecalls`)
        const response2 = await axios.get(`${url}/feedbackcalls`)
        const response3 = await axios.get(`${url}/paymentcalls`)
        const response4 = await axios.get(`${url}/irregularcall`)
        const response5 = await axios.get(`${url}/greetingcalls`)



        console.log(response5.data)  
        setWelcomeCallsData(response1.data)   
        setFeedBackCallsData(response2.data)     
        setPaymentCallsData(response3.data)
        setIrregularCallData(response4.data)
        setgreeTingCallsData(response5.data)
       
        }catch(error) {
                console.error(error)
        }
    },[])

    useEffect(() => {
        getServiseCallData()
    },[ getServiseCallData]) 
   







    return (
        <CRow>
            <CCol xs={12}>
                <CCard>
                    <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                        <CNav responsive variant="pills" role="tablist">
                            <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 1}
                                    onClick={() => setActiveKey(1)}
                                    className="text-white"
                                >
                                    Welcome Calls
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 2}
                                    onClick={() => setActiveKey(2)}
                                    className="text-white"

                                >

                                    Feedback Calls
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 3}
                                    onClick={() => setActiveKey(3)}
                                    className="text-white"

                                >
                                    Payment Calls
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 4}
                                    onClick={() => setActiveKey(4)}
                                    className="text-white"

                                >
                                    Irregular Member Call
                                </CNavLink>
                            </CNavItem>
                           
                            <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 6}
                                    onClick={() => setActiveKey(6)}
                                    className="text-white"

                                >
                                    Greeting Calls
                                </CNavLink>
                            </CNavItem>
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
                                            <CTableHeaderCell scope="col">S.No</CTableHeaderCell>
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
                                            <CTableHeaderCell scope="col">Discussion</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Counseller</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                                        </CTableRow>
                                    </CTableHead>
                                    <CTableBody>
                                    {welcomecallsData.map((el,i)=>
                                     <CTableRow key={i}>
                                         <CTableDataCell>{i+1}</CTableDataCell>
                                         <CTableDataCell>{el.Date}</CTableDataCell>
                                         <CTableDataCell>{el.Timing}</CTableDataCell>
                                         <CTableDataCell>{el.Client_Id}</CTableDataCell>
                                         <CTableDataCell>{el.Name}</CTableDataCell>
                                         <CTableDataCell>{el.Contact}</CTableDataCell>
                                         <CTableDataCell>{el.Service}</CTableDataCell>
                                         <CTableDataCell>{el.Discussion}</CTableDataCell>
                                         <CTableDataCell>{el.Counseller}</CTableDataCell>
                                         <CTableDataCell className='text-center'>
                                            <a href={`tel`} target="_black">
                                                <MdCall style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' />
                                                </a><a href={`https://wa.me/${el.Contact}}`} target="_black">
                                                <BsWhatsapp style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' />
                                                </a><a href={`mailto`} target="_black"> 
                                                <MdMail style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "4px" }} size='20px' />
                                                </a><a href={`https://wa.me/`} target="_black">
                                                <BsPlusCircle style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a>
                                        </CTableDataCell>
                                     </CTableRow>
                                    )}
                                      
                                        
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
                                            <CTableHeaderCell scope="col">Discussion</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Counseller</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                                        </CTableRow>
                                    </CTableHead>
                                    <CTableBody>
                                       
                                    {feedbackCallsData.map((el,i)=>
                                     <CTableRow key={i}>
                                         <CTableDataCell>{i+1}</CTableDataCell>
                                         <CTableDataCell>{el.Date}</CTableDataCell>
                                         <CTableDataCell>{el.Timing}</CTableDataCell>
                                         <CTableDataCell>{el.Client_Id}</CTableDataCell>
                                         <CTableDataCell>{el.Name}</CTableDataCell>
                                         <CTableDataCell>{el.Contact}</CTableDataCell>
                                         <CTableDataCell>{el.Service}</CTableDataCell>
                                         <CTableDataCell>{el.Discussion}</CTableDataCell>
                                         <CTableDataCell>{el.Counseller}</CTableDataCell>
                                         <CTableDataCell className='text-center'>
                                            <a href={`tel`} target="_black">
                                                <MdCall style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' />
                                                </a><a href={`https://wa.me/${el.Contact}}`} target="_black">
                                                <BsWhatsapp style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' />
                                                </a><a href={`mailto`} target="_black"> 
                                                <MdMail style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "4px" }} size='20px' />
                                                </a><a href={`https://wa.me/`} target="_black">
                                                <BsPlusCircle style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a>
                                        </CTableDataCell>
                                     </CTableRow>
                                    )}
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
                                            <CTableHeaderCell scope="col">Duration</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Total Amount</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Paid</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Balance</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Discussion</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Counseller</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                                        </CTableRow>
                                    </CTableHead>
                                    <CTableBody>
                                    {paymentCalssData.map((el,i)=>
                                     <CTableRow key={i}>
                                         <CTableDataCell>{i+1}</CTableDataCell>
                                         <CTableDataCell>{el.Date}</CTableDataCell>
                                         <CTableDataCell>{el.Timing}</CTableDataCell>
                                         <CTableDataCell>{el.Client_Id}</CTableDataCell>
                                         <CTableDataCell>{el.Name}</CTableDataCell>
                                         <CTableDataCell>{el.Contact}</CTableDataCell>
                                         <CTableDataCell>{el.Service}</CTableDataCell>
                                         <CTableDataCell>{el.Duration}</CTableDataCell>
                                         <CTableDataCell>{el.Total_Amount}</CTableDataCell>
                                         <CTableDataCell>{el.Paid}</CTableDataCell>
                                         <CTableDataCell>{el.Balance}</CTableDataCell>
                                         <CTableDataCell>{el.Discussion}</CTableDataCell>
                                         <CTableDataCell>{el.Counseller}</CTableDataCell>

                                         <CTableDataCell className='text-center'>
                                            <a href={`tel`} target="_black">
                                                <MdCall style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' />
                                                </a><a href={`https://wa.me/${el.Contact}}`} target="_black">
                                                <BsWhatsapp style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' />
                                                </a><a href={`mailto`} target="_black"> 
                                                <MdMail style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "4px" }} size='20px' />
                                                </a><a href={`https://wa.me/`} target="_black">
                                                <BsPlusCircle style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a>
                                        </CTableDataCell>
                                     </CTableRow>
                                    )}
                                    </CTableBody>
                                </CTable>
                            </CTabPane>
                            <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 4}>
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
                                    {irregularCallData.map((el,i)=>
                                     <CTableRow key={i}>
                                         <CTableDataCell>{i+1}</CTableDataCell>
                                         <CTableDataCell>{el.Date}</CTableDataCell>
                                         <CTableDataCell>{el.Timing}</CTableDataCell>
                                         <CTableDataCell>{el.Client_Id}</CTableDataCell>
                                         <CTableDataCell>{el.Name}</CTableDataCell>
                                         <CTableDataCell>{el.Contact}</CTableDataCell>
                                         <CTableDataCell>{el.Service}</CTableDataCell>
                                         <CTableDataCell>{el.Duration}</CTableDataCell>
                                         <CTableDataCell>{el.Expiry_Date}</CTableDataCell>
                                         <CTableDataCell>{el.Discussion}</CTableDataCell>
                                         <CTableDataCell>{el.Counseller}</CTableDataCell>
                                        

                                         <CTableDataCell className='text-center'>
                                            <a href={`tel`} target="_black">
                                                <MdCall style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' />
                                                </a><a href={`https://wa.me/${el.Contact}}`} target="_black">
                                                <BsWhatsapp style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' />
                                                </a><a href={`mailto`} target="_black"> 
                                                <MdMail style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "4px" }} size='20px' />
                                                </a><a href={`https://wa.me/`} target="_black">
                                                <BsPlusCircle style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a>
                                        </CTableDataCell>
                                     </CTableRow>
                                    )}
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
                                    {greetingCallsData.map((el,i)=>
                                     <CTableRow key={i}>
                                         <CTableDataCell>{i+1}</CTableDataCell>
                                         <CTableDataCell>{el.Date}</CTableDataCell>
                                         <CTableDataCell>{el.Timing}</CTableDataCell>
                                         <CTableDataCell>{el.Client_Id}</CTableDataCell>
                                         <CTableDataCell>{el.Name}</CTableDataCell>
                                         <CTableDataCell>{el.Contact}</CTableDataCell>
                                         <CTableDataCell>{el.Service}</CTableDataCell>
                                         <CTableDataCell>{el.Expiry_Date}</CTableDataCell>
                                         <CTableDataCell>{el.Date_Of_Birth}</CTableDataCell>
                                         <CTableDataCell>{el.Discussion}</CTableDataCell>
                                         <CTableDataCell>{el.Counseller}</CTableDataCell>
                                        
                                         <CTableDataCell className='text-center'>
                                            <a href={`tel`} target="_black">
                                                <MdCall style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' />
                                                </a><a href={`https://wa.me/${el.Contact}}`} target="_black">
                                                <BsWhatsapp style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' />
                                                </a><a href={`mailto`} target="_black"> 
                                                <MdMail style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "4px" }} size='20px' />
                                                </a><a href={`https://wa.me/`} target="_black">
                                                <BsPlusCircle style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a>
                                        </CTableDataCell>
                                     </CTableRow>
                                    )}


                                        {/* <CTableRow>
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
                                        </CTableRow> */}
                                    </CTableBody>
                                </CTable>
                            </CTabPane>
                        </CTabContent>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}
export default ServiceCall