// import {
//     CButton,
//     CCardTitle,
//     CCol,
//     CForm,
//     CFormInput,
//     CFormSelect,
//     CRow,
//     CTable,
//     CTableBody,
//     CTableDataCell,
//     CTableHead,
//     CTableHeaderCell,
//     CTableRow,
// } from "@coreui/react";
// import axios from "axios";
// import { ref } from "firebase/storage";
// import moment from "moment";
// import React, { useEffect, useState } from "react";
// import { MdDelete } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
// import { storage } from "src/firebase";
// const url = 'https://yog-seven.vercel.app'
// const url2 = 'https://yog-seven.vercel.app'

// const Appointment = ({ id }) => {
//     const [action1, setAction1] = useState(false)


//     let user = JSON.parse(localStorage.getItem('user-info'))
//     const token = user.token;
//     const username = user.user.username;
//     const [result1, setResult1] = useState([]);
//     const [paging, setPaging] = useState(0)
//     const headers = {
//         'Authorization': `Bearer ${token}`,
//         'My-Custom-Header': 'foobar'
//     };
//     const imagesListRef = ref(storage, "DocumentClient/");
//     useEffect(() => {
//         getAppointment()
//         getStaff()
//     }, []);

//     const [staff, setStaff] = useState([])
//     function getStaff() {
//         axios.get(`${url2}/employeeForm/all`, {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         })
//             .then((res) => {
//                 setStaff(res.data)
//             })
//             .catch((error) => {
//                 console.error(error)
//             })
//     }

//     function getAppointment() {
//         axios.get(`${url}/AppointmentClient/all`, {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         })
//             .then((res) => {
//                 console.log(res.data)
//                 setResult1(res.data.reverse())
//             })
//             .catch((error) => {
//                 console.error(error)
//             })
//     }

//     const [AppointmentDate, setAppointmentDate] = useState('')
//     const [AppointmentTime, setAppointmentTime] = useState('')
//     const [StaffName, setStaffName] = useState('')

//     function createGallery() {
//         const data = {
//             userId: id,
//             AppointmentId: { username } + result1.length,
//             AppointmentDate: AppointmentDate,
//             AppointmentTime: AppointmentTime,
//             StaffName: StaffName,
//         }
//         axios.post(`${url}/AppointmentClient/create`, data, { headers })
//             .then((resp) => {
//                 console.log(resp.data)
//                 alert('Successfully Added')
//                 getAppointment()
//                 setAction1(false)
//             })
//             .catch((error) => console.log(error))
//     }

//     const navi = useNavigate()
//     function deleteData(id) {
//         if (confirm('You want to delete this')) {
//             fetch(`${url}/AppointmentClient/delete/${id}`, {
//                 method: 'DELETE',
//                 headers: {
//                     "Authorization": `Bearer ${token}`,
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json',
//                 },
//             }).then((result) => {
//                 result.json().then((resp) => {
//                     console.warn(resp)
//                     getAppointment()
//                 })
//             })
//         }
//         return
//     }


//     return (
//         <CRow>
//             <CCol xs={12}>
//                 <div className='d-flex justify-content-between mb-2'>
//                     <div className='mt-2 ms-2'>
//                         <CCardTitle>Appointment  </CCardTitle>
//                     </div>
//                     <div className='justify-content-around'>
//                         <CButton style={{ margin: '5px' }}>Inter branch transfer</CButton>
//                         <CButton style={{ margin: '5px' }}>Print Profile</CButton>
//                         <CButton style={{ margin: '5px' }} onClick={() => navi("/forms/invoice")}>New Invoice</CButton>
//                         <CButton style={{ margin: '5px' }}>New Call</CButton>
//                         <CButton style={{ margin: '5px' }}>New Appointment</CButton>
//                     </div>

