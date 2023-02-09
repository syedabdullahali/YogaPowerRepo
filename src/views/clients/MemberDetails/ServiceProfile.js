import { CButton, CCard, CCardTitle, CCol, CFormSelect, CImage, CRow,CTable,CTableHead,CTableHeaderCell,CTableBody,CTableRow,CTableDataCell } from '@coreui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProfileIcon from 'src/assets/images/avatars/profile_icon.png'
const url = 'https://yog-seven.vercel.app'
const url2 = 'https://yog-seven.vercel.app'

const ServiceProfile = ({ id }) => {
    console.log(id)
    const [result, setResult] = useState()
    const [active,setActive] = useState(false)

    let user = JSON.parse(localStorage.getItem('user-info'))
    console.log(user);
    const token = user.token;
    const username = user.user.username;
    const centerCode = user.user.centerCode;

    useEffect(() => {
        getDetails(id)
    }, [])

    function getDetails(id) {
        const headers = {
            'Authorization': `Bearer ${token}`,
            'My-Custom-Header': 'foobar'
        };
  const data = axios.get(`${url}/invoice/${id}`, { headers })

  
data.then((resp)=>{
    console.log(resp.data)
});
            
        data.then((resp) => {
                setResult(resp.data.filter((list) => list.MemberId === id))
                // console.log(resp.data.filter((list) => list.MemberId === id))
            })
            .catch((error) => {
                // console.error(error)
            })


    }
    return (
        <CRow>
            <CCol xs={12}>
                <div className='d-flex justify-content-between mb-2'>
                    <div className='mt-2 ms-2'>
                        <CCardTitle>Service {result?.MemberName}</CCardTitle>
                    </div>
                    
                </div>
            </CCol>
             
            <CCol xs={3} lg={3} sm={3}>
                <CImage className="mb-1" style={{ borderRadius: "20px" }} width={'200px'} src={ProfileIcon} />
            </CCol>
             
            <CCol xs={3} lg={3} sm={3}>
                      <p >Member Id: {result?.centerName}</p>
                      <p>Attendance ID : {result?.AttendanceID}</p>
                      <p>Packeges : </p>
                      <p>Total Loyalty Points</p>
                      <CButton size='sm'>Add/View Loyalty Points</CButton>

            </CCol>

            <CCol xs={3} lg={3} sm={3}>
                     <p>Membership status</p>
                     <p>Start From</p>
                     <p>Packeges Amount</p>
                     <p>Referrals (0)</p>
                     <p>No of Shop Item: 0</p>
            </CCol>
                     
            <CCol xs={3} lg={3} sm={3}>
        
                     <p>Status : {result?.status}</p>
                     <p>25-11-2022</p>
                     <p>Total Pending payment :0</p>
                     <p>Referral value:0</p>
                     <p>Shop Value: 0</p>

            </CCol>
         


              
            {/* <CCol xs={9} lg={9} sm={9}>
                <CRow>
                    <CCol xs={4} lg={4} sm={4}>{result?.status}</CCol>
                    <CCol xs={4} lg={4} sm={4}>Relationship since</CCol>
                    <CCol xs={4} lg={4} sm={4}>Total Bookings (1)</CCol>
                    <CCol xs={4} lg={4} sm={4}>Total Booking value : {result?.amount}</CCol>
                    <CCol xs={4} lg={4} sm={4}>Total Referrals (0)</CCol>
                    <CCol xs={4} lg={4} sm={4}>0</CCol>
                    <CCol xs={4} lg={4} sm={4}>Total Product purchased : 0</CCol>
                    <CCol xs={4} lg={4} sm={4}>Total Product value : 0</CCol>
            

                </CRow>
            </CCol> */}

            



            <CCol xs={12} className='mt-4'>
                <CRow >
                    <CCol xs={2}>
                        <CButton className='ml-1' size='sm' color='dark'  >Resync To Device</CButton></CCol>
                    <CCol xs={2}>
                        <CButton className='ml-1'  size='sm' color='dark' >Delete Member</CButton></CCol>
                    <CCol xs={2}>
                        <CFormSelect 
                            aria-label="Select Currency"
                            size='sm'
                        >
                            <option>Select</option>
                        </CFormSelect>
                        
                        </CCol>
                    <CCol xs={2}>
                        <CButton className='ml-1' color='dark'  size='sm'>Add Fingerprint</CButton>
                    </CCol>

                </CRow>
            </CCol>
            <CCol  className='mt-4'>
          

                <div style={{overflowX:'scroll',boxSizing:'border-box'}} >
    
    <CTable  >
         <CTableHead >
            <CTableHeaderCell className='p-3'>Singal  Center Membership</CTableHeaderCell>
            <CTableHeaderCell className='p-3'>Multiple Center Membership</CTableHeaderCell>
            <CTableHeaderCell className='p-3'>Postpaid Membership</CTableHeaderCell>
      
         </CTableHead>
         <CTableBody>
           <CTableRow className='text-center'>
               <CTableDataCell>Only one Center Services</CTableDataCell>
               <CTableDataCell>Multiclub Access Services</CTableDataCell>
               <CTableDataCell>Postpaid Services</CTableDataCell>
           </CTableRow>
         </CTableBody>
    </CTable>
    </div>
            </CCol>

            <CCol xs={12}>
                <CCard style={{ padding: '15px' }} className='mt-2'>
                    <CRow>
                         <CCol className='d-flex '>

                        <CCol>
                            <b>Service Id</b> : <br/> 2068115
                        </CCol>
                        <CCol>
                            <b>Service Name</b> :<br/>
                             Yoga {result?.ServiceName}
                        </CCol>
                        <CCol>
                            <b>Duration:</b><br/> {result?.PackageName}
                        </CCol>
                        <CCol>
                             <b>Packages:</b> <br/>3 days a week
                        </CCol>
                        </CCol>

                        <CCol className='d-flex '>
                       
                        <CCol>
                             <b>TOTAL DAYS</b> <br/>12 days
                        </CCol>
                        <CCol>
                              <b>START DATE</b> <br/>01/02/2022
                        </CCol>
                        <CCol>
                              <b>EXPIRY DATE</b> <br/>30/03/22
                        </CCol>
                        <CCol>
                              <b>Status </b><br/>active
                        </CCol>  
                        </CCol>    
  
                        
 
                    </CRow>
                    <CRow>
                        {/* <CCol>Duration: {result?.PackageName}</CCol> */}
                    </CRow>
                    {/* <CRow><CCol>PT Staff: {result?.counseller}</CCol></CRow>
                    <CRow><CCol>Sessions : Not Applicable</CCol></CRow> */}
                    <CRow>
                        {/* <CCol>Status : {result?.status}</CCol> */}
                        {/* <CCol>Last visited on : - <CButton>Attendance</CButton></CCol> */}
                        <CCol></CCol>
                    </CRow>
                    <CRow>
                        {/* <CCol>

                            <div className='d-flex justify-content-between mb-2'>
                                <div className='justify-content-around'>
                                    <CButton style={{ margin: '5px' }}>Upgrade</CButton>
                                    <CButton style={{ margin: '5px' }}>Suspend</CButton>
                                    <CButton style={{ margin: '5px' }}>Staff Update</CButton>
                                    <CButton style={{ margin: '5px' }}>Add Appointment</CButton>
                                    <CButton style={{ margin: '5px' }}>Cancel/Refund</CButton>
                                </div>
                            </div>
                        </CCol> */}
                    </CRow>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default ServiceProfile