import { cilArrowCircleBottom, cilArrowCircleTop } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
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
import { useSelector } from 'react-redux'
import axios from 'axios'

const SalesTarget = () => {
    const [activeKey, setActiveKey] = useState(1)
    const url = useSelector((el)=>el.domainOfApi) 

    const [salesTargetData,setSalesTarget] = useState([])
    const [clientTargetData,setClientTarget] = useState([])
    const [callsTargetData,setCallsTarget] = useState([])
    const [leadTargetData,setLeadTarget] = useState([])
    const [renevalsData,setRenewals] = useState([])
    const [referralLeadsData,setReferralLeadsData] = useState([])
    const [mediaTarget,setMediaTarget] = useState([])

    const  getLiveClasses = useCallback(async function() {
        try{
    // get Data 
    const response1 = await axios.get(`${url}/salestarget`)
    const response2 = await axios.get(`${url}/clienttarget`)
    const response3 = await axios.get(`${url}/callstarget`)
    const response4 = await axios.get(`${url}/leadstarget`)
    const response5 = await axios.get(`${url}/renewalstarget`)
    const response6 = await axios.get(`${url}/referralsleadstarget`)
    const response7 = await axios.get(`${url}/mediatarget`)

    console.log(response7.data)
    // set Data

    setSalesTarget(response1.data)
    setClientTarget(response2.data)
    setCallsTarget(response3.data)
    setLeadTarget(response4.data)
    setRenewals(response5.data) 
    setReferralLeadsData(response6.data)
    setMediaTarget(response7.data)   
    }catch(error) {
          console.error(error)
    }
    },[])

    useEffect(() => {
        getLiveClasses()
    },[ getLiveClasses]) 



    return (
        <CRow>
            <CCol xs={12}>
                <CCard>
                    <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                        <CNav variant="pills" role="tablist">
                            <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 1}
                                    onClick={() => setActiveKey(1)}
                                    className='text-white'
                                >
                                    Sales Target
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 2}
                                    onClick={() => setActiveKey(2)}
                                    className='text-white'

                                >

                                    Client Target
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 3}
                                    onClick={() => setActiveKey(3)}
                                    className='text-white'

                                >
                                    Calls Target
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 4}
                                    onClick={() => setActiveKey(4)}
                                    className='text-white'
                                >
                                    Lead Target
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 5}
                                    onClick={() => setActiveKey(5)}
                                    className='text-white'
                                >
                                    Renewals
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 6}
                                    onClick={() => setActiveKey(6)}
                                    className='text-white'
                                >
                                    Referral Leads
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 7}
                                    onClick={() => setActiveKey(7)}
                                    className='text-white'
                                >
                                    Media Target
                                </CNavLink>
                            </CNavItem>

                            
                        </CNav>
                    </CCardHeader>
                    <CCardBody>
                        <CTabContent>
                            <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>

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
                                <CTable bordered borderColor="black" responsive>
                                    <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                                        <CTableRow>
                                            <CTableHeaderCell scope="col">Sr.No</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Employee</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Target</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">
                                                New Sales
                                            </CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Renewals</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">upgrade sales</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">
                                                cross sales
                                            </CTableHeaderCell>
                                            <CTableHeaderCell scope="col">
                                                Balance collection
                                            </CTableHeaderCell>
                                            <CTableHeaderCell scope="col">
                                                Total collected
                                            </CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Achived %</CTableHeaderCell>
                                        </CTableRow>
                                    </CTableHead>
                                    <CTableBody>
                                       
                                            {salesTargetData.map((el,i)=>
                                             <CTableRow>
                                           <CTableDataCell>{i+1}</CTableDataCell>
                                            <CTableDataCell>{el.Employee}</CTableDataCell>
                                            <CTableDataCell>{el.Target}</CTableDataCell>
                                            <CTableDataCell>{el.New_Sales}</CTableDataCell>
                                            <CTableDataCell>{el.Renewals}</CTableDataCell>
                                            <CTableDataCell>{el.Upgrade_Sales}</CTableDataCell>
                                            <CTableDataCell>{el.Cross_Sales}</CTableDataCell>
                                            <CTableDataCell>{el.Balance_Collection}</CTableDataCell>
                                            <CTableDataCell>{el.Total_Collected}</CTableDataCell>
                                            <CTableDataCell>{el.Achived}</CTableDataCell>
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
                                <CTable bordered borderColor="balck" responsive>
                                    <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                                        <CTableRow>
                                            <CTableHeaderCell scope="col">Sr.No</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Employee</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Target</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">
                                                New Sales
                                            </CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Reference</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Renewal</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">
                                                Upgrade Sales
                                            </CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Cross-selling</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Total</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Achieved</CTableHeaderCell>

                                        </CTableRow>
                                    </CTableHead>
                                    <CTableBody>
                                    {clientTargetData.map((el,i)=>
                                             <CTableRow>
                                           <CTableDataCell>{i+1}</CTableDataCell>
                                            <CTableDataCell>{el.Employee}</CTableDataCell>
                                            <CTableDataCell>{el.Target}</CTableDataCell>
                                            <CTableDataCell>{el.New_Sales}</CTableDataCell>
                                            <CTableDataCell>{el.Reference}</CTableDataCell>
                                            <CTableDataCell>{el.Renewals}</CTableDataCell>
                                            <CTableDataCell>{el.Upgrade_Sales}</CTableDataCell>
                                            <CTableDataCell>{el.Cross_Selling}</CTableDataCell>
                                            <CTableDataCell>{el.Total_Collected}</CTableDataCell>
                                            <CTableDataCell>{el.Achived}</CTableDataCell>
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
                                <CTable bordered borderColor="black" responsive>
                                    <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                                        <CTableRow>
                                            <CTableHeaderCell scope="col">Sr.No</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Employee</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Call Target</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">
                                                Follows ups
                                            </CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Members Call</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Total Completed</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">
                                                    Achived %
                                            </CTableHeaderCell>
                                        </CTableRow>
                                    </CTableHead>
                                    <CTableBody>
                                       
                                        
                                    {callsTargetData.map((el,i)=>
                                     <CTableRow>
                                            <CTableDataCell>{i+1}</CTableDataCell>
                                            <CTableDataCell>{el.Employee}</CTableDataCell>
                                            <CTableDataCell>{el.Call_Target}</CTableDataCell>
                                            <CTableDataCell>{el.Follow_Ups}</CTableDataCell>
                                            <CTableDataCell>{el.Members_Call}</CTableDataCell>
                                            <CTableDataCell>{el.Total_Completed}</CTableDataCell>
                                            <CTableDataCell>{el.Achived}</CTableDataCell>                                            
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
                                <CTable bordered borderColor="black" responsive>
                                    <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                                        <CTableRow>
                                            <CTableHeaderCell scope="col">S.No</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Employee</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Lead assign</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">
                                                Spot Conversions
                                            </CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Total leads Conversion</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Total Amount</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">
                                            Achived %
                                            </CTableHeaderCell>
                                
                                        </CTableRow>
                                    </CTableHead>
                                    <CTableBody>
                                    {leadTargetData.map((el,i)=>
                                     <CTableRow>
                                            <CTableDataCell>{i+1}</CTableDataCell>
                                            <CTableDataCell>{el.Employee}</CTableDataCell>
                                            <CTableDataCell>{el.Lead_Assign}</CTableDataCell>
                                            <CTableDataCell>{el.Spot_Conversions}</CTableDataCell>
                                            <CTableDataCell>{el.Total_Leads_Conversion}</CTableDataCell>
                                            <CTableDataCell>{el.Total_Amount}</CTableDataCell>
                                            <CTableDataCell>{el.Achived}</CTableDataCell>                                            
                                    </CTableRow>
                                    )}
                                    </CTableBody>
                                </CTable>
                            </CTabPane>
                           
                           
                            <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 5}>
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
                                <CTable bordered borderColor="black" responsive>
                                    <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                                        <CTableRow>
                                            <CTableHeaderCell scope="col">S.No</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Employee</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Target</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">
                                                No of Renewals
                                            </CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Conversion</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Total Amount</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">
                                            Achived %
                                            </CTableHeaderCell>
                                
                                        </CTableRow>
                                    </CTableHead>
                                    <CTableBody>
                                    {renevalsData.map((el,i)=>
                                     <CTableRow>
                                            <CTableDataCell>{i+1}</CTableDataCell>
                                            <CTableDataCell>{el.Employee}</CTableDataCell>
                                            <CTableDataCell>{el.Target}</CTableDataCell>
                                            <CTableDataCell>{el.No_Of_Renewals}</CTableDataCell>
                                            <CTableDataCell>{el.Conversion}</CTableDataCell>
                                            <CTableDataCell>{el.Total_Amount}</CTableDataCell>
                                            <CTableDataCell>{el.Achived}</CTableDataCell>                                            
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
                                <CTable bordered borderColor="black" responsive>
                                    <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                                        <CTableRow>
                                            <CTableHeaderCell scope="col">Sr.No</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Employee</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">No. of Referrals Target</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">
                                                No. of Referrals Leads
                                            </CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Convert to member</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Total Amount</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">
                                            Achived %
                                            </CTableHeaderCell>
                                
                                        </CTableRow>
                                    </CTableHead>
                                    <CTableBody>
                                    {referralLeadsData.map((el,i)=>
                                     <CTableRow>
                                            <CTableDataCell>{i+1}</CTableDataCell>
                                            <CTableDataCell>{el.Employee}</CTableDataCell>
                                            <CTableDataCell>{el.No_Of_Referrals_Target}</CTableDataCell>
                                            <CTableDataCell>{el.No_Of_Referrals_Leads}</CTableDataCell>
                                            <CTableDataCell>{el.Convert_To_Member}</CTableDataCell>
                                            <CTableDataCell>{el.Total_Amount}</CTableDataCell>
                                            <CTableDataCell>{el.Achived}</CTableDataCell>                                            
                                    </CTableRow>
                                    )}
                                    </CTableBody>
                                </CTable>
                            </CTabPane>
                            <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 7}>
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
                                <CTable bordered borderColor="black" responsive>
                                    <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                                        <CTableRow>
                                            <CTableHeaderCell scope="col">Sr.No</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Employee</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Google Reviewst</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">
                                                Facebook
                                            </CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Instagram</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Linkedin</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">
                                            Justdial
                                            </CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Achieved</CTableHeaderCell>
                                
                                        </CTableRow>
                                    </CTableHead>
                                    <CTableBody>
                                    {mediaTarget.map((el,i)=>
                                     <CTableRow>
                                            <CTableDataCell>{i+1}</CTableDataCell>
                                            <CTableDataCell>{el.Employee}</CTableDataCell>
                                            <CTableDataCell>{el.Google_Reviews}</CTableDataCell>
                                            <CTableDataCell>{el.Facebook}</CTableDataCell>
                                            <CTableDataCell>{el.Instagram}</CTableDataCell>
                                            <CTableDataCell>{el.Linkedin}</CTableDataCell>
                                            <CTableDataCell>{el.Justdial}</CTableDataCell>                                            
                                            <CTableDataCell>{el.Achived}</CTableDataCell>                                            
                                    </CTableRow>
                                    )}
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
export default SalesTarget