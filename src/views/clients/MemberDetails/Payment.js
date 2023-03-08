import { CButton, CCardTitle, CCol, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'
import ViewInvoice from 'src/components/ViewInvoice'
const url = 'https://yog-seven.vercel.app'
const url2 = 'https://yog-seven.vercel.app'
import { useSelector } from 'react-redux'



const Payment = ({ id }) => {

    const [viewInvoice, setViewInvoice] = useState(false);

    let user = JSON.parse(localStorage.getItem('user-info'))
    const token = user.token;
    const username = user.user.username;
    const centerCode = user.user.centerCode;
    const [invoiceData, setInvoiceData] = useState([]);
    const [paging, setPaging] = useState(0);
    const url1 = useSelector((el)=>el.domainOfApi) 

    const headers = {
        'Authorization': `Bearer ${token}`,
        'My-Custom-Header': 'foobar'
    };
    useEffect(() => {
        getInvoice()
    }, []);

    function getInvoice() {
        axios.get(`${url1}/invoice/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                setInvoiceData(res.data.reverse())
            })
            .catch((error) => {
                console.error(error)
            })
    }

  

    return (
        <CRow>
            <CCol xs={12}>
                <div className='d-flex justify-content-between mb-2'>
                    <div className='mt-2 ms-2'>
                        <CCardTitle>Payments </CCardTitle>
                    </div>
               
                </div>
            </CCol>
            <CCol xs={12}>
                <div className='d-flex justify-content-between mb-2'>
                    <div className='mt-2 ms-2'>
                    </div>
                    <div className='justify-content-around'>
                        <CButton style={{ margin: '5px' }}>New Invoice</CButton>
                    </div>

                </div>
            </CCol>
            <CCol xs={12}>
                {/* {viewInvoice &&
                    <ViewInvoice add={viewInvoice} clickfun={() => setViewInvoice(false)} invoiceId={invId} clientId={cliId} />
                } */}
                <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} hover responsive>
                    <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                        <CTableRow>
                            <CTableHeaderCell scope="col">Invoice Date</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Member Name</CTableHeaderCell>
                            <CTableHeaderCell scope="col">
                                Invoice No
                            </CTableHeaderCell>
                            <CTableHeaderCell scope="col">Amonut</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Tax</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Paid</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Pending</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Mode</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        {invoiceData.map((item, index) => (
                            <CTableRow key={index}>
                               
                            </CTableRow>
                        ))}
                    </CTableBody>
                </CTable>
            </CCol>
        </CRow>
    )
}

export default Payment