//                 </div>
//             </CCol>
//             <CForm className="mb-2">
//                 <div className="d-flex justify-content-between">
//                     <div></div>
//                     <div>
//                         <CRow>
//                             <CCol>
//                                 <CButton className="ms-1 mt-2" onClick={() => setAction1(!action1)}>{action1 ? 'close' : 'Book Appointment'}</CButton>
//                             </CCol>
//                         </CRow>
//                     </div>
//                 </div>
//                 {action1 &&
//                     <div>
//                         <CRow className='mt-3'>
//                             <CCol lg={4} md={4} sm={12}>
//                                 <CFormSelect
//                                     label="Staff Name"
//                                     value={StaffName}
//                                     onChange={(e) => setStaffName(e.target.value)}
//                                 >
//                                     <option >Select</option>
//                                     {staff.filter((list) => list.username === username && list.selected === 'Select').map((item, index) => (
//                                         item.username === username && (
//                                             <option key={index}>{item.FullName}</option>
//                                         )
//                                     ))}
//                                 </CFormSelect>
//                             </CCol>
//                             <CCol lg={4} md={4} sm={12}>
//                                 <CFormInput
//                                     className="mb-1 mr-3"
//                                     type="date"
//                                     label="Appointment Date"
//                                     value={AppointmentDate}
//                                     onChange={(e) => setAppointmentDate(e.target.value)}
//                                 />
//                             </CCol>
//                             <CCol lg={4} md={4} sm={12}>
//                                 <CFormInput
//                                     className="mb-1 mr-3"
//                                     type="time"
//                                     label="Appointment Time"
//                                     value={AppointmentTime}
//                                     onChange={(e) => setAppointmentTime(e.target.value)}
//                                 />
//                             </CCol>
//                             <CCol className="mt-2" lg={6} md={6} sm={12}>
//                                 <CButton className="mt-2" onClick={() => createGallery()}>Save</CButton>
//                             </CCol>
//                         </CRow>
//                     </div>
//                 }
//             </CForm>
//             <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} hover responsive>
//                 <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
//                     <CTableRow >
//                         <CTableHeaderCell>Sr.No</CTableHeaderCell>
//                         <CTableHeaderCell>Booking Date</CTableHeaderCell>
//                         <CTableHeaderCell>Client Name</CTableHeaderCell>
//                         <CTableHeaderCell>Clent Number</CTableHeaderCell>
//                         <CTableHeaderCell>Appointment Type</CTableHeaderCell>
//                         <CTableHeaderCell>Appointment With</CTableHeaderCell>
//                         <CTableHeaderCell>Appointment Date</CTableHeaderCell>
//                         <CTableHeaderCell>Appointment Time</CTableHeaderCell>
//                         <CTableHeaderCell>Fees Status</CTableHeaderCell>
//                         <CTableHeaderCell>Amount</CTableHeaderCell>
//                         <CTableHeaderCell>Status</CTableHeaderCell>
//                         <CTableHeaderCell>Staff</CTableHeaderCell>
//                     </CTableRow>
//                 </CTableHead>
//                 <CTableBody>
//                     {result1.filter((list) => list.userId === id).map((item, index) => (
//                         <CTableRow key={index}>
//                             <CTableDataCell>{index + 1 + (paging * 10)}</CTableDataCell>
//                             <CTableDataCell>{moment(item.createdAt).format("MM-DD-YYYY")}</CTableDataCell>
//                             <CTableDataCell>{moment(item.AppointmentDate).format("MM-DD-YYYY")}</CTableDataCell>
//                             <CTableDataCell>{item.AppointmentTime}</CTableDataCell>
//                             <CTableDataCell className="text-center">{item.StaffName}</CTableDataCell>
//                             <CTableDataCell><MdDelete style={{ cursor: 'pointer', markerStart: '10px' }} onClick={() => deleteData(item._id)} size='20px' /></CTableDataCell>
//                         </CTableRow>
//                     ))}
//                 </CTableBody>
//             </CTable>
//         </CRow>
//     );
// };

// export default Appointment;


