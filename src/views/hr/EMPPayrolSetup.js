import React,{ useState} from 'react'
import {
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardHeader,
    CCardTitle,
    CCol,
    CFormInput,
    CFormSelect,
    CRow,
    CForm,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilArrowCircleTop, cilFile } from '@coreui/icons'
import { FaBeer } from 'react-icons/fa';
import DataTable from 'src/components/DataTable'


const EMPPayrolSetup = () => {

    const [showForm,setForm] = useState(true)

    const header = [

        { heading: 'Sr.No', value: 'id' },
        { heading: 'Name', value: 'id' },
        { heading: 'Joining Date', value: '959414744' },
        { heading: 'EMP ID', value: '155' },
        { heading: 'Gender', value: 'mobile' },
        { heading: 'Location', value: 'service_name' },
        { heading: 'Full/Part Time', value: 'variation_name' },
        { heading: 'Department', value: 'expiry_date' },
        { heading: 'Made of Payment', btn: 'renew' },
        { heading: 'Late Mark', btn: '0' },
        { heading: 'Leave', iconBtn:'' },
        { heading: 'TWD',value:''},
        { heading:'TPD',value:''},
        { heading:'Basic Salary',value:''},
        { heading:'Incentive',value:''},
        { heading:'Gross Salary',value:''},
        { heading:'PT',value:''},
        { heading:'Adev Dec',value:''},
        { heading:'Net Salary Remark',value:''},
        { heading:'Remark',value:''}
    ]

    const Users = [
        {
            id: 1,
            date_time: "25-08-2022 03:00 PM",
            member_name: "Nayana Nagrecha",
            mobile: "9136123476",
            service_name: "Yoga",
            variation_name: "3 Months",
            expiry_date: "31-08-2022",
            sales_rep: "Sejal Ganatra",
            pt_trainer: "-",
            trainer: "Prabha Yadav",
            staff_name: "Sejal Ganatra",
        },
        {
            id: 2,
            date_time: "25-08-2022 03:00 PM",
            member_name: "Nayana Nagrecha",
            mobile: "9136123476",
            service_name: "Yoga",
            variation_name: "3 Months",
            expiry_date: "31-08-2022",
            sales_rep: "Sejal Ganatra",
            pt_trainer: "-",
            trainer: "Prabha Yadav",
            staff_name: "Sejal Ganatra",
        },
    ];


    return (
        <CRow>
            <CCol lg={12} sm={12}>
                <CCard className="mb-3 border-success">
                    <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                        <CCardTitle className="mt-2">Payrol </CCardTitle>
                    </CCardHeader>
                    <CCardBody>
                        <CRow className='d-flex mb-2'>
                            <CCol lg={3} sm={6} className='mb-2'>
                                <CFormSelect
                                    id="inputGroupSelect04"
                                    aria-label="Example select with button addon"
                                >
                                    <option>Name</option>
                                    <option value="1">Location</option>
                                    <option value="3">Mobile</option>
                                    <option value="3">Email</option>
                                    <option value="2">Department</option>
                                    <option value="2">Desgantion</option>
                                </CFormSelect>
                            </CCol>

                            <CCol lg={3} sm={6} className='mb-2'>
                                <CFormInput
                                    type='date'
                                    placeholder="Search"
                                    aria-label="Recipient's username"
                                    aria-describedby="button-addon2"
                                />
                              
                            </CCol>
                            <CCol lg={4} sm={6} className='mb-2' >
                                <CButtonGroup className='float-end'>
                                    <CButton color="primary">
                                        <CIcon icon={cilArrowCircleTop} />
                                        {' '}Export
                                    </CButton>
                                    <CButton color="primary">
                                        <CIcon icon={cilArrowCircleTop} />
                                        {' '}Import
                                    </CButton>
                                </CButtonGroup>
                            </CCol>
                        </CRow>

{showForm?<CCol color="primary" className="bg-body d-flex justify-content-end my-4">
        <CButton onClick={()=>setForm((value)=>!value)}>Add New </CButton>
</CCol>:

<CCard className="overflow-hidden my-4"   >
        <CCardHeader className="p-4" style={{ backgroundColor: '#0B5345', color: 'white' }}>
                 <CCardTitle> <h4>Payrol Setup</h4></CCardTitle>
        </CCardHeader>
    <div className="p-4">
         <CForm>
            <CCol className="d-flex justify-content-end">
                <CButton color='danger' onClick={()=>setForm(()=>true)}>Close</CButton>
            </CCol>
            <CRow>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  placeholder="Enter Your Name"
                  label='Name'
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="date"
                  placeholder="Enter Your Name"
                  label='Joining Date'
                />
              </CCol>
            </CRow> 
            <CRow >
              <CCol md={6}>
              <CFormSelect
                  label='Select Your Gender'
                  options={[
                    { label: 'Male', value: 'Male' },
                    { label: 'Female', value: 'Female' }

                  ]}
              />
             
              </CCol>
            <CCol md={6}>
              <CFormInput
              label='Location'
              placeholder="Enter Your Location"
              />
            </CCol>

            </CRow>    

            <CRow>
              <CCol md={6}>
              <CFormSelect
                  label='Full/Part Time'
                  options={[
                    { label: 'Ful Time', value: 'Ful Time' },
                    { label: 'Part Time', value: 'Part Time' }
                  ]}
              />
                </CCol>   
                <CCol md={6}>
              <CFormSelect
                  label='Department'
                  options={[
                   "Select Dpartment"
                  ]}
              />
                </CCol>    
            </CRow>

            <CRow>
              <CCol md={6}>
              <CFormInput
                  label='Made of Payment'
                  type="number"
                  
              />
                </CCol>
                <CCol md={6}>
              <CFormInput
                  label='Late Mark'
                  type="number"
                  
              />
                </CCol>
            </CRow>
            <CRow>
              <CCol md={6}>
              <CFormInput
                  label='TWD'
                  type="text"
                  
              />
                </CCol>
                <CCol md={6}>
              <CFormInput
                  label='TPD'
                  type="text"
                  
              />
                </CCol>
            </CRow>

            <CRow>
              <CCol md={6}>
              <CFormInput
                  label='Basic Salary'
                  type="text"
                  
              />
                </CCol>
                <CCol md={6}>
              <CFormInput
                  label='Incentive'
                  type="text"
                  
              />
                </CCol>
            </CRow>
            <CRow>
              <CCol md={6}>
              <CFormInput
                  label='Gross Salary'
                  type="number"
                  
              />
                </CCol>
                <CCol md={6}>
              <CFormInput
                  label='PT'
                  type="text"
                  
              />
                </CCol>
            </CRow>
            <CRow>
              <CCol md={6}>
              <CFormInput
                  label='Adev Dec'
                  type="number"
                  
              />
                </CCol>
                <CCol md={6}>
              <CFormInput
                  label='Net Salary Remark'
                  type="number"
                  
              />
                </CCol>
            </CRow>
            <CRow>
              <CCol md={6}>
              <CFormInput
                  label='Remark'
                  type="number"
                  
              />
                </CCol>
              
            </CRow>
          
          <CButton color="primary mt-4 px-4" onClick={(()=>{
            setVisible(value=>!value) 
            setForm(value=>!value) 
            })} >Save</CButton>

         </CForm>
    </div>
    <CCol style={{ backgroundColor: '#0B5345'}} className='p-1'>

    </CCol>
      </CCard>}



                        <DataTable  heading={header} data={Users} />
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default EMPPayrolSetup
