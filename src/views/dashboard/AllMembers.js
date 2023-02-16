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

const AllMembers = () => {
    const url = useSelector((el)=>el.domainOfApi) 

    const  [clientsAttendencereg,setClientsAttendencereg] = useState([])




    const  getTCC_Classes = useCallback(async function() {
        try{
        const response3 = await axios.get(`${url}/allmembers/clientattendencereg`)
 
 
        console.log(response3.data)  
    
        setClientsAttendencereg(response3.data)
        }catch(error) {
                console.error(error)
        }
    },[])
 
    useEffect(() => {
        getTCC_Classes()
    },[ getTCC_Classes]) 


    return (
        <CRow>
            <CCol xs={12}>
                <CCard>
                    <CCardHeader >
                        <CNav variant="pills" role="tablist">
                            <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={true}
                                >
                                    Client Attendance Reg
                                </CNavLink>
                            </CNavItem>
                           

                            
                        </CNav>
                    </CCardHeader>
                    <CCardBody>
                        <CTabContent>
                         
                         
                            <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={true}>
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
                                        <CTableDataCell>{el.Package}</CTableDataCell>
                                        <CTableDataCell>{el.Days}</CTableDataCell>
                                        <CTableDataCell>{el.StartDate}</CTableDataCell>
                                        <CTableDataCell>{el.EndDate}</CTableDataCell>
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
export default AllMembers