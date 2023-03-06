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
    CPagination,
    CPaginationItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilArrowCircleBottom, cilArrowCircleTop, cilPlus } from '@coreui/icons'
import {BsEye } from 'react-icons/bs'

import { useSelector } from "react-redux";
import {useEffect, useState} from 'react'
import axios from 'axios'
import { MdDelete } from 'react-icons/md';
import YogaSpinnar from '../theme/YogaSpinnar';
import {Link} from 'react-router-dom'
const Invoice = React.lazy(()=>import('../clients/Invoice'))



const url = 'https://yog-seven.vercel.app'
let user = JSON.parse(localStorage.getItem('user-info'))
    console.log(user);
    const token = user.token;
    const username = user.user.username;


const TotalInvoice = () => {

    let num =0
    const [AllInvoiceData,setAllInvoiceData] = useState([])
    const [allIvoiceOfaUser,setAllInvoiceOfUser] = useState([])
    const [ClientData,setClient] = useState([])
    const [showInvoiceModal,setInvoceModal] = useState(false)

    const [pagination, setPagination] = useState(10)
    const [result, setResult] = useState([]);
    const [serviceName,setServiceName] = useState('')
    const [result1,setResult1] = useState([])
    const url1 = useSelector((el)=>el.domainOfApi) 



    const getAllInvoiceData = async ()=>{
        const {data} = await axios.get(`${url1}/invoice/all`,{ 
                headers: {
                    'Authorization': `Bearer ${token}`
                }})
        
        setAllInvoiceData(data.reverse())     
                
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

    function getPackage() {
        axios.get(`${url1}/packagemaster`, {
    
        })
            .then((res) => {
                setResult(res.data)
                console.log(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }


    function getMemId(id){
    return  result1.find((el)=>el.invoiceId ===id)?.AttendanceID    
    }
    
    useEffect(()=>{
        getPackage()
        getEnquiry()
    },[])
    
    useEffect(()=>{
    setPagination(10)
    },[serviceName])

    console.log(AllInvoiceData)

    
    const getDate = (date,val) => {

        const date2 = new Date(date).getDate() + "/" + (new Date(date).getMonth() + (val? 1:0)) + "/" + new Date(date).getFullYear()
        if (date2 === 'NaN/NaN/NaN') {
            return 'Invalid Date'
        }
        return date2

    }

    function ShowUserInvoceHandler (id,item){
        const uniqClientData = result1.filter((el)=>el?.invoiceId===id)
        console.log(uniqClientData)
        setAllInvoiceOfUser([item])    
        setClient(...uniqClientData)
        setInvoceModal(true)      
    } 

 async function DeleteInvoice (id){
    if(!confirm('Do you want to delete'))return

    axios.delete(`${url1}/invoice/delete/${id}`,{ 
        headers: {
            "Authorization": `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }}).then((res)=>{
            
        getEnquiry()    
     })   

  }


 async function  StatusOpration(value,id){
 const status = value
   
    axios.post(`${url1}/invoice/update/${id}`,{status:status},{ 
        headers: {
            "Authorization": `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }}).then((res)=>{
            
        getEnquiry()    
     })   

 }   


    console.log(result1)
    useEffect(()=>{
        setPagination(10)
    },[serviceName])

    return (
        <CRow>
            <Invoice 
            allIvoiceOfaUser={allIvoiceOfaUser} 
            ClientData={ClientData} setInvoceModal={setInvoceModal}
            showInvoiceModal={showInvoiceModal}            
            />
            <CCol lg={12} sm={12}>
                <CCard className='mb-3 border-top-success border-top-3'>
                    <CCardHeader className='d-flex justify-content-between'>
                        <strong className="mt-2">Total Invoice</strong>
                        <strong className="mt-2" > Total Invoice :{AllInvoiceData.length}</strong>
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
                                                    <option key={index}>{item.Service }</option>                                                  
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
                                    <CTableHeaderCell scope="col">Invoice Date</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Center Code </CTableHeaderCell>
                                    <CTableHeaderCell scope="col">
                                        Client Id
                                    </CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Client Name</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Invoice No</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Services</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Service Duration</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Start Date</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">End Date</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Counseller</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Trainer</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Created By</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Package Amount</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Discount</CTableHeaderCell> 
                                    <CTableHeaderCell scope="col">Tax</CTableHeaderCell>                                   
                                    <CTableHeaderCell scope="col">Total Invoice Amount</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Paid</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Balance</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Pay Mode</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Invoice</CTableHeaderCell>
                                    <CTableHeaderCell scope="col"> Cancel Invoice</CTableHeaderCell>
                                    <CTableHeaderCell scope="col"> Delete</CTableHeaderCell>

                                    {/* <CTableHeaderCell scope="col">Renewls Revenue</CTableHeaderCell> */}
                                    {/* <CTableHeaderCell scope="col">
                                        Balance Collection
                                    </CTableHeaderCell>
                                    <CTableHeaderCell scope="col">View</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Achived %</CTableHeaderCell> */}
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                {AllInvoiceData.filter((el)=>{
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

              }).map((el,i)=>{
                                    return <CTableRow>
                                   <CTableDataCell>{i + 1 + pagination - 10}</CTableDataCell>
                                    <CTableDataCell>{getDate(el.createdAt,true)}</CTableDataCell>
                                    <CTableDataCell>{el.centerName}</CTableDataCell>
                                    <CTableDataCell>{getMemId(el._id)}</CTableDataCell>
<CTableDataCell><Link index={-1} style={{ textDecoration: 'none' }} to={`/clients/member-details/${el.MemberId}/1`} target="_black">{el.MemberName}</Link></CTableDataCell>

                                    <CTableDataCell>{el.InvoiceNo}</CTableDataCell>
                                    <CTableDataCell>{el.ServiceName}</CTableDataCell>
                                    <CTableDataCell>{el.duration}</CTableDataCell>
                                    <CTableDataCell>{getDate(el.startDate,true)}</CTableDataCell>
                                    <CTableDataCell>{getDate(el.endDate,true)}</CTableDataCell>
                                    <CTableDataCell>{el.counseller}</CTableDataCell>
                                    <CTableDataCell>{el.trainer}</CTableDataCell>
                                    <CTableDataCell>{el.counseller}</CTableDataCell>
                                    <CTableDataCell>{el.fees}</CTableDataCell>
                                    <CTableDataCell>{el.discount}</CTableDataCell>
                                    <CTableDataCell>{el.tax}</CTableDataCell>
                                    <CTableDataCell>{el.amount}</CTableDataCell>
                                    <CTableDataCell>{el.paidAmount}</CTableDataCell>
                                    <CTableDataCell>{el.pendingAmount}</CTableDataCell>
                                    <CTableDataCell>{el.paymode}</CTableDataCell>
                                    <CTableDataCell>{
                                        <CButton size='sm' onClick={()=>ShowUserInvoceHandler(el._id,el)}>
                                            <BsEye />
                                      </CButton>}</CTableDataCell>
                                    <CTableDataCell>
                                        {el.status==='cancel'&&<CButton color='danger' size='sm'  onClick={()=>StatusOpration('active',el._id)} >Cancel</CButton>  }
                                        {el.status==='active'&& <CButton color='warning' size='sm' onClick={()=>StatusOpration('done',el._id)}>Panding..</CButton> }
                                        {el.status==='done'&&<CButton color='success' size='sm' onClick={()=>StatusOpration('cancel',el._id)} >Done</CButton>  }                                        
                                        </CTableDataCell>  
                                    <CTableDataCell className='text-center' style={{cursor:'pointer'}} >{
                                      <CButton size='sm' color='danger'
                                      onClick={()=>DeleteInvoice(el._id)}
                                      ><MdDelete/></CButton>  
                                        }</CTableDataCell>

                                </CTableRow>
                            })}
                           
                            </CTableBody>
                        </CTable>
                    </CCardBody>
                    {!AllInvoiceData[0] ?
                                <CCol style={{ width: '100%' }} className='d-flex justify-content-center my-3'>
                                    <YogaSpinnar />
                         </CCol> : ''}
                </CCard>
            </CCol>

   <div className='d-flex justify-content-center mt-3' >
                        <CPagination aria-label="Page navigation example" style={{cursor:'pointer'}}>
                            <CPaginationItem aria-label="Previous" onClick={() => setPagination((val) => val > 10 ? val - 10 : 10)}>
                                <span aria-hidden="true" >&laquo;</span>
                            </CPaginationItem>
                            <CPaginationItem active >{pagination / 10}</CPaginationItem>
                            {num > pagination / 10 * 10 && <CPaginationItem onClick={() => setPagination((val) => val < num ? val + 10 : val)}>{pagination / 10 + 1}</CPaginationItem>}
                            {num > pagination / 10 * 20 && <CPaginationItem onClick={() => setPagination((val) => val < num ? val + 10 : val)}>{pagination / 10 + 2}</CPaginationItem>}
                            <CPaginationItem aria-label="Next" onClick={() => setPagination((val) => val < num ? val + 10 : val)}>
                                <span aria-hidden="true">&raquo;</span>
                            </CPaginationItem>
                        </CPagination>
      </div>
        </CRow>
    )
}

export default TotalInvoice;