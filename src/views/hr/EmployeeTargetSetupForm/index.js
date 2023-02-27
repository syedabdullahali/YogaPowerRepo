import {
    CForm, CCard, CCardHeader, CCardTitle, CFormInput, CCol, CFormSelect,
    CRow, CTable, CTableHead, CTableHeaderCell, CTableRow, CTableBody,
    CTableDataCell, CButton
} from '@coreui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function EmployeeTargetSetupForm({ closeForm, getEmployeeTargetSheetData }) {
    const url1 = useSelector((el) => el.domainOfApi)
    let user = JSON.parse(localStorage.getItem('user-info'))
    const username = user.user.username;

    const [TargetValue, setTargetValue] = useState('')
    const [employeeData, setEmployeeData] = useState([])
    const [selectedEmployee, setSselectedEmployee] = useState('')
    const [year, setYear] = useState('')

    const [monthInput1, setMonthIput1] = useState(' ')
    const [monthInput2, setMonthIput2] = useState(' ')
    const [monthInput3, setMonthIput3] = useState(' ')
    const [monthInput4, setMonthIput4] = useState(' ')
    const [monthInput5, setMonthIput5] = useState(' ')
    const [monthInput6, setMonthIput6] = useState(' ')
    const [monthInput7, setMonthIput7] = useState(' ')
    const [monthInput8, setMonthIput8] = useState(' ')
    const [monthInput9, setMonthIput9] = useState(' ')
    const [monthInput10, setMonthIput10] = useState(' ')
    const [monthInput11, setMonthIput11] = useState(' ')
    const [monthInput12, setMonthIput12] = useState(' ')


    useEffect(() => {
        getEmployee()
    }, [])

    async function getEmployee() {
        try {
            const { data } = await axios.get(`${ url1 }/employeeform`)
            setEmployeeData(data)
        } catch (error) {
            console.log(error)
        }
    }

    console.log(employeeData)

    let arrMonthData = []

    const EmployeeData = {
        "Sr_No": "1",
        "Employee": selectedEmployee.split('---')[0],
        "Type_Of_Target": TargetValue,
        "Year": year,
        "Id": selectedEmployee.split('---')[1],
        "TargetValue": TargetValue
    }

    const MonthData = {
        "Jan": monthInput1,
        "Feb": monthInput2,
        "March": monthInput3,
        "April": monthInput4,
        "May": monthInput5,
        "June": monthInput6,
        "July": monthInput7,
        "August": monthInput8,
        "Sept": monthInput9,
        "Oct": monthInput10,
        "Nov": monthInput11,
        "Dec": monthInput12,
    }


    const PostData = { ...EmployeeData, ...MonthData }


    async function saveTargetSheetData() {
        // To Get  Month Data To Individual Sales  
        for (const Key in MonthData) {
            arrMonthData.push({ "monthName": Key, "Target": (MonthData[Key] || "  ") })
        }
        // To Send Post to info all about Sales  
        await axios.post(`${ url1 }/employeetargetsheet`, JSON.stringify(PostData), {
            headers: {
                'Content-Type': 'application/json'
            }
        })


        // Sales Target Api scope 

        if (TargetValue === "Sales Target") {
            const data = {
                "Sr_No": selectedEmployee.split('---')[1],
                "Employee": selectedEmployee.split('---')[0],
                "Target": " ",
                "New_Sales": " ",
                "Renewals": " ",
                "Upgrade_Sales": " ",
                "Cross_Sales": " ",
                "Balance_Collection": " ",
                "Total_Collected": " ",
                "Achived": " ",
                "annualTarget": [
                    ...arrMonthData
                ]
            }
            async function PostRequestToSalesTarget() {
                await axios.post(`${ url1 }/salestarget`, JSON.stringify(data), {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

            }
            PostRequestToSalesTarget()
        }


        if (TargetValue === 'Client Target') {

            const data = {
                "Sr_No": selectedEmployee.split('---')[1],
                "Employee": selectedEmployee.split('---')[0],
                "Target": " ",
                "New_Sales": " ",
                "Reference": " ",
                "Renewals": " ",
                "Upgrade_Sales": " ",
                "Cross_Selling": " ",
                "Total_Collected": " ",
                "Achived": " ",
                "annualTarget": [
                    ...arrMonthData
                ]
            }
            async function PostRequestToClientTarget() {
                await axios.post(`${ url1 }/clienttarget`, JSON.stringify(data), {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

            }
            PostRequestToClientTarget()

        }


        if (TargetValue === 'Calls Target') {
            const data = {
                "Sr_No": selectedEmployee.split('---')[1],
                "Employee": selectedEmployee.split('---')[0],
                "Call_Target": " ",
                "Follow_Ups": " ",
                "Members_Call": " ",
                "Total_Completed": " ",
                "Achived": " ",
                "__v": 0,
                "annualTarget": [
                    ...arrMonthData
                ]
            }
            async function PostRequestToCallesTarget() {
                await axios.post(`${ url1 }/callstarget`, JSON.stringify(data), {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

            }
            PostRequestToCallesTarget()

        }

        if (TargetValue === 'Lead Target') {

            const data = {
                "Sr_No": selectedEmployee.split('---')[1],
                "Employee": selectedEmployee.split('---')[0],
                "Lead_Assign": " ",
                "Spot_Conversions": " ",
                "Total_Leads_Conversion": " ",
                "Total_Amount": " ",
                "Achived": " ",
                "annualTarget": [
                    ...arrMonthData
                ]

            }
            async function PostRequestToLeadTarget() {
                 await axios.post(`${ url1 }/leadstarget`, JSON.stringify(data), {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            }
            PostRequestToLeadTarget()

        }



        if (TargetValue === 'Renewals') {

            const data = {
                "Sr_No": selectedEmployee.split('---')[1],
                "Employee": selectedEmployee.split('---')[0],
                "Target": " ",
                "No_Of_Renewals": " ",
                "Conversion": " ",
                "Total_Amount": " ",
                "Achived": " ",
                "annualTarget": [
                    ...arrMonthData
                ]
            }
            async function PostRequestToRenewals() {
                 await axios.post(`${ url1 }/renewalstarget`, JSON.stringify(data), {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            }
            PostRequestToRenewals()

        }



        if (TargetValue === 'Referral Leads') {
            const data = {
                "Sr_No": selectedEmployee.split('---')[1],
                "Employee": selectedEmployee.split('---')[0],
                "No_Of_Referrals_Target": " ",
                "No_Of_Referrals_Leads": " ",
                "Convert_To_Member": " ",
                "Total_Amount": " ",
                "Achived": " ",
                "annualTarget": [
                    ...arrMonthData
                ]
            }
            async function PostRequestToReferralLeads() {
                 await axios.post(`${ url1 }/referralsleadstarget`, JSON.stringify(data), {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            }
            PostRequestToReferralLeads()

        }


        if (TargetValue === 'Media Target') {
            const data = {
                "Sr_No": selectedEmployee.split('---')[1],
                "Employee": selectedEmployee.split('---')[0],
                "Google_Reviews": 10,
                "Facebook": " ",
                "Instagram": " ",
                "Linkedin": " ",
                "Justdial": " ",
                "Achived": " ",
                "__v": 0,
                "annualTarget": [
                    {
                        "monthName": " ",
                        "Target": " "
                    }
                ]
            }
            async function PostRequestToMediaTarget() {
               await axios.post(`${ url1 }/mediatarget`, JSON.stringify(data), {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            }
            PostRequestToMediaTarget()

        }



        // Ton Upadte and Clear After SuccessFully Save 
        getEmployeeTargetSheetData()
        alert('Success Fully Save')
        arrMonthData = []
        setMonthIput1(' ')
        setMonthIput2(' ')
        setMonthIput3(' ')
        setMonthIput4(' ')
        setMonthIput5(' ')
        setMonthIput6(' ')
        setMonthIput7(' ')
        setMonthIput8(' ')
        setMonthIput9(' ')
        setMonthIput10(' ')
        setMonthIput11(' ')
        setMonthIput12(' ')
        setTargetValue(' ')
        setSselectedEmployee(' ')
        setYear(' ')
    }


    return <CCard>

        <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
            <CCardTitle><h4>Empyolee Target Setup</h4></CCardTitle>
        </CCardHeader>
        <CCol className='d-flex justify-content-end mt-4 pe-4'>

            <CButton onClick={() => closeForm()} color='danger' >Close</CButton>
        </CCol >


        <CForm className='p-4' style={{ boxSizing: 'border-box' }}>
            <CCol lg={6}>
                <CFormSelect label='Employee'
                    value={selectedEmployee}
                    onChange={(e) => setSselectedEmployee(e.target.value)}
                >
                    <option >Select Your Employee </option>

                    {employeeData.filter((list) => list.username === username && list.selected === 'Select').map((item, index) => (
                        item.username === username && (
                            <option key={index} value={`${ item.FullName }---${ item._id }`} >{item.FullName}</option>
                        )
                    ))}

                </CFormSelect>

            </CCol>

            <CCol lg={6}>
                <CFormSelect
                    label='Types Of Target'
                    value={TargetValue}
                    onChange={(e) => setTargetValue(e.target.value)}
                >
                    <option >Select Your Target </option>
                    <option >Sales Target</option>
                    <option >Client Target</option>
                    <option >Calls Target</option>
                    <option >Lead Target</option>
                    <option >Renewals</option>
                    <option >Referral Leads</option>
                    <option >Media Target</option>
                </CFormSelect>
            </CCol>

            <CRow>
                <CCol lg={6}>
                    <CFormSelect
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        label='Year'>
                        <option>Select Year</option>
                        <option>{new Date().getFullYear() - 4}</option>
                        <option >{new Date().getFullYear() - 3}</option>
                        <option >{new Date().getFullYear() - 2}</option>
                        <option >{new Date().getFullYear() - 1}</option>
                        <option> {new Date().getFullYear()}</option>

                    </CFormSelect>
                </CCol>

            </CRow>

            <div style={{ overflowY: 'scroll' }} className='mb-3'>
                <CTable className='mt-3' style={{ width: '200%' }}>
                    <CTableHead >
                        <CTableHeaderCell className=' '>Jan</CTableHeaderCell>
                        <CTableHeaderCell className=''>Feb</CTableHeaderCell>
                        <CTableHeaderCell className=''>March</CTableHeaderCell>
                        <CTableHeaderCell className=''>April</CTableHeaderCell>
                        <CTableHeaderCell className=''>May</CTableHeaderCell>
                        <CTableHeaderCell className=''>Jun</CTableHeaderCell>
                        <CTableHeaderCell className=''>July</CTableHeaderCell>
                        <CTableHeaderCell className=''>August</CTableHeaderCell>
                        <CTableHeaderCell className=''>Sep</CTableHeaderCell>
                        <CTableHeaderCell className=''>Oct</CTableHeaderCell>
                        <CTableHeaderCell className=''>Nov</CTableHeaderCell>
                        <CTableHeaderCell className=''>Dec</CTableHeaderCell>
                    </CTableHead>
                    <CTableBody>
                        <CTableRow>
                            <CTableDataCell>
                                <CFormInput type='number' value={monthInput1} onChange={(e) => setMonthIput1(e.target.value)}></CFormInput>
                            </CTableDataCell>
                            <CTableDataCell>
                                <CFormInput type='number' value={monthInput2} onChange={(e) => setMonthIput2(e.target.value)}></CFormInput>
                            </CTableDataCell>
                            <CTableDataCell>
                                <CFormInput type='number' value={monthInput3} onChange={(e) => setMonthIput3(e.target.value)}></CFormInput>
                            </CTableDataCell>
                            <CTableDataCell>
                                <CFormInput type='number' value={monthInput4} onChange={(e) => setMonthIput4(e.target.value)}></CFormInput>
                            </CTableDataCell>
                            <CTableDataCell>
                                <CFormInput type='number' value={monthInput5} onChange={(e) => setMonthIput5(e.target.value)}></CFormInput>
                            </CTableDataCell>
                            <CTableDataCell>
                                <CFormInput type='number' value={monthInput6} onChange={(e) => setMonthIput6(e.target.value)}></CFormInput>
                            </CTableDataCell>
                            <CTableDataCell>
                                <CFormInput type='number' value={monthInput7} onChange={(e) => setMonthIput7(e.target.value)}></CFormInput>
                            </CTableDataCell>
                            <CTableDataCell>
                                <CFormInput type='number' value={monthInput8} onChange={(e) => setMonthIput8(e.target.value)}></CFormInput>
                            </CTableDataCell>
                            <CTableDataCell>
                                <CFormInput type='number' value={monthInput9} onChange={(e) => setMonthIput9(e.target.value)}></CFormInput>
                            </CTableDataCell>
                            <CTableDataCell>
                                <CFormInput type='number' value={monthInput10} onChange={(e) => setMonthIput10(e.target.value)}></CFormInput>
                            </CTableDataCell>
                            <CTableDataCell>
                                <CFormInput type='number' value={monthInput11} onChange={(e) => setMonthIput11(e.target.value)}></CFormInput>
                            </CTableDataCell>
                            <CTableDataCell>
                                <CFormInput type='number' value={monthInput12} onChange={(e) => setMonthIput12(e.target.value)}></CFormInput>
                            </CTableDataCell>
                        </CTableRow>
                    </CTableBody>
                </CTable>
            </div>


            <CCol >
                <CButton onClick={() => saveTargetSheetData()} >Save</CButton>
            </CCol>
        </CForm>
    </CCard>

}

export default EmployeeTargetSetupForm