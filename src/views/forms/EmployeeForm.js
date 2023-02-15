import { CButton, CCard, CCardBody, CCardHeader, CCardTitle, CCol, CForm, CFormInput, CFormSelect, CFormTextarea, CImage, CRow } from '@coreui/react'
import { async } from '@firebase/util'
import axios from 'axios'
import { ref, uploadBytes } from 'firebase/storage'
import React, { useEffect, useRef, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import ProfileIcon from 'src/assets/images/avatars/profile_icon.png'
import { storage } from 'src/firebase'
import { v4 } from 'uuid'   


const EmployeeForm = ({showEmpRecrumentFormFun,token,userdata,data}) => {

    const [dateOfBirth, setDateOfBirth] = useState('')
    const [Anniversary, setAnniversary] = useState('')
    const [joiningDate, setJoiningDate] = useState('')
    const [empCategory, setEmpCategory] = useState('')
    const [EmployeeID, setEmployeeID] = useState('')
    const [AttendanceID, setAttendanceID] = useState('')
    const [accountNo, setAccountNo] = useState('')
    const [IFSCCode, setIFSCCode] = useState('')
    const [PANNo, setPANNo] = useState('')
    const [aadharNo, setAadharNo] = useState('')
    const [validation ,setFormValidation] = useState(true)

var bodyElement = document.body

const  formRenderParentObjeact = {  
        background:'rgb(0,0,0,0.1)',
        position:'absolute',
        top:'0',
        left:'0',
        botom:'0',
        right:'0'        ,
        height:bodyElement.offsetHeight, 
        width:bodyElement.offsetWidth,
        zIndex:'10000',
}
const toggaleModel=(e)=>{
    if(e.target.className==='card Parent'){
        showEmpRecrumentFormFun()
}
}
 
const url = 'https://yog-seven.vercel.app'


const getEmployeeDataFun =  ()=>{

    if (dateOfBirth !== '' && Anniversary !== ''  &&  joiningDate !== '' && empCategory !== '' && EmployeeID !== '' 
     && AttendanceID !== '' && accountNo !== ''  && IFSCCode !== '' && aadharNo !== '' &&PANNo !== '') {
            let Step2data = {
                DateOfBirth:dateOfBirth,
                Anniversary: Anniversary,
                joiningDate: joiningDate,                
                EmployeeCategory: empCategory, 
                EmployeeID: EmployeeID,
                AttendanceID: AttendanceID, 
                AccountNo: accountNo,
                IFSC: IFSCCode,
                AdharNumber:aadharNo,
                PANCardNumber:PANNo
            }

 const FilterData = data.filter((el)=>el._id === userdata._id)
 const dataWithSelectedData =  data.map((el)=>{
        if(el._id === userdata._id){
            Step2data.selected = "Select"
            return {...FilterData[0],...Step2data}
        }
        return el
})    
 
console.log(dataWithSelectedData)


const sendDatawithSlectedData = async ()=>{
fetch(`${url}/employeeForm/update/${userdata._id}`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataWithSelectedData)
    }).then((res)=>{
     console.log(res)
    })
}

sendDatawithSlectedData()
setFormValidation(true)
showEmpRecrumentFormFun()
 }else{
     setFormValidation(false)
 }    
}




