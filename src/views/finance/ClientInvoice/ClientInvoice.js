import {
    CCard,
    CCol, 
    CImage,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from "@coreui/react";
import logo from 'src/assets/images/avatars/icon.png'


function ClientInvoice({Fullname,ContactNumber,AttendanceID,Email,datetime,ser5}){



return <CCard className="p-4">
<CRow>
<CCol lg={12} className='text-center'><CImage src={logo} width="100px" height='100px' /></CCol>
<CCol lg={12} className='text-center mt-2'><h5>Yog Power International    </h5></CCol>
<CCol className='mt-2' style={{ marginLeft: '10px' }}>
    <h6>Client Name: {Fullname}</h6>
    <div>Client Number: {ContactNumber}</div>
    Customer ID : {AttendanceID}<br />
    Email-Id : {Email}<br />
</CCol>
<CCol className='mt-2' style={{ marginRight: '30px' }}>
    <div className='float-end'>
        Date : {datetime}<br />
        {/* Invoice No : {centerCode}INV{result1.length} <br /> */}
        Counseller : {ser5}
    </div>
</CCol>
<CCol lg={12} className='text-center mt-2'><h4>Invoice</h4></CCol>
</CRow>

<CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} responsive>
<CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
    <CTableRow >
        <CTableHeaderCell>Sr.No</CTableHeaderCell>
        <CTableHeaderCell>DESCRIPTION</CTableHeaderCell>
        <CTableHeaderCell>DURATION</CTableHeaderCell>
        <CTableHeaderCell>SERVICE FEE</CTableHeaderCell>
    </CTableRow>
</CTableHead>
<CTableBody>
    <CTableRow>
        <CTableDataCell>1</CTableDataCell>
        <CTableDataCell>
            <CRow>
                <CCol lg={6}>
                    <div style={{ fontWeight: 'bold' }}>Service Name: </div>
                </CCol>
                <CCol lg={6}>
                    <div style={{ fontWeight: 'bold' }}>Service Variation: </div>
                </CCol>
                <CCol lg={12}>
                    <div style={{ fontWeight: 'bold' }}>Package : </div>
                </CCol>
            </CRow>
            <CRow>
                <CCol>
                    <div>Start Date: </div>
                </CCol>
                <CCol>
                    <div >End Date: </div>
                </CCol>
            </CRow>

        </CTableDataCell>
        <CTableDataCell>
            <div style={{ fontWeight: 'bold' }}></div>

        </CTableDataCell>
        <CTableDataCell>
            <div style={{ fontWeight: 'bold' }}></div>
        </CTableDataCell>
    </CTableRow>

    <CTableRow>
        <CTableDataCell colSpan={2}></CTableDataCell>
        <CTableDataCell colSpan={2}>
            <CTable bordered style={{ margin: '0', padding: '0' }} responsive>
                <CTableBody>
                    <CTableRow>
                        <CTableDataCell>Sub Total</CTableDataCell>
                        <CTableDataCell>
                            <div style={{ fontWeight: 'bold' }}></div>

                        </CTableDataCell>
                    </CTableRow>

                    <CTableRow>
                        <CTableDataCell>

                            Discount

                        </CTableDataCell>
                        <CTableDataCell>
                            <div style={{ fontWeight: 'bold' }}></div>
                        </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableDataCell>
                            Tax
                        </CTableDataCell>
                        <CTableDataCell className="mt-2">
                            <div style={{ fontWeight: 'bold' }}></div>
                        </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableDataCell>Total Amount</CTableDataCell>
                        <CTableDataCell>
                            <div style={{ fontWeight: 'bold' }}></div>

                        </CTableDataCell>
                    </CTableRow>

                    <CTableRow>
                        <CTableDataCell>Paid Amount</CTableDataCell>
                        <CTableDataCell>
                            <div style={{ fontWeight: 'bold' }}></div>

                        </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableDataCell>Balance Amount</CTableDataCell>
                        <CTableDataCell>
                            <div style={{ fontWeight: 'bold' }}></div>
                        </CTableDataCell>
                    </CTableRow>

                    <CTableRow>
                        <CTableDataCell>Mode of Payment</CTableDataCell>

                        <CTableDataCell>
                            <div style={{ fontWeight: 'bold' }}></div>

                        </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                    </CTableRow>
                </CTableBody>
            </CTable>
        </CTableDataCell>
    </CTableRow>
    <CTableRow>
        <CTableDataCell colSpan={3}>Total</CTableDataCell>
        <CTableDataCell>
            <div style={{ fontWeight: 'bold' }}></div>
        </CTableDataCell>
    </CTableRow>
    <CTableRow style={{ backgroundColor: "#0B5345", color: "white" }}>
        <CTableDataCell colSpan={4}>
            <h5>TERMS AND CONDITIONS</h5>
        </CTableDataCell>
    </CTableRow>
    <CTableRow>
        <CTableDataCell colSpan={4}>
            <div>Fee once paid is not refundable, Non transferable & no package extension, lapsed sessions has to be adjusted within the expiry date. Instructors & timings are subject to change. All packages would be on hourly basis in a day. If a person wishes to workout more than an hour in a day, kindly upgrade your package accordingly. follow guidelines for better result</div>
        </CTableDataCell>
    </CTableRow>

    <CTableRow>
        <CTableDataCell colSpan={4}>
            <div style={{ fontWeight: 'bold' }}>Address: Shop 24/25, 2nd Floor, V Mall, Thakur Complex, Kandivali East, Mumbai 400 101. India.</div>
            <label style={{ fontWeight: 'bold' }}>Email: info@yogpowerint.com</label>
            <label style={{ fontWeight: 'bold', marginLeft: '10px' }}>Phone: +91 9819 1232 91</label>
            <div style={{ fontWeight: 'bold' }}>Website: https://yogpowerint.com</div>
        </CTableDataCell>
    </CTableRow>
</CTableBody>
</CTable>

</CCard>

}



export default ClientInvoice