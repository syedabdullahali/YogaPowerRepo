
import { cilArrowCircleBottom, cilArrowCircleTop } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
    CButton,
    CButtonGroup,

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
    CTabPane,
} from '@coreui/react'
import React, { useState, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import YogaSpinnar from 'src/views/theme/YogaSpinnar'


function RenewalsTable() {
    const url = useSelector((el) => el.domainOfApi)
    const [renevalsData, setRenewals] = useState([])


    const getLiveClasses = useCallback(async function () {
        try {
            const response5 = await axios.get(`${ url }/renewalstarget`)
            setRenewals(response5.data)
        } catch (error) {
            console.error(error)
        }
    }, [])

    useEffect(() => {
        getLiveClasses()
    }, [getLiveClasses])


    return <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={true}>
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
                {renevalsData.map((el, i) =>
                    <CTableRow key={i}>
                        <CTableDataCell>{i + 1}</CTableDataCell>
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
        {!renevalsData[0] ?
            <CCol style={{ width: '100%' }} className='d-flex justify-content-center '>
                <YogaSpinnar />
            </CCol> : ''}
    </CTabPane>
}


export default RenewalsTable