import React, { useState } from 'react'
import {
    CButton,
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

const Appointment = () => {
    const [appointment, setAppointment] = useState(false)
    return (
        
        <CRow>
            <CCol lg={12} sm={12}>
                <CCard className='mb-3 border-top-success border-top-3'>
                    <CCardHeader>
                        <strong className="mt-2">Appointment</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CRow >
                            <CCol >
                                <CInputGroup style={{ width: "500px" }}>
                                    <CInputGroupText
                                        component="label"
                                        htmlFor="inputGroupSelect01"
                                    >
                                        Form
                                    </CInputGroupText>
                                    <CFormInput
                                        placeholder="Search"
                                        type='date'
                                        aria-label="Recipient's username"
                                        aria-describedby="button-addon2"
                                    />
                                    <CInputGroupText
                                        component="label"
                                        htmlFor="inputGroupSelect01"
                                    >
                                        To
                                    </CInputGroupText>
                                    <CFormInput
                                        placeholder="Search"
                                        type='date'
                                        aria-label="Recipient's username"
                                        aria-describedby="button-addon2"
                                    />
                                    <CButton type="button" color="primary">
                                        Search
                                    </CButton>
                                </CInputGroup>
                              
                            </CCol>
                            <CRow>
                            <CCol>
                            <CInputGroup style={{ width: "500px" }}>
                                    <CInputGroupText
                                        component="label"
                                        htmlFor="inputGroupSelect01"
                                    >
                                        Mobile Number
                                    </CInputGroupText>
                                    <CFormInput
                                        placeholder="Search"
                                        type='Number'
                                        aria-label="Recipient's username"
                                        aria-describedby="button-addon2"
                                    />
    
                                    <CButton type="button" color="primary">
                                        Search
                                    </CButton>
                                </CInputGroup>
                            </CCol>
                            </CRow>
                            <CCol>
                                <CButton className='float-end' onClick={() => setAppointment(!appointment)} >{appointment ? 'Close' : 'Book Appointment'}</CButton>
                            </CCol>
                        </CRow>
                        {appointment &&
                            <CCard className='mt-1 mb-2'>
                                <CCardBody>
                                    <CRow>
                                        <CCol xs={3}>
                                            <CFormInput
                                                className="mb-1"
                                                type="text"
                                                id="exampleFormControlInput1"
                                                label="Client Name"
                                                placeholder="Enter Name"
                                            />
                                        </CCol>
                                        <CCol xs={3}>
                                            <CFormInput
                                                className="mb-1"
                                                type="text"
                                                id="exampleFormControlInput1"
                                                label="Client Number"
                                                placeholder="Enter Number"
                                            />
                                        </CCol>
                                        <CCol xs={3}>
                                            <CFormSelect
                                                className="mb-1"
                                                aria-label="Select Service"
                                                label="Appointment Type"
                                                options={[
                                                    "Select Appointment type",
                                                    { label: "Trial", value: "1" },
                                                    { label: "Diet", value: "2" },
                                                    { label: "Yoga", value: "3" },
                                                    { label: "Treatment", value: "3" },
                                                    { label: "Other", value: "3" },
                                                ]}
                                            />
                                        </CCol>
                                        <CCol xs={3}>
                                            <CFormInput
                                                className="mb-1"
                                                type="date"
                                                id="exampleFormControlInput1"
                                                label="Appointment Date"
                                                placeholder="Enter date"
                                            />
                                        </CCol>
                                        <CCol xs={3}>
                                            <CFormInput
                                                className="mb-1"
                                                type="number"
                                                id="exampleFormControlInput1"
                                                label="Fees"
                                                placeholder="Enter Fees"
                                            />
                                        </CCol>
                                        <CCol xs={3}>
                                            <CFormSelect
                                                className="mb-1"
                                                aria-label="Select Service"
                                                label="Staff"
                                                options={[
                                                    "Select Staff",
                                                    { label: "Sejal", value: "1" },
                                                    { label: "Prabha", value: "2" },
                                                    { label: "Yoga", value: "3" },
                                                    { label: "Treatment", value: "3" },
                                                    { label: "Other", value: "3" },
                                                ]}
                                            />
                                        </CCol>

                                        <CCol className='mb-2 mt-4 float-end'>
                                            <CButton className=' ms-2 float-end'>Cancel</CButton>
                                            <CButton className=' float-end'>Book</CButton>
                                        </CCol>

                                    </CRow>
                                </CCardBody>
                            </CCard>
                        }

                        <CTable bordered style={{ borderColor: "#106103" }} responsive>
                            <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }}>
                                <CTableRow>
                                    <CTableHeaderCell scope="col">Sr No</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Booking Date</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Client Name</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Client Number</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Appointment Type</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Appointment With</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Appointment Date</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Appointment Time</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Fees Status</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Amount</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Staff</CTableHeaderCell>
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
                                    <CTableDataCell></CTableDataCell>
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
                                    <CTableDataCell></CTableDataCell>
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
                                    <CTableDataCell></CTableDataCell>
                                </CTableRow>
                            </CTableBody>
                        </CTable>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default Appointment






