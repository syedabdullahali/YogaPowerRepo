import React, { useEffect, useState } from 'react'
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
import axios from 'axios'
const url = 'https://yog-seven.vercel.app'
import { useSelector } from 'react-redux'



const optionAppointmentTyep = [
    "Trial",
    "Diet",
    "Yoga",
    "Treatment",
    "Other",
]


const Appointment = () => {
    const url1 = useSelector((el)=>el.domainOfApi) 

    const [appointment, setAppointment] = useState(false)
    const [Enquiry, setEnquiry] = useState([])
    const [active, setActive] = useState(false)
    const [active2, setActive2] = useState(false)

    const [clientName, setClientName] = useState('')
    const [mobileNo, setMobileno] = useState('')
    const [appointmentType,setAppointmentType] = useState('')
    const [staff,setStaff] = useState([])

    let user = JSON.parse(localStorage.getItem('user-info'))
    const token = user.token;
    const username = user.user.username;

    useEffect(() => {
        getEnquiry()
        getStaff()
    }, [])

    function getEnquiry() {
        axios.get(`${ url }/memberForm/all`, {
            headers: {
                'Authorization': `Bearer ${ token }`
            }
        })
            .then((res) => {
                console.log(res.data.filter((list) => list.username === username).reverse())
                setEnquiry(res.data.filter((list) => list.username === username).reverse())
            })
            .catch((error) => {
                console.error(error)
            })
    }


    const selectedOption = (e) => {
        setClientName(e.target.textContent)
        console.log(e.target.id)
        console.log(Enquiry.filter((el) => el._id === e.target.id)[0].ContactNumber)
        setMobileno(Enquiry.filter((el) => el._id === e.target.id)[0].ContactNumber || '')
        setActive(false)
    }

    const ActiveDropDownHandler = () => {
        setActive(true)
    }
    const ActiveDropDownHandler2 = () => {
        setActive2(true)
    }

   const  selectedOption2 =(e)=>{
    setAppointmentType(e.target.textContent)
    setActive2(false)
   }

   function getStaff() {
    axios.get(`${url1}/employeeform`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then((res) => {
            setStaff(res.data)
            console.log(res.data);
        })
        .catch((error) => {
            console.error(error)
        })
}


    console.log('Syed Abdullah Ali'.includes(clientName))
    return (

        <CRow>
            <CCol lg={12} sm={12}>
                <CCard className='mb-3 border-top-success border-top-3'>
                    <CCardHeader>
                        <strong className="mt-2">Appointment</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CRow className='d-flex justify-content-center mb-2'>
                            <CCol lg={5} sm={12} className='mb-2'>
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
                            <CCol>
                                <CButton className='float-end' onClick={() => setAppointment(!appointment)} >{appointment ? 'Close' : 'Add Appointment'}</CButton>
                            </CCol>
                        </CRow>
                        {appointment &&
                            <CCard className='mt-1 mb-2'>
                                <CCardBody>
                                    <CRow>
                                        <CCol xs={3} style={{ position: 'relative' }}>
                                            <CFormInput
                                                className="mb-1"
                                                type="text"
                                                id="exampleFormControlInput1"
                                                label="Client Name"
                                                placeholder="Enter Name"
                                                list="exampleFormControlInput1Dta"
                                                onFocus={ActiveDropDownHandler}
                                                value={clientName}
                                                onChange={(e) => setClientName(e.target.value)}


                                            />


                                            {active && <CCard style={{ maxheight: '200px', width: '95%', position: 'absolute', minHeight: 'auto' }} >

                                                {[...[...Enquiry.filter((el) => el.Fullname)].filter((el) => el.Fullname.includes(clientName)).map((el) => {

                                                    return <div className='p-2 text-center' style={{ borderBottom: '1px solid gray' }}
                                                        onClick={selectedOption} id={el._id} >{el.Fullname}</div >
                                                })]}

                                            </CCard>}





                                        </CCol>
                                        <CCol xs={3}>
                                            <CFormInput
                                                className="mb-1"
                                                type="text"
                                                id="exampleFormControlInput1"
                                                label="Client Number"
                                                placeholder="Enter Number"
                                                value={mobileNo}
                                                onChange={(e) => setMobileno(e.target.value)}
                                            />
                                        </CCol>
                                        <CCol xs={3} style={{position:'relative'}}>
                                            <CFormInput
                                                className="mb-1"
                                                aria-label="Select Service"
                                                label="Appointment Type"
                                                value={appointmentType}
                                                onChange={(e)=>setAppointmentType(e.target.value)}
                                                onFocus={ActiveDropDownHandler2}

                                            >
                                                

                                            </CFormInput>
                                         {active2 &&      <CCard  style={ { maxheight: '200px', width: '95%', position: 'absolute', minHeight: 'auto' }} >

                                                    {[...optionAppointmentTyep.filter((el) => el.includes(appointmentType)).map((el) => {
                                                        return <div className='p-2 text-center' style={{ borderBottom: '1px solid gray' }}
                                                            onClick={selectedOption2}  >{el}</div >
                                                    })]}
                                                </CCard>}

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
                                               

                                            >
                                                <option>Select Staff</option>
                                                
                                                {staff.filter((list) => list.username === username && list.selected === 'Select').map((item, index) => (
                                                    item.username === username && (
                                                        <option key={index}>{item.FullName}</option>
                                                    )
                                                ))}
                                                </CFormSelect>
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
                            <CTableHead style={{ backgroundColor: "#106103", color: "white" }}>
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