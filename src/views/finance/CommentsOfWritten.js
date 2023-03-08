import React,{useState,useEffect} from 'react'
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
import axios from 'axios'
import { useSelector } from 'react-redux'


let user = JSON.parse(localStorage.getItem('user-info'))
    const token = user.token;
    const username = user.user.username;

const CommentOfWritten = () => {


    const [AllInvoiceData,setAllInvoiceData] = useState([])
    const url1 = useSelector((el)=>el.domainOfApi) 
    const [serviceName,setServiceName] = useState('')
    const [result, setResult] = useState([]);
    const [pagination, setPagination] = useState(10)
    let num =0




    useEffect(()=>{
        setPagination(10)
        getPackage()
        },[serviceName])


    function getPackage() {
        axios.get(`${url1}/packagemaster`)
            .then((res) => {
                setResult(res.data)
                console.log(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }



    const getAllInvoiceData = async ()=>{
        const {data} = await axios.get(`${url1}/invoice/all`,{ 
                headers: {
                    'Authorization': `Bearer ${token}`
                }})
        
        setAllInvoiceData(data.reverse())     
                
    } 
    useEffect(()=>{
       getAllInvoiceData()
    },[])


    const getDate = (date,val) => {

        const date2 = new Date(date).getDate() + "/" + (new Date(date).getMonth() + (val? 1:0)) + "/" + new Date(date).getFullYear()
        if (date2 === 'NaN/NaN/NaN') {
            return 'Invalid Date'
        }
        return date2

    }

  
console.log(AllInvoiceData)    

    return (
        <CRow>
            <CCol lg={12} sm={12}>
                <CCard className='mb-3 border-top-success border-top-3'>
                    <CCardHeader>
                        <strong className="mt-2">Comments of written off Invoice</strong>
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
                                <CFormSelect id="inputGroupSelect01"
                                     onChange={(e)=>setServiceName(e.target.value)}
                                    >
                                    <option>Select Service</option>
                                        {result.map((item, index) => (
                                            item.username === username && (
                                               item.Status=== true && (
                                                    <option key={index}>{item.Service}</option>                                                  
                                                )
                                            
                                            )))}
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
                        <CTable bordered style={{ borderColor: "#106103" }} responsive>
                            <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }}>
                                <CTableRow>
                                    <CTableHeaderCell scope="col">Sr No</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Client Id</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">
                                        Member Name
                                    </CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Services</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Cancelled By</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Invoice No</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Comments</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                
            {AllInvoiceData.filter((el)=>el.commentsofwrite&&el.status==="cancel").filter((el)=>{
                   if(serviceName){
                    num =0
                    return serviceName=== el.ServiceName
                }
                return el
              }).filter((el, i) => {
                           num++                                    
                  if (pagination - 10 < i + 1 && pagination >= i + 1) {
                        return el
                }

              }).map((el,i)=>
                                <CTableRow>
                                    <CTableDataCell>{num+1+pagination-1}</CTableDataCell>
                                    <CTableDataCell>{getDate(el.createdAt,true)}</CTableDataCell>
                                    <CTableDataCell>{el.MemberId}</CTableDataCell>
                                    <CTableDataCell>{el.MemberName}</CTableDataCell>
                                    <CTableDataCell>{el.ServiceName}</CTableDataCell>
                                    <CTableDataCell>{el.username}</CTableDataCell>
                                    <CTableDataCell>{el.InvoiceNo}</CTableDataCell>
                                    <CTableDataCell>{el.commentsofwrite}</CTableDataCell>
                                </CTableRow>
                                )}                                
                            </CTableBody>
                        </CTable>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default CommentOfWritten;