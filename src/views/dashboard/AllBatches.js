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
import axios from 'axios'
import { useSelector } from 'react-redux'

const AllBatches = () => {
     const url = useSelector((el)=>el.domainOfApi) 
     const [activeKey, setActiveKey] = useState(1)
     const  [DailyAttendence,setDailyAttendence] = useState([])
     const  [monthlyReport,setMonthlyReport] = useState([])
     const  [clientsAttendencereg,setClientsAttendencereg] = useState([])

     let user = JSON.parse(localStorage.getItem('user-info'))
     const token = user.token;

    const  getLiveClasses = useCallback(async function() {
        try{
        const response1 = await axios.get(`${url}/allbatchesdailyattendence`)
        const response2 = await axios.get(`${url}/allbatchesmonthlyreport`)
        const response3 = await axios.get(`${url}/allbatchesclientattendencereg`)


        console.log(response3.data)  
        setDailyAttendence(response1.data)        
        setMonthlyReport(response2.data)
        setClientsAttendencereg(response3.data)
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
                    <CCardHeader >
                        <CNav variant="pills" role="tablist">
                            <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 1}
                                    onClick={() => setActiveKey(1)}
                                >
                                   Daily Attendance
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 2}
                                    onClick={() => setActiveKey(2)}
                                >

                                    Monthly Report
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 3}
                                    onClick={() => setActiveKey(3)}
                                >
                                    Client Attendance Reg
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
                                            <CTableHeaderCell scope="col">Trainer Name</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Services</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Batch Timing</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">No of Clients</CTableHeaderCell>
                                        </CTableRow>
                                    </CTableHead>
                                    <CTableBody>
                                        {DailyAttendence.map((el,i)=>(
                                           <CTableRow>
                                             <CTableDataCell>{i+1}</CTableDataCell>
                                             <CTableDataCell>{el.Trainer_Name}</CTableDataCell>
                                             <CTableDataCell>{el.Services}</CTableDataCell>
                                             <CTableDataCell>{el.Batch_Timing}</CTableDataCell>
                                             <CTableDataCell>{el.No_Of_Clients}</CTableDataCell>
                                            
                                         
                                         </CTableRow>
                                        ))}
                             
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
                                            <CTableHeaderCell scope="col">Trainer Name</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Services</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">
                                               Batch Timing
                                            </CTableHeaderCell>
                                            <CTableHeaderCell scope="col">  No of Clients</CTableHeaderCell>
                                           
                                            <CTableHeaderCell scope="col">New Clients</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Left Client</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Total Client</CTableHeaderCell>

                                        </CTableRow>
                                    </CTableHead>
                                    <CTableBody>
                                        {monthlyReport.map((el,i)=>
                                        <CTableRow>
                                          <CTableDataCell>{i+1}</CTableDataCell>
                                            <CTableDataCell>{el.Trainer_Name}</CTableDataCell>
                                            <CTableDataCell>{el.Services}</CTableDataCell>
                                            <CTableDataCell>{el.Batch_Timing}</CTableDataCell>
                                            <CTableDataCell>{el.No_Of_Clients}</CTableDataCell>
                                            <CTableDataCell>{el.New_Clients}</CTableDataCell>
                                            <CTableDataCell>{el.Left_Clients}</CTableDataCell>  
                                            <CTableDataCell>{el.Total_Clients}</CTableDataCell>                                                                                  
                                        </CTableRow>)}
                                       
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
                                <CTable bordered borderColor="black" responsive style={{width:'3500px'}}>
                                    <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                                        <CTableRow>
                                            <CTableHeaderCell scope="col">Sr.No</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Client Name</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Mobile</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Services</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Trainer Name</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Class Timing</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Package</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Days</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Start Date</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">End Date</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Sun<br/> 1</CTableHeaderCell>                                           
                                            <CTableHeaderCell scope="col">Mon<br/> 2</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Tue<br/> 3</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Wed<br/> 4</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Thu <br/>5</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Fri <br/> 6</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Sat <br/> 7</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Sun <br/> 8</CTableHeaderCell>                                            
                                            <CTableHeaderCell scope="col">Mon <br/>9</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Tue <br/>10</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Wed <br/>11</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Thu <br/>12</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Fri <br/>13</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Sat <br/>14</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Sun <br/>15</CTableHeaderCell>                                           
                                            <CTableHeaderCell scope="col">Mon <br/>16</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Tue <br/>17</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Wed <br/>18</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Thu <br/>19</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Fri <br/>20</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Sat <br/>21</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Sun <br/>22</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">mon <br/>23</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Wed <br/>24</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Thu <br/>25</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Fri <br/>27</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Sat <br/>28</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Sun <br/>29</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Mon<br/>30</CTableHeaderCell>
                                        </CTableRow>
                                    </CTableHead>
                                    <CTableBody>
                                        {clientsAttendencereg.map((el,i)=>
                                    <CTableRow>                                          
                                        <CTableDataCell>{i+1}</CTableDataCell>
                                        <CTableDataCell>{el.Client_Name}</CTableDataCell>
                                        <CTableDataCell>{el.Mobile}</CTableDataCell>
                                        <CTableDataCell>{el.Services}</CTableDataCell>
                                        <CTableDataCell>{el.Trainer_Name}</CTableDataCell>
                                        <CTableDataCell>{el.Class_Timing}</CTableDataCell>
                                        <CTableDataCell>{el.Package}</CTableDataCell>
                                        <CTableDataCell>{el.Days}</CTableDataCell>
                                        <CTableDataCell>{el.StartDate}</CTableDataCell>
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
export default AllBatches