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


const SalesTargetTable = React.lazy(()=>import('./Target/SalesTargetTable'))
const ClinetTargetTabel = React.lazy(()=>import('./Target/ClientTargetDataTable'))
const CallesTargetTable = React.lazy(()=>import('./Target/CallesTargetTable'))
const LeadTargetTable = React.lazy(()=>import('./Target/LeadTarget'))
const RenewalsTable = React.lazy(()=>import('./Target/RenewalsTable'))
const ReferralLeadsData = React.lazy(()=>import('./Target/ReferralLeadsData'))
const MeadiaTargetTable = React.lazy(()=>import('./Target/MediaTargetTable'))


const SalesTarget = () => {
    const [activeKey, setActiveKey] = useState(1)




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
                          
                            {activeKey===1&& <SalesTargetTable/>}
                            {activeKey===2&&<ClinetTargetTabel/>}
                            {activeKey===3&&<CallesTargetTable/>} 
                            {activeKey===4&&<LeadTargetTable/>}                                                      
                            {activeKey===5&& <RenewalsTable/>}
                            {activeKey===6&&<ReferralLeadsData/>}
                            {activeKey ===7&&<MeadiaTargetTable/>}                 
                        </CTabContent>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}
export default SalesTarget