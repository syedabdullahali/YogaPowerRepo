import React from 'react'
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
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilArrowCircleBottom, cilArrowCircleTop, cilPlus } from '@coreui/icons'
import { BsReceipt } from 'react-icons/bs'
import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import {BsEye } from 'react-icons/bs'
import {MdReceiptLong} from 'react-icons/md'


const Invoice = React.lazy(()=>import('../clients/Invoice'))
const ViewRecepits =React.lazy(()=>import('./ViewRecepits'))

const url = 'https://yog-seven.vercel.app'

let user = JSON.parse(localStorage.getItem('user-info'))
    const token = user.token;
    const username = user.user.username;

const Receipt = () => {
    let num  = 0;

    const [AllInvoiceData,setAllInvoiceData] = useState([])
    const [ClientData,setClient] = useState([])
    const [showInvoiceModal,setInvoceModal] = useState(false)
    const [allIvoiceOfaUser,setAllInvoiceOfUser] = useState([])
    const [result1,setResult1] = useState([])
    const [showReceipts,setShowReceipts] = useState(false)
    const [receptsData,setResiptsData] = useState('')
    const [receptsInvoiceData,setReceptsInvoiceData] = useState('')
    const [resiptNo,setResiptNo] = useState(1)

    
    const url1 = useSelector((el)=>el.domainOfApi) 


    const getAllInvoiceData = async ()=>{
        const {data} = await axios.get(`${url1}/invoice/all`,{ 
                  headers: {
                      'Authorization': `Bearer ${token}`
                  }})
          
          setAllInvoiceData(data.reverse())     
                  
  }  


const getDate = (date,val) => {

    const date2 = new Date(date).getDate() + "/" + (new Date(date).getMonth() + (val? 1:0)) + "/" + new Date(date).getFullYear()
    if (date2 === 'NaN/NaN/NaN') {
        return 'Invalid Date'
    }
    return date2

}

function getEnquiry() {
    axios.get(`${url}/memberForm/all`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then((res) => {
           
         setResult1(res.data.filter((list) => list.username === username).reverse())
         getAllInvoiceData()
        })
        .catch((error) => {
            console.error(error)
        })
}

useEffect(()=>{
getEnquiry()
},[])

function ShowUserInvoceHandler (id,item){
    const uniqClientData = result1.filter((el)=>el?.invoiceId===id)
    console.log(uniqClientData)
    setAllInvoiceOfUser([item])    
    setClient(...uniqClientData)
    setInvoceModal(true)      
} 


function ViewReceiptsFun(el,el2,num){
setResiptsData(el2)
setReceptsInvoiceData(el)
setResiptNo(num)
setShowReceipts(true)
}


    return (
        <CRow>

      <Invoice 
            allIvoiceOfaUser={allIvoiceOfaUser} 
            ClientData={ClientData} setInvoceModal={setInvoceModal}
            showInvoiceModal={showInvoiceModal}            
            />  
   
   <ViewRecepits
   showReceipts={showReceipts}
   setShowReceipts={setShowReceipts}
   receptsData={receptsData}
   receptsInvoiceData={receptsInvoiceData}
   resiptNo={resiptNo}
/>
   

            <CCol lg={12} sm={12}>
                <CCard className='mb-3 border-top-success border-top-3'>
                    <CCardHeader>
                        <strong className="mt-2">Receipt</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CRow className='d-flex justify-content-center mb-2'>
                            <CCol lg={3} sm={6} className='mb-2'>
                                <CInputGroup
                                    className='mb-2'
                                >
                                    <CInputGroupText
                                        component="label"
                                        htmlFor="inputGroupSelect01"
                                    >
                                        From
                                    </CInputGroupText>
                                    <CFormInput
                                        type='date'
                                        placeholder="Search"
                                        aria-label="Recipient's username"
                                        aria-describedby="button-addon2"
                                    />
                                </CInputGroup>
                            </CCol>
                            <CCol lg={3} sm={6} className='mb-2'>
                                <CInputGroup className='mb-2'>
                                    <CInputGroupText
                                        component="label"
                                        htmlFor="inputGroupSelect01"
                                    >
                                        To
                                    </CInputGroupText>
                                    <CFormInput
                                        type='date'
                                        placeholder="Search"
                                        aria-label="Recipient's username"
                                        aria-describedby="button-addon2"
                                    />
                                </CInputGroup>
                            </CCol>
                            <CCol lg={5} className='mb-2'>
                                <CButton type="button" color="primary">
                                    Search
                                </CButton>
                            </CCol>
                            <CCol></CCol>
                        </CRow>
                        <CRow >
                            <CCol lg={2} sm={6} className='mb-2'>
                                <CInputGroup>
                                    <CInputGroupText
                                        component="label"
                                        htmlFor="inputGroupSelect01"
                                    >
                                        All
                                    </CInputGroupText>
                                    <CFormSelect id="inputGroupSelect01">
                                        <option>Select</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </CFormSelect>
                                </CInputGroup>
                            </CCol>
                            <CCol lg={3} sm={6} className='mb-2'>
                                <CInputGroup>
                                    <CFormSelect id="inputGroupSelect01">
                                        <option>Service Receipt</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </CFormSelect>
                                </CInputGroup>
                            </CCol>
                            <CCol lg={3} sm={6} className='mb-2'>
                                <CInputGroup>
                                    <CFormSelect id="inputGroupSelect01">
                                        <option>Select Service</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </CFormSelect>
                                </CInputGroup>
                            </CCol>
                            <CCol lg={4} sm={6} className='mb-2' >
                                <CButton color="primary" className='float-end '>
                                    <CIcon icon={cilPlus} />
                                    {' '}New Invoice
                                </CButton>
                            </CCol>
                        </CRow>
                        <CTable bordered style={{ borderColor: "#106103",minWidth:'150%' }} responsive>
                            <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }}>
                                <CTableRow >
                                    <CTableHeaderCell scope="col">Sr No</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Receipt No</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">
                                        Invoice No                                    </CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Client Id</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Client Name</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Service</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Created By</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Paid Amount</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Pay Mode</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">View Invoice</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">View Receipt</CTableHeaderCell>  
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                {AllInvoiceData.flatMap((el,)=>{
                                   return el.Receipts.map((el2,i)=>{
                                    num ++
                                        return <CTableRow>
                                        <CTableDataCell>{num}</CTableDataCell>
                                            <CTableDataCell>{getDate(el2.NewSlipDate,true)}</CTableDataCell>
                                            <CTableDataCell>{el.InvoiceNo +"RN"+ +(1+i)}</CTableDataCell>
                                            <CTableDataCell>{el.InvoiceNo}</CTableDataCell>
                                            <CTableDataCell>{el.MemberId}</CTableDataCell>
                                            <CTableDataCell>{el.MemberName}</CTableDataCell>
                                            <CTableDataCell>{el.ServiceName}</CTableDataCell>
                                            <CTableDataCell>{el2.Counseller}</CTableDataCell>
                                            <CTableDataCell>{el2.PaidAmount}</CTableDataCell>
                                            <CTableDataCell>{el2.Pay_Mode}</CTableDataCell>
                                            <CTableDataCell onClick={()=>ShowUserInvoceHandler(el._id,el)} className='text-center'>
                                                <CButton size='sm'><BsEye/></CButton></CTableDataCell>
                                            <CTableDataCell className='text-center'>
                                                <CButton onClick={()=>ViewReceiptsFun(el,el2,i+1)} size='sm' className='text-white' color='info'><MdReceiptLong/></CButton>
                                            </CTableDataCell>
                                        </CTableRow>
    
                                    })
                                 })}                               
                            </CTableBody>
                        </CTable>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default Receipt;