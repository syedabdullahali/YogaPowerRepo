import React from 'react'
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
    CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilArrowCircleTop, cilFile } from '@coreui/icons'
import { FaBeer } from 'react-icons/fa';
import DataTable from 'src/components/DataTable'
import { MdCall, MdDelete, MdEdit, MdMail } from 'react-icons/md';



const EmpOfDocuments = () => {


    const header = [


        { heading: 'Sr.No', value: 'id' },
        { heading: 'Date', value: 'id' },
        { heading: 'Name', value: 'Jonas' },
        { heading:'Mobile',vlaue:'9377646374'},
        { heading: 'Email Id', value: 'member_name' },
        { heading: 'Gender', value: 'male' },
        { heading: 'Address', value: 'service_name' },
        { heading: 'Sources', value: 'variation_name' },
        { heading: 'Department', value: 'expiry_date' },
        { heading: 'Desgantion', btn: 'renew' },
        { heading: 'Doc Type', value: cilFile },
        { heading: 'Doc Name', btn: 'renew' },
        { heading: 'Document', iconBtn: cilFile },
        { heading: 'Action', com: (<> <FaBeer size='20px' /></>) },
        { heading:'Edit/Delete',value:''}
    
    ]

    const Users = [
        {
            id: 1,
            date_time: "25-08-2022 03:00 PM",
            member_name: "Nayana Nagrecha",
            mobile: "9136123476",
            service_name: "Yoga",
            variation_name: "3 Months",
            expiry_date: "31-08-2022",
            sales_rep: "Sejal Ganatra",
            pt_trainer: "-",
            trainer: "Prabha Yadav",
            staff_name: "Sejal Ganatra",
        },
        {
            id: 2,
            date_time: "25-08-2022 03:00 PM",
            member_name: "Nayana Nagrecha",
            mobile: "9136123476",
            service_name: "Yoga",
            variation_name: "3 Months",
            expiry_date: "31-08-2022",
            sales_rep: "Sejal Ganatra",
            pt_trainer: "-",
            trainer: "Prabha Yadav",
            staff_name: "Sejal Ganatra",
        },
    ];


    return (
        <CRow>
            <CCol lg={12} sm={12}>
                <CCard className="mb-3 border-success">
                    <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                        <CCardTitle className="mt-2">Staff Check Ins</CCardTitle>
                    </CCardHeader>
                    <CCardBody>
                        <CRow className='d-flex mb-2'>
                            <CCol lg={3} sm={6} className='mb-2'>
                                <CFormSelect
                                    id="inputGroupSelect04"
                                    aria-label="Example select with button addon"
                                >
                                    <option>Name</option>
                                    <option value="1">Location</option>
                                    <option value="3">Mobile</option>
                                    <option value="3">Email</option>
                                    <option value="2">Department</option>
                                    <option value="2">Desgantion</option>
                                </CFormSelect>
                            </CCol>

                            <CCol lg={3} sm={6} className='mb-2'>
                                <CFormInput
                                    type='date'
                                    placeholder="Search"
                                    aria-label="Recipient's username"
                                    aria-describedby="button-addon2"
                                />
                                {/* <CButton type="button" color="primary">
                                    Search
                                </CButton> */}
                            </CCol>
                            <CCol lg={4} sm={6} className='mb-2' >
                                <CButtonGroup className='float-end'>
                                    
                                    <CButton color="primary">
                                        <CIcon icon={cilArrowCircleTop} />
                                        {' '}Export
                                    </CButton>
                                    <CButton color="primary">
                                        <CIcon icon={cilArrowCircleTop} />
                                        {' '}Import
                                    </CButton>
                                </CButtonGroup>
                            </CCol>
                        </CRow>
                        <DataTable heading={header} data={Users} />
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default EmpOfDocuments