return<CCard style={formRenderParentObjeact} className='Parent' onClick={toggaleModel}>
     <CCard style={ {width:'90%',margin:'5% auto',background:'rgb(255,255,255)'}}>
     <CCard color={'success'} style={{ padding: '10px', color: '#ffffff', width: '100px', margin: '15px', cursor: 'pointer' }}>
        Step-2
      </CCard> 
      
      
      <CButton color="danger" className='Parent' onClick={toggaleModel}>Close</CButton>
      {validation || <p style={{color:'red',fontSize:'17px',margin:'0 25px',}}>Please Fill All Details </p>}


      <CCard>r

                          

                                         <CCardHeader>
                        <CCardTitle>Employee Application</CCardTitle>
                    </CCardHeader>
                    <CCardBody>
                     <CForm>
                           <CCol lg={12} sm={12}>
                                     <CRow>
                                          <CCol xs={6}>
                                             <CFormInput
                                                 className="mb-1"
                                                 type="date"
                                                 id="exampleFormControlInput1"
                                                 value={dateOfBirth}
                                                 onChange={(e) => setDateOfBirth(e.target.value)}
                                                 label="Date of Birth"
                                                 placeholder="Enter date"
                                             />
                                         </CCol> 
                                          <CCol xs={6}>
                                             <CFormInput
                                                 className="mb-1"
                                                 type="date"
                                                 id="exampleFormControlInput1"
                                                 value={Anniversary}
                                                 onChange={(e) => setAnniversary(e.target.value)}
                                                 label="Anniversary"
                                                 placeholder="Enter Anniversary"
                                             />
                                         </CCol> 
                                         
                                           <CCol xs={6}>
                                            <CFormInput
                                                className="mb-1"
                                                type="date"
                                                value={joiningDate}
                                                onChange={(e) => setJoiningDate(e.target.value)}
                                                id="exampleFormControlInput1"
                                                label="Date of Joining"
                                                placeholder="Enter Date of Joining"
                                            />
                                        </CCol> 

                                        <CCol xs={6}>
                                        <CFormSelect
                                                 className="mb-1"
                                                 aria-label="Select Employee Category"
                                                 value={empCategory}
                                                 onChange={(e) => setEmpCategory(e.target.value)}
                                                 label="Employee Category"
                                                 options={[
                                                     "Select Employee Category",
                                                     { label: "Employee", value: "Employee" },
                                                     { label: "Consultant", value: "Consultant" },
                                                 ]}
                                             />
                                         </CCol> 

                                          
                                         <CCol xs={6}>
                                             <CFormSelect
                                                 className="mb-1"
                                                 type="text"
                                                 id="exampleFormControlInput1"
                                                 value={EmployeeID}
                                                 onChange={(e) => setEmployeeID(e.target.value)}
                                                 label="Employee ID"
                                                 placeholder="Enter Employee ID"
                                             >
                                                 <option>Select Id</option>
                                                 <option>YogPowerEmp</option>
                                             </CFormSelect>

                                         </CCol>
                                         <CCol xs={6}>
                                             <CFormSelect
                                                 className="mb-1"
                                                 type="text"
                                                 id="exampleFormControlInput1"
                                                 value={AttendanceID}
                                                 onChange={(e) => setAttendanceID(e.target.value)}
                                                 label="Attendance ID"
                                                 placeholder="Enter Attendance ID"
                                             >
                                                 <option>Select Id</option>
                                                 <option>YogPowerAtt</option>
                                             </CFormSelect>
                                         </CCol>
                                         <CCol xs={6}>
                                            <CFormInput
                                                className="mb-1"
                                                type="number"
                                                value={accountNo}
                                                onChange={(e) => setAccountNo(e.target.value)}
                                                id="exampleFormControlInput1"
                                                label="Account No"
                                                placeholder="Enter Account No"
                                            />
                                        </CCol>
                                        <CCol xs={6}>
                                             <CFormInput
                                                 className="mb-1"
                                                 type="text"
                                                 id="exampleFormControlInput1"
                                                 value={IFSCCode}
                                                 onChange={(e) => setIFSCCode(e.target.value)}
                                                 label="IFSC"
                                                 placeholder="Enter IFSC"
                                             />
                                         </CCol>
                                         <CCol xs={6}>
                                             <CFormInput
                                                 className="mb-1"
                                                 type="text"
                                                 id="exampleFormControlInput1"
                                                 value={PANNo}
                                                 onChange={(e) => setPANNo(e.target.value)}
                                                 label="PAN Card"
                                                 placeholder="Enter PAN Card"
                                             />
                                         </CCol>
                                         <CCol xs={6}>
                                             <CFormInput
                                                 className="mb-1"
                                                 type="number"
                                                 value={aadharNo}
                                                 onChange={(e) => setAadharNo(e.target.value)}
                                                 id="exampleFormControlInput1"
                                                 label="Aadhar Number"
                                                 placeholder="Enter Aadhar Number"
                                             />
                                         </CCol>
                                         <CCol xs={6}>
                                         <CButton className="mt-2"onClick={() => getEmployeeDataFun()}>Save</CButton>
                                         </CCol>
                                      </CRow>
                                      
                           </CCol>
                    </CForm>
                    </CCardBody>
                    
     </CCard>
     </CCard>
</CCard>
}

export default EmployeeForm





