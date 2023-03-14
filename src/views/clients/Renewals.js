import React, { useEffect, useState } from 'react'
import {
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CFormInput,
    CFormSelect,
    CFormSwitch,
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
import { cilArrowCircleBottom, cilArrowCircleTop } from '@coreui/icons'
import axios from 'axios'
import { MdCall, MdDelete, MdEdit, MdMail } from 'react-icons/md'
import { BsPlusCircle, BsWhatsapp,BsEye } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

//  Invoice Slip
const Invoice  = React.lazy(()=>import('./Invoice'))
const AddInvoiceSlip = React.lazy(()=>import('./AddInvoiceSlip'))


const url = 'https://yog-seven.vercel.app'
const url2 = 'https://yog-seven.vercel.app'

//  rasidArr:[
//   {remainingAmount:0,
//    PaidAmount:0,
//    previous:"InvoiceDate"
//    newSlipDate:'',
//    status:true,
//    afterPayremainingAmount: '',
//    SlipNo:''
//    CashearName:''
//    mobNo:'' 
// }

// ]

const Renewals = () => {

    const url1 = useSelector((el)=>el.domainOfApi) 

    const [select, setSelect] = useState()
  

    const [Search1, setSearch1] = useState('')
    const [Search2, setSearch2] = useState('')
    const [Search3, setSearch3] = useState('')
    const [Search4, setSearch4] = useState('')
    const [Search5, setSearch5] = useState('')
    const [Search6, setSearch6] = useState('')
    const [Search7, setSearch7] = useState('')
    const [Search8, setSearch8] = useState('')
    const [Search9, setSearch9] = useState('')
    const [Search10, setSearch10] = useState('')

    // Invoice
 
    const [allIvoiceOfaUser,setAllInvoiceOfUser] = useState([])
    const [ClientData,setClient] = useState([])


    let user = JSON.parse(localStorage.getItem('user-info'))
    console.log(user);
    const token = user.token;
    const username = user.user.username;
    const centerCode = user.user.centerCode;
    const [result1, setResult1] = useState([]);
    const [invoiceData,setInvoiceData] = useState([])
    console.log(token);
    const [paging, setPaging] = useState(0);
    const [showInvoiceModal,setInvoceModal] = useState(false)
    const [showInvoiceModal2,setInvoceModal2] = useState(false)

    useEffect(() => {
        getEnquiry()
       
    }, []);

 
    

    function getEnquiry() {
        axios.get(`${url1}/memberForm/all
        `, {
            headers: {
                'Authorization': `Bearer ${ token }`
            }
        })
            .then((res) => {
                console.log(res.data, "data new")
                // 4
                setResult1(res.data.filter((list) => list.username === username).reverse())
            })
            .catch((error) => {
                console.error(error)
            })
    }
    const getDate = (date,val) => {

        const date2 = new Date(date).getDate() + "/" + (new Date(date).getMonth() + (val? 1:0)) + "/" + new Date(date).getFullYear()
        if (date2 === 'NaN/NaN/NaN') {
            return 'Invalid Date'
        }
        return date2

    }


    const getEndDate = (date) => {
        const date2 = new Date(date).getDate() + "/" + (new Date(date).getMonth() + 1) + "/" + new Date(date).getFullYear()
        if (date2 === 'NaN/NaN/NaN') {
            return 'Invalid Date'
        }
        return date2

    } 


    function deleteEnquiry(id) {

        if (confirm('Do you want to delete this')) {
            fetch(`${url1}/memberForm/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    "Authorization": `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then((result) => {
                result.json().then((resp) => {
                    console.warn(resp)
                    getEnquiry()
                })
            })
        }
    }

  





    const getInvoiceNoFun =async ()=>{
        const headers = {
                'Authorization': `Bearer ${token}`,
                'My-Custom-Header': 'foobar'
        };
        
          await  axios.get(`${url1}/invoice/all`,{headers}).then(({data})=>{
            setInvoiceData(data)
          })
         }
        
        
        
         useEffect(()=>{
            getInvoiceNoFun()
},[])

let obj = {}

function ShowUserInvoceHandler (id,item){
    const uniqUserInvoiceAllData = invoiceData.filter((el)=>el?.MemberId===id)
    setAllInvoiceOfUser(uniqUserInvoiceAllData)    
    setClient(item)
    setInvoceModal(true)      
    
}



    return (
        <CRow>
            {<AddInvoiceSlip
            setInvoceModal2={setInvoceModal2}
            showInvoiceModal2={showInvoiceModal2}
            allIvoiceOfaUser={allIvoiceOfaUser}
            
            />}
           {<Invoice 
            allIvoiceOfaUser={allIvoiceOfaUser} 
            ClientData={ClientData} setInvoceModal={setInvoceModal}
            showInvoiceModal={showInvoiceModal}
            
            />}
        
           
            <CCol lg={12} sm={12}>
                <CCard className='mb-3 border-top-success border-top-3'>
                    <CCardHeader>
                        <strong className="mt-2">Renewals Clients <span className='float-end'>Total Clients : {result1.filter((list) => list.username === username && status === 'renewals').length}</span></strong>
                    </CCardHeader>
                    <CCardBody>
                        <CRow className='d-flex justify-content-between'>
                            <CCol lg={4} sm={6} md={6}>
                                <CInputGroup className='mb-2'>
                                    <CFormSelect
                                        id="inputGroupSelect04"
                                        aria-label="Example select with button addon"
                                        value={select}
                                        onChange={(e) => setSelect(e.target.value)}
                                    >
                                        <option>Today</option>
                                        <option>Last Week</option>
                                        <option>Last Month</option>
                                        <option>Custom Date</option>
                                    </CFormSelect>
                                    {select === 'Custom Date' && (
                                        <CInputGroup className='mt-2 mb-2' >

                                            <CInputGroupText
                                                component="label"
                                                htmlFor="inputGroupSelect01"
                                            >
                                                Form
                                            </CInputGroupText>
                                            <CFormInput
                                                type="date"
                                                required
                                            /><CInputGroupText
                                                component="label"
                                                htmlFor="inputGroupSelect01"
                                            >
                                                To
                                            </CInputGroupText>
                                            <CFormInput
                                                type="date"
                                                required
                                            />
                                            <CButton type="button" color="primary">
                                                Go
                                            </CButton>
                                        </CInputGroup>

                                    )}
                                    {select !== 'Custom Date' && (
                                        <CButton type="button" color="primary">
                                            Go
                                        </CButton>
                                    )}
                                </CInputGroup>
                            </CCol>
                            <CCol lg={6} sm={6} md={6}>
                                <CButtonGroup className=' mb-2 float-end'>
                                    <CButton color="primary">
                                        <CIcon icon={cilArrowCircleBottom} />
                                        {' '}Import
                                    </CButton>
                                    <CButton color="primary">
                                        <CIcon icon={cilArrowCircleTop} />
                                        {' '}Export
                                    </CButton>
                                </CButtonGroup>
                            </CCol>
                            <CCol xs={3}>
                                <CFormSelect
                                    className="mb-1"
                                    aria-label="Select Service Name"
                                    // value={filterBy}
                                    // onChange={(e) => { setFilterBy(e.target.value); setArr(getUnique(ogList, e.target.value)) }}
                                    label="Filter By"

                                >
                                    <option value=''>Select</option>
                                    <option value='AssignStaff'>Assign Staff </option>
                                    <option value='EnquiryType'>Lead Sources </option>
                                    <option value='MemberManager'>Member Manager </option>
                                    <option value='serviceName'>Services Name </option>
                                    <option value='Customertype'>Customer Type </option>
                                    <option value='Gender'>Gender</option>
                                </CFormSelect>
                            </CCol>
                            <CCol xs={3}>
                                <CFormSelect
                                    className="mb-1"
                                    aria-label="Select Service Name"
                                    // value={subFilter}
                                    // onChange={(e) => { setSubFilter(e.target.value); filterArr(ogList, e.target.value) }}
                                    label="Sub-filter"

                                >
                                    <option value=''>Select</option>
                                    {/* {arr.filter((list) => list[filterBy] != '').map((item, index) => (
                                        item.username === username && (
                                            <option key={index} value={item.id}>{item[filterBy]}</option>
                                        )
                                    ))} */}
                                </CFormSelect>
                            </CCol>
                            <CCol></CCol>
                        </CRow>


                        <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} hover responsive>
                            <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                                <CTableRow >
                                    <CTableHeaderCell>Sr.No</CTableHeaderCell>
                                    <CTableHeaderCell>Member ID</CTableHeaderCell>
                                    <CTableHeaderCell>Name</CTableHeaderCell>
                                    <CTableHeaderCell>Mobile</CTableHeaderCell>
                                    <CTableHeaderCell>Invoice No</CTableHeaderCell>
                                    <CTableHeaderCell>Attendance ID</CTableHeaderCell>
                                    <CTableHeaderCell>Service</CTableHeaderCell>
                                    <CTableHeaderCell>Duration</CTableHeaderCell>
                                    <CTableHeaderCell>Start Date</CTableHeaderCell>
                                    <CTableHeaderCell>End Date</CTableHeaderCell>
                                    <CTableHeaderCell>Fitness Goal</CTableHeaderCell>
                                    <CTableHeaderCell>Appointments</CTableHeaderCell>
                                    <CTableHeaderCell>Type of Call</CTableHeaderCell>
                                    <CTableHeaderCell>Status</CTableHeaderCell>
                                    <CTableHeaderCell>Action</CTableHeaderCell>
                                    <CTableHeaderCell>Invoice</CTableHeaderCell>
                                    <CTableHeaderCell>Edit</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                <CTableRow>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            style={{ minWidth: "60px" }}
                                            type="text"
                                            disabled
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            style={{ minWidth: "120px" }}
                                            type="text"
                                            disabled
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            type="text"
                                            style={{ minWidth: "120px" }}
                                            value={Search1}
                                            onChange={(e) => setSearch1(e.target.value)}
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            type="text"
                                            disabled
                                            style={{ minWidth: "90px" }}
                                            value={Search2}
                                            onChange={(e) => setSearch2(e.target.value)}
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            type="text"
                                            disabled
                                            style={{ minWidth: "120px" }}
                                            value={Search3}
                                            onChange={(e) => setSearch3(e.target.value)}
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            type="text"
                                            style={{ minWidth: "120px" }}
                                            value={Search4}

                                            onChange={(e) => setSearch4(e.target.value)}
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            type="text"
                                            value={Search5}
                                            onChange={(e) => setSearch5(e.target.value)}
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            type="text"
                                            disabled
                                            style={{ minWidth: "80px" }}
                                            value={Search6}
                                            onChange={(e) => setSearch6(e.target.value)}
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            type="text"
                                            disabled
                                            style={{ minWidth: "100px" }}
                                            value={Search7}
                                            onChange={(e) => setSearch7(e.target.value)}
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            type="text"
                                            disabled
                                            style={{ minWidth: "100px" }}
                                            value={Search8}
                                            onChange={(e) => setSearch8(e.target.value)}
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            style={{ minWidth: "100px" }}
                                            type="text"
                                            disabled
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            style={{ minWidth: "100px" }}
                                            type="text"
                                            disabled
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            type="text"
                                            style={{ minWidth: "100px" }}
                                            disabled
                                            value={Search9}
                                            onChange={(e) => setSearch9(e.target.value)}
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            type="text"
                                            value={Search10}
                                            disabled
                                            style={{ minWidth: "100px" }}
                                            onChange={(e) => setSearch10(e.target.value)}
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            style={{ minWidth: "100px" }}
                                            type="text"
                                            disabled
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            style={{ minWidth: "100px" }}
                                            type="text"
                                            disabled
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                </CTableRow>
                                {result1.filter((list) =>{
                                    console.log(list)
        const time =  (new Date(list.endDate) -new Date())
        const days = Math.ceil(time/(1000*60*60*24))
              if((days<=15 && days>=1)){
           
                 return true 
              }
              return false                                                                         
         }

                       
                                                                                                          
                                     ).map((item, index) => (
                                        <CTableRow key={index}>
                                            <CTableDataCell>{index + 1 + (paging * 10)}</CTableDataCell>
                                            <CTableDataCell>{centerCode}MEM{index + 10 + (paging * 10)}</CTableDataCell>
                                            <CTableDataCell><Link index={-1} style={{ textDecoration: 'none' }} 
                                            to={`/clients/member-details/${item._id}/1`} target="_black">{item.Fullname}</Link></CTableDataCell>
                                            <CTableDataCell>{item.ContactNumber}</CTableDataCell>
                                            <CTableDataCell>{item.invoiceNum}</CTableDataCell>
                                            <CTableDataCell>{item.AttendanceID}</CTableDataCell>
                                            <CTableDataCell>{item.serviceName}</CTableDataCell>
                                            <CTableDataCell>{item?.duration}</CTableDataCell>
                                            <CTableDataCell>{ getDate(item.startDate,true)}</CTableDataCell>
                                            <CTableDataCell>{ getEndDate(item.endDate)}</CTableDataCell>
                                            <CTableDataCell>{item.Fitness_Goal}</CTableDataCell>
                                            <CTableDataCell><Link index={-1} style={{ textDecoration: 'none' }}
                                             to={`/clients/member-details/${item._id}/5`} target="_black">
                                                <BsPlusCircle id={item._id} style={{ cursor: 'pointer', markerStart: '10px' }} /></Link></CTableDataCell>
                                            <CTableDataCell><CButton>View</CButton></CTableDataCell>
                                            <CTableDataCell className='text-center'><CFormSwitch checked={item.status} />
                                            </CTableDataCell>

                                    <CTableDataCell className='text-center'><a href={`tel:${item.CountryCode}${item.ContactNumber}`} target='_black'>
                                                <MdCall style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' /></a>
                                                <a target='_black' href={`https://wa.me/${item.ContactNumber}`}>
                                                    <BsWhatsapp style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' /></a>
                                                    <a target='_black' href={`mailto: ${item.Emailaddress}`}>
                                                         <MdMail style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' /></a>
                                     <BsPlusCircle id={item._id} style={{ cursor: 'pointer', markerStart: '10px' }} onClick={() => handleFollowup(item._id)} />
                                     </CTableDataCell>

                                    <CTableDataCell  >
                                    <CButtonGroup className='d-flex px-3' >
                                        <CButton size='sm' color='success' onClick={()=>setInvoceModal2(true)}>
                                             <BsPlusCircle  id={item._id} style={{ cursor: 'pointer', markerStart: '10px' }} />
                                             </CButton>
                                        <CButton  size='sm'
                                         onClick={()=>ShowUserInvoceHandler(item._id,item)} ><BsEye style={{ cursor: 'pointer', markerStart: '10px' }}/></CButton>
                                   </CButtonGroup>  
                                   </CTableDataCell>    

                                            <CTableDataCell className='text-center'><Link index={-1} style={{ textDecoration: 'none' }} 
                                            to={`/clients/member-details/${item._id}/1`} target="_black">
                                                <MdEdit id={item._id} style={{ fontSize: '35px', cursor: 'pointer', markerStart: '10px' }} 
                                                size='20px' /></Link> <MdDelete style={{ cursor: 'pointer', markerStart: '10px' }} 
                                                onClick={() => deleteEnquiry(item._id)} size='20px' /></CTableDataCell>
                                        </CTableRow>

                                    )
                                )}
                            </CTableBody>
                        </CTable>

                    </CCardBody>
                    {/* <CPagination aria-label="Page navigation example" align="center" className='mt-2'>
                        <CPaginationItem aria-label="Previous" disabled={paging != 0 ? false : true} onClick={() => paging > 0 && setPaging(paging - 1)}>
                            <span aria-hidden="true">&laquo;</span>
                        </CPaginationItem>
                        <CPaginationItem active onClick={() => setPaging(0)}>{paging + 1}</CPaginationItem>
                        {result1.filter((list) =>
                            list.username === username && list.status === 'Renewals'

                            && list.Fullname.toLowerCase().includes(Search1.toLowerCase()) &&
                            list.AttendanceID.toLowerCase().includes(Search5.toLowerCase()) && list.serviceName.toLowerCase().includes(Search6.toLowerCase()) && list.fitnessGoal.toLowerCase().includes(Search7.toLowerCase())

                        ).length > (paging + 1) * 10 && <CPaginationItem onClick={() => setPaging(paging + 1)} >{paging + 2}</CPaginationItem>}

                        {result1.filter((list) =>
                            list.username === username && list.status === 'Renewals'

                            && list.Fullname.toLowerCase().includes(Search1.toLowerCase()) &&
                            list.AttendanceID.toLowerCase().includes(Search5.toLowerCase()) && list.serviceName.toLowerCase().includes(Search6.toLowerCase()) && list.fitnessGoal.toLowerCase().includes(Search7.toLowerCase())

                        ).length > (paging + 2) * 10 && <CPaginationItem onClick={() => setPaging(paging + 2)}>{paging + 3}</CPaginationItem>}
                        {result1.filter((list) =>
                            list.username === username && list.status === 'Renewals'

                            && list.Fullname.toLowerCase().includes(Search1.toLowerCase()) &&
                            list.AttendanceID.toLowerCase().includes(Search5.toLowerCase()) && list.serviceName.toLowerCase().includes(Search6.toLowerCase()) && list.fitnessGoal.toLowerCase().includes(Search7.toLowerCase())

                        ).length > (paging + 1) * 10 ?
                            <CPaginationItem aria-label="Next" onClick={() => setPaging(paging + 1)}>
                                <span aria-hidden="true">&raquo;</span>
                            </CPaginationItem>
                            : <CPaginationItem disabled aria-label="Next" onClick={() => setPaging(paging + 1)}>
                                <span aria-hidden="true">&raquo;</span>
                            </CPaginationItem>
                        }
                    </CPagination> */}
                </CCard>
            </CCol >
        </CRow >
    )
}

export default Renewals
