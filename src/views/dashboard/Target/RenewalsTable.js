
import { cilArrowCircleBottom, cilArrowCircleTop } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
    CButton,
    CButtonGroup,
    CPagination,
    CPaginationItem,
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
    const [pagination, setPagination] = useState(10)
    let num =0


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
                {/* {renevalsData.filter((el, i) => {
                  if (pagination - 10 < i + 1 && pagination >= i + 1) {
                        return el
                      }
              }).map((el, i) =>
                    <CTableRow key={i}>
                        <CTableDataCell>{i + 1 + pagination - 10}</CTableDataCell>
                        <CTableDataCell>{el.Employee}</CTableDataCell>
                        <CTableDataCell>{el.Target}</CTableDataCell>
                        <CTableDataCell>{el.No_Of_Renewals}</CTableDataCell>
                        <CTableDataCell>{el.Conversion}</CTableDataCell>
                        <CTableDataCell>{el.Total_Amount}</CTableDataCell>
                        <CTableDataCell>{el.Achived}</CTableDataCell>
                    </CTableRow>
                )} */}
         {[...renevalsData.map(el=>el.annualTarget.map((el2,i)=>{
        if(+el2.Target){
            num++
            return  <CTableRow key={num}>
            <CTableDataCell>{num+ pagination - 10}</CTableDataCell>
            <CTableDataCell>{el.Employee}</CTableDataCell>
            <CTableDataCell>{el2.Target}</CTableDataCell>
            <CTableDataCell>{el.No_Of_Renewals}</CTableDataCell>
            <CTableDataCell>{el.Conversion}</CTableDataCell>
            <CTableDataCell>{el.Total_Amount}</CTableDataCell>
            <CTableDataCell>{el.Achived}</CTableDataCell>
        </CTableRow>      
        }
    }).filter((el)=>el)).flat(2)]
}




            </CTableBody>
        </CTable>
        {!renevalsData[0] ?
            <CCol style={{ width: '100%' }} className='d-flex justify-content-center '>
                <YogaSpinnar />
            </CCol> : ''}

            <div className='d-flex justify-content-center mt-3' >
                        <CPagination aria-label="Page navigation example" style={{cursor:'pointer'}}>
                            <CPaginationItem aria-label="Previous" onClick={() => setPagination((val) => val > 10 ? val - 10 : 10)}>
                                <span aria-hidden="true" >&laquo;</span>
                            </CPaginationItem>
                            <CPaginationItem active >{pagination / 10}</CPaginationItem>
                            {renevalsData.length > pagination / 10 * 10 && <CPaginationItem onClick={() => setPagination((val) => val < renevalsData.length ? val + 10 : val)}>{pagination / 10 + 1}</CPaginationItem>}
                            {renevalsData.length > pagination / 10 * 20 && <CPaginationItem onClick={() => setPagination((val) => val < renevalsData.length ? val + 10 : val)}>{pagination / 10 + 2}</CPaginationItem>}
                            <CPaginationItem aria-label="Next" onClick={() => setPagination((val) => val < renevalsData.length ? val + 10 : val)}>
                                <span aria-hidden="true">&raquo;</span>
                            </CPaginationItem>
                    </CPagination>
        </div>
    </CTabPane>
}


export default RenewalsTable