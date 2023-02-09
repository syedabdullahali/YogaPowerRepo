import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCardTitle,
    CCol,
    CFormInput,
    CFormSwitch,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CForm,
    CFormSelect,
    CCallout,
    CButtonGroup,
    CModal,
    CModalHeader,
    CModalTitle,
    CModalBody,
    CModalFooter


} from "@coreui/react";
import DataTable from "src/components/DataTable";
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';


import React, { useState } from "react";


const PayrollMaster = () =>{

    const [showForm,setForm] = useState(true)
    const [visible, setVisible] = useState(false)

    const header = [

        { heading: 'Sr.No', value: 'id' },
        { heading: 'Name', value: 'id' },
        { heading: 'Joining Date', value: '959414744' },
        { heading: 'EMP ID', value: '155' },
        { heading: 'Gender', value: 'mobile' },
        { heading: 'Location', value: 'service_name' },
        { heading: 'Full/Part Time', value: 'variation_name' },
        { heading: 'Department', value: 'expiry_date' },
        { heading: 'Made of Payment', value: 'renew' },
        { heading: 'Late Mark', value: '0' },
        { heading: 'Leave', value:'' },
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


    return <div>
    <CModal visible={visible} onClose={() => setVisible(false)}>
       <CModalHeader>
        <CModalTitle>Successfully Save   <CIcon icon={icon.cilCheckAlt} size="xl" color="success"/></CModalTitle>
        </CModalHeader> 
    </CModal>

    {showForm?<CCallout color="primary" className="bg-body d-flex justify-content-end">
            <CButton onClick={()=>setForm((value)=>!value)}>Add New Payrol Setup</CButton>
    </CCallout>:

    <CCard className="overflow-hidden"   >
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
          
          <CButton color="success mt-4 px-4" onClick={(()=>{
            setVisible(value=>!value) 
            setForm(value=>!value) 
            })} >Svae</CButton>

         </CForm>
    </div>
    <CCol style={{ backgroundColor: '#0B5345'}} className='p-1'>

    </CCol>
      </CCard>}




      <CCard className="mb-3 border-success mt-4">
                    <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                        <CCardTitle className="mt-2">Payrol Setup </CCardTitle>
                    </CCardHeader>
                    <CCardBody>
                        
                        <DataTable heading={header} data={Users} size={"200%"}  />
                    </CCardBody>
                </CCard>
      </div>
}

export default PayrollMaster;