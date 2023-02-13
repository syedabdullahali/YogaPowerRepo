import { cilArrowCircleBottom, cilArrowCircleTop } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardHeader,
    CCardTitle,
    CCol,
    CFormInput,
    CFormSelect,
    CFormSwitch,
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

const FitnessRights = React.lazy(()=>import('./AllRightRights/FitnessRights'))
const InventoryRights = React.lazy(()=>import('./AllRightRights/InventoryRights'))
const HrRights = React.lazy(()=>import('./AllRightRights/HrRights'))
const FinanceRights = React.lazy(()=>import('./AllRightRights/FinanceRights'))

const AllRight = () => {
    const [activeKey, setActiveKey] = useState(1)

    return (
        <CRow>
            <CCol xs={12}>
                <CCard>
                    <CCardHeader style={{background:'#0B5345',color:'white'}}>
                        <CNav variant="pills" role="tablist">
                            <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 1}
                                    onClick={() => setActiveKey(1)}
                                    className="text-white"
                                >
                                    Dashboard
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 2}
                                    onClick={() => setActiveKey(2)}
                                    className="text-white"
                                >

                                    Lead
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 3}
                                    onClick={() => setActiveKey(3)}
                                    className="text-white"
                                >
                                    Clients
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 4}
                                    onClick={() => setActiveKey(4)}
                                    className="text-white"
                                >
                                    Marketing
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                            <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 5}
                                    onClick={() => setActiveKey(5)}
                                    className="text-white"
                                >
                                    Fitness
                                </CNavLink>
                               
                            </CNavItem>
                            <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 6}
                                    onClick={() => setActiveKey(6)}
                                    className="text-white"
                                >
                                    Inventory
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 7}
                                    onClick={() => setActiveKey(7)}
                                    className="text-white"
                                >
                                Finance
                                </CNavLink>
                            </CNavItem>

                            <CNavItem>
                             <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 8}
                                    onClick={() => setActiveKey(8)}
                                    className="text-white"
                                >
                                HR
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 9}
                                    onClick={() => setActiveKey(9)}
                                    className="text-white"
                                >
                                    Export
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 10}
                                    onClick={() => setActiveKey(10)}
                                    className="text-white"
                                >
                                    Master
                                </CNavLink>
                            </CNavItem>
                        </CNav>
                    </CCardHeader>
                    <CCardBody>
                        <CTabContent>
                            <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
                                <CRow>
                                    <CCol>
                                        <CCardTitle>Dashboard</CCardTitle>
                                        <CFormSwitch size="xl" label="Search" />
                                        <CFormSwitch size="xl" label="Universal Search" />
                                        <CFormSwitch size="xl" label="Summary" />
                                        <CFormSwitch size="xl" label="Sales, Pending Payment and Payment Collected Display" />
                                        <CFormSwitch size="xl" label="Payment mode summary" />
                                        <CFormSwitch size="xl" label="Expense summary" />
                                    </CCol>
                                    <CCol>
                                        <CCardTitle>Follow-ups</CCardTitle>
                                        <CFormSwitch size="xl" label="View all follow-ups" />
                                        <CFormSwitch size="xl" label="View only my follow-ups" />
                                    </CCol>
                                    <CCol>
                                        <CCardTitle>Emplyoee  Dahsbord</CCardTitle>
                                        <CFormSwitch size="xl" label="Sales Target" />
                                        <CFormSwitch size="xl" label="PT Target" />
                                    </CCol>
                                </CRow>
                            </CTabPane>
                            <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 2}>
                                <CRow >
                                    <CCol>
                                        <h5> All Enquires</h5>
                                        <CFormSwitch size="xl" label="All enquires" />
                                        <CFormSwitch size="xl" label="Add enquires, manage enquiries, enquires archive" />
                                        <CFormSwitch size="xl" label="Convert Enquiry & Add member" />
                                        <CFormSwitch size="xl" label="Delete enquiries" />
                                        <CFormSwitch size="xl" label="Edit enquiries" />
                                        <CFormSwitch size="xl" label="Print all enquiries" />
                                    </CCol>
                                    <CCol>
                                        <h5>Appointment</h5>
                                        <CFormSwitch size="xl" label="Appointment" />
                                        <CFormSwitch size="xl" label="Delete Appointment" />
                                        <CFormSwitch size="xl" label="Edit Appointment" />
                                        <CFormSwitch size="xl" label="Print all Appointment" />

                                    </CCol>
                                    <CCol>
                                        <h5>Trail Update</h5>
                                        <CFormSwitch size="xl" label="Trail Update" />
                                        <CFormSwitch size="xl" label="Delete Trail Update" />
                                        <CFormSwitch size="xl" label="Edit Trail Update" />
                                        <CFormSwitch size="xl" label="Print Trail Update" />

                                    </CCol>
                                </CRow>
                               
                               <CRow className='mt-4'>
                                  <CCol>
                                        <h5> Prospect</h5>
                                        <CFormSwitch size="xl" label="Prospect" />
                                        <CFormSwitch size="xl" label="Delete Prospect" />
                                        <CFormSwitch size="xl" label="Edit Prospect" />
                                        <CFormSwitch size="xl" label="Print all Prospect" />
                                 </CCol>
                                 <CCol>
                                        <h5> Call Report</h5>
                                        <CFormSwitch size="xl" label="Call Report" />
                                        <CFormSwitch size="xl" label="Delete Call Report" />
                                        <CFormSwitch size="xl" label="Edit Call Report" />
                                        <CFormSwitch size="xl" label="Print all Call Report" />
                                 </CCol>
                                 <CCol>
                                        <h5> Cold Enquires</h5>
                                        <CFormSwitch size="xl" label="Cold Enquires" />
                                        <CFormSwitch size="xl" label="Delete Cold Enquires" />
                                        <CFormSwitch size="xl" label="Edit Cold Enquires" />
                                        <CFormSwitch size="xl" label="Print all Cold Enquires" />
                                 </CCol>

                               </CRow>
                             


                            </CTabPane>
                            <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 3}>
                                <CRow>
                                    <CCol>
                                        <h5>All Clients</h5>
                                        <CFormSwitch size="xl" label="All Clients" />
                                        <CFormSwitch size="xl" label="Add Client" />
                                        <CFormSwitch size="xl" label="Client Profile" />
                                        <CFormSwitch size="xl" label="Delete  Client" />
                                        <CFormSwitch size="xl" label="Edit Client" />
                                        <CFormSwitch size="xl" label="Print all  Client" />
                                    </CCol>
                                    <CCol>
                                        <h5>Active Clients</h5>
                                        <CFormSwitch size="xl" label="Active Clients" />
                                        <CFormSwitch size="xl" label="Delete  Active Client" />
                                        <CFormSwitch size="xl" label="Edit Active Client" />
                                        <CFormSwitch size="xl" label="Print all Active Client" />
                                    </CCol>
                                    <CCol>
                                        <h5>Renewals Clients</h5>
                                        <CFormSwitch size="xl" label="Renewals Clients" />
                                        <CFormSwitch size="xl" label="Delete Renewal Clients" />
                                        <CFormSwitch size="xl" label="Edir Renewal Clients" />
                                        <CFormSwitch size="xl" label="Print all Renewal Clients" />
                                    </CCol>
                                </CRow>
                                <CRow className='mt-4'>
                                    <CCol>
                                    <h5>Renewed Clients</h5>
                                       <CFormSwitch size="xl" label="Renewed Clients" />
                                       <CFormSwitch size="xl" label="Delete Renewed Clients" />
                                       <CFormSwitch size="xl" label="Edit Renewed Clients" />
                                       <CFormSwitch size="xl" label="Print all Renewed Clients" />
                                    </CCol>
                                    <CCol>
                                    <h5>Left Clients</h5>
                                       <CFormSwitch size="xl" label="Left Clients" />
                                       <CFormSwitch size="xl" label="Delete Left Clients" />
                                       <CFormSwitch size="xl" label="Edit Left Clients" />
                                       <CFormSwitch size="xl" label="Print all Left Clients" />
                                    </CCol>
                                    <CCol>
                                    <h5>Client Support</h5>
                                       <CFormSwitch size="xl" label="Client Support" />
                                       <CFormSwitch size="xl" label="Delete Client Support" />
                                       <CFormSwitch size="xl" label="Edit Client Support" />
                                       <CFormSwitch size="xl" label="Print all Client Support" />
                                    </CCol>
                                    
                                </CRow>     
                            </CTabPane>
                            <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 4}>
                            <CRow>
                                <CCol>
                                      <h5>Email Marketing</h5>
                                       <CFormSwitch size="xl" label="Email Marketing" />
                                </CCol>
                                <CCol>
                                      <h5>SMS Marketing</h5>
                                       <CFormSwitch size="xl" label="SMS Marketing" />
                                </CCol>
                                <CCol>
                                      <h5>App Notification</h5>
                                       <CFormSwitch size="xl" label="App Notification" />
                                </CCol>
                                
                            </CRow>     

                            <CRow className='mt-4'>
                                <CCol>
                                    <h5>Offer Master</h5>
                                       <CFormSwitch size="xl" label="Add Offer" />
                                       <CFormSwitch size="xl" label="Add new Offer" />
                                       <CFormSwitch size="xl" label="Delete Offer " />
                                       <CFormSwitch size="xl" label="Edit Offer " />
                                </CCol>
                                <CCol>
                                    <h5>Bulk Mailer</h5>
                                       <CFormSwitch size="xl" label="Bulk Mailer Data" />
                                       <CFormSwitch size="xl" label="Delete Bulk Mailer" />
                                       <CFormSwitch size="xl" label="Edit Bulk Mailer" />
                                </CCol>
                                <CCol>
                                    <h5>Bulk Calling</h5>
                                       <CFormSwitch size="xl" label="Bulk Calling Data" />
                                       <CFormSwitch size="xl" label="Delete Bulk Calling" />
                                       <CFormSwitch size="xl" label="Edit Bulk Calling" />
                                </CCol>                            
                            </CRow>   

                            <CRow className='mt-4'>
                                <CCol>
                                <h5>Customer Review</h5>
                                <CFormSwitch size="xl" label="Customer Review" />
                                <CFormSwitch size="xl" label="Delete Customer Review" />
                                <CFormSwitch size="xl" label="Edit Customer Review" />
                                </CCol>
                            </CRow>

                            </CTabPane>
                            {activeKey===5 &&<FitnessRights/> }
                            {activeKey===6 &&<InventoryRights/> }
                            {activeKey ===7&& <FinanceRights/>}
                            {activeKey===8 && <HrRights/>}
                        </CTabContent>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}
export default AllRight
