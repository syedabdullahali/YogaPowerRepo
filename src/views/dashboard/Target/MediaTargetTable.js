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
    CSpinner
} from '@coreui/react'
import React, { useState, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import YogaSpinnar from 'src/views/theme/YogaSpinnar'


function MeadiaTargetTable() {

    const url = useSelector((el) => el.domainOfApi)
    const [mediaTarget, setMediaTarget] = useState([])


    const getLiveClasses = useCallback(async function () {
        try {
            const response7 = await axios.get(`${ url }/mediatarget`)
            setMediaTarget(response7.data)
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

                {
                    mediaTarget.map((el, i) =>
                        <CTableRow>
                            <CTableDataCell>{i + 1}</CTableDataCell>
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
        {!mediaTarget[0] ?
            <CCol style={{ width: '100%' }} className='d-flex justify-content-center '>
                <YogaSpinnar />
            </CCol> : ''}
    </CTabPane>
}


export default MeadiaTargetTable