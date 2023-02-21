import { CButton, CCard, CCardBody, CCardHeader, CCardTitle, CCol, CForm, CFormInput, CFormSelect, CFormTextarea, CImage, CRow } from '@coreui/react'
import axios from 'axios'
import { ref, uploadBytes } from 'firebase/storage'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProfileIcon from 'src/assets/images/avatars/profile_icon.png'
import { storage } from 'src/firebase'
import { v4 } from 'uuid'
import { useSelector } from 'react-redux';
import { cilArrowCircleBottom, cilArrowCircleTop, cilInfo } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const url = 'https://yog-seven.vercel.app'
const url2 = 'https://yog-seven.vercel.app'

const Recruitment = () => {
    const [error, setError] = useState('')
    const [step, setStep] = useState(1)
    const [image, setImage] = useState(null)
    const [imageUrl, setImageUrl] = useState('')
    const [Fullname, setFullname] = useState('')
    const [age, setAge] = useState('')
    const [ContactNumber, setContactNumber] = useState('')
    const [Designation, setDesignation] = useState('')
    const [Email, setEmail] = useState('')
    const [Gender, setGender] = useState('')
    const [resume, setResume] = useState(null)
    const [resumeUrl, setResumeUrl] = useState('')
    const [Department, setDepartment] = useState('')
    const [Address, setAddress] = useState('')
    const [Area, setArea] = useState('')
    const [city, setCity] = useState('')
    const [pincode, setPincode] = useState('')
    const [state, setState] = useState('')
    const [Salary, setSalary] = useState('')
    const [Source, setSource] = useState('')
    const [grade, setgrade] = useState('')
    const [comment, setComment] = useState('')

    const resumeInput = useRef('')
    const imageInput = useRef('')
  
  
    
     
    // Export 
    
     
  

 
    const url1 = useSelector((el)=>el.domainOfApi) 

    const navigate = useNavigate()
    let user = JSON.parse(localStorage.getItem('user-info'))
    console.log(user);
    const token = user.token;
    const username = user.user.username;

    useEffect(() => {
        getLeadSource()
        getDesignation()
        getStaff()
    }, [])
    const [leadArr, setLeadArr] = useState([]);
    
    function getLeadSource() {
        axios.get(`${url2}/leadSourceMaster/all`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res.data)
                setLeadArr(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }
    const [staff, setStaff] = useState([])
    function getStaff() {
        axios.get(`${url1}/employeeform/`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                setStaff(res.data)
                console.log(res.data);
            })
            .catch((error) => {
                console.error(error)
            })
    }
    const [result, setResult] = useState([])
    function getDesignation() {
        axios.get(`${url}/designation/all`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                setResult(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    const saveRecruitment = (e) => {
        if (imageUrl !== '' && resumeUrl !== ''  &&  Fullname !== '' && Salary !== '' &&
            Email !== ''  && pincode !== '' && state !== ''  && Gender !== '' && Address !== '') {
            let data = {
                username: username ,
                image: imageUrl,
                FullName: Fullname, EmailAddress: Email, ContactNumber,                
                Gender: Gender, address: Address, Area, city, 
                resume: resumeUrl, PinCode: pincode, State: state,
                PayoutType: Source, Grade: grade, Comment: comment, 
                JobDesignation: Designation, Department: Department, Salary: Salary,
                status: false,CountryCode: 0,whatsappNumber: 0,
                DateofBirth:"",EmployeeCategory: "",loginAccess: false,
                Anniversary: new Date(),AdminRights: "",joiningDate:"",EmployeeID: "",AttendanceID: "",
                AccountNo: "",IFSC: "",PANCardNumber:"",AadharNumber: 0,PANCard:"",AadharCard: "",
                Comment: "",selected: "",status:false,OfferLetter: "",AppoinmentLetter:"",Indexion: ""
    
            }

            fetch(`${url1}/employeeform`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }).then((resp) => {
                resp.json().then(() => {
                    alert("successfully submitted")
                    e.preventDefault();
                    console.log("refresh prevented");
                    navigate('/forms/staff-form')
                })
            })
        } else {
            setError('Please Fill All Details')
        }
    }


    const imgRef = useRef(null)

    const HandaleImageClick = () =>{
        imageInput.current.click()
        UploadImage()
       }

    const handleImage = (e) => {
        setImage(e.target.files[0])
        const file = e.target.files[0]
        if (!file.type.startsWith('image/')) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            imgRef.current.src = e.target.result
        }
        reader.readAsDataURL(file)
        console.log(file, image);
    }

    const UploadImage = () => {
        if (image == null) return ;
        const imageRef = ref(storage, `images/${image.name + v4()}`)
        // console.log(imageRef.fullPath);
        setImageUrl(imageRef.fullPath)

        // uploadBytes(imageRef, image).then(() => {
        //     alert('image uploaded')
        // })
    }
    console.log(imageUrl);

    const UploadResume = () => {
        if (resume == null) return ;
        const resumeRef = ref(storage, `resume/${resume.name + v4()}`)
        setResumeUrl(resumeRef.fullPath)
        // uploadBytes(resumeRef, resume).then(() => {
        //     // alert('Resume uploaded')
        // })
    }

    const HandaleResumeInputClick = () =>{
        resumeInput.current.click()
        UploadResume()
     }
     const HandaleResumeInputChange = (event)=>{
      const importresume = event.target.files[0];
      setResume(importresume)

     }

 

    return (
        <>
            <CRow className='mb-2 ms-2'>
                <CCard color={step == 1 ? 'primary' : 'success'} 
                style={{ padding: '10px', color: '#ffffff', width: '100px', margin: '3px', cursor: 'pointer' }}
                    onClick={() => setStep(1)}
                >
                    Step-1
                </CCard>

              
            </CRow>
            {step === 1 &&
                <CCard>
                    <CCardHeader>
                        <CCardTitle>Recruitment Application</CCardTitle>
                    </CCardHeader>
                    <CCardBody>
                        <CForm>
                            
                            <CRow>
                                <CCol lg={3} sm={6} className='mt-2 mb-1' >
                                    <CImage ref={imgRef} className="mb-1" style={{ borderRadius: "100px" }} width={'200px'} src={ProfileIcon} />
                                </CCol>
                                <CCol lg={8} sm={6} className='mt-5'>
                                    <CFormInput
                                        className="mb-1 mr-3"
                                        type="file"
                                        onChange={handleImage}
                                        accept="image/*"
                                        ref={imageInput}
                                        hidden
                                    />
                                    <CButton onClick={HandaleImageClick} > <CIcon icon={cilArrowCircleBottom} />Upload Image</CButton>

                                </CCol>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        id="exampleFormControlInput1"
                                        label="Full name"
                                        value={Fullname}
                                        onChange={(e) => setFullname(e.target.value)}
                                        placeholder="Enter Name"
                                    />
                                </CCol>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        type="number"
                                        id="exampleFormControlInput1"
                                        label="Contact Number"
                                        maxLength={10}
                                        value={ContactNumber}
                                        onChange={(e) => setContactNumber(e.target.value)}
                                        placeholder="Enter Contact Number"
                                    />
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol lg={5} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        type="email"
                                        id="exampleFormControlInput1"
                                        label="Email address"
                                        value={Email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="name@example.com"
                                        text="Must be 8-20 characters long."
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />
                                </CCol>
                                <CCol lg={4} md={6} sm={8}>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Currency"
                                        value={Gender}
                                        onChange={(e) => setGender(e.target.value)}
                                        label="Gander"
                                    >
                                        <option>Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </CFormSelect>
                                </CCol>

                                <CCol lg={3} md={6} sm={4}>
                                    <CFormInput
                                        className="mb-1"
                                        type="number"
                                        id="exampleFormControlInput1"
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                        label="Age"
                                        placeholder="Enter Your Age"
                                    />
                                </CCol>
                            </CRow>

                            <CCol>
                                <CFormTextarea
                                    id="exampleFormControlTextarea1"
                                    label="Address"
                                    value={Address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    rows="3"
                                    text="Must be 8-20 words long."
                                ></CFormTextarea>
                            </CCol>
                            <CRow>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        id="exampleFormControlInput1"
                                        value={Area}
                                        onChange={(e) => setArea(e.target.value)}
                                        label="Area"
                                        placeholder="Enter Area"
                                    />
                                </CCol>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        id="exampleFormControlInput1"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        label="City"
                                        placeholder="Enter City"
                                    />
                                </CCol>
                                
                            </CRow>
                            <CRow>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        id="exampleFormControlInput1"
                                        value={pincode}
                                        maxLength={6}
                                        onChange={(e) => setPincode(e.target.value)}
                                        label="Pin Code"
                                        placeholder="Enter Pin Code"
                                    />
                                </CCol>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}
                                        id="exampleFormControlInput1"
                                        label="State"
                                        placeholder="Enter State"
                                    />
                                </CCol>
                            </CRow>

                            <CRow>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormSelect
                                                className="mb-1"
                                                aria-label="Select Assign Staff"
                                                value={Source}
                                                onChange={(e) => setSource(e.target.value)}
                                                label="Source"
                                            >
                                                <option>Select Source</option>
                                                {leadArr.filter((list) => list.username === username).map((item, index) => (
                                                    item.username === username && (
                                                        <option key={index}>{item.LeadSource}</option>
                                                    )
                                    ))}</CFormSelect>
                                </CCol>
                                <CCol lg={6} md={6} sm={12}>

                                   <CFormSelect
                                                className="mb-1"
                                                aria-label="Select Job Department"
                                                value={Department}
                                                onChange={(e) => setDepartment(e.target.value)}
                                                label="Department"
                                            >
                                                {result.map((item, index) => (
                                                    item.username === username && (
                                                        item.status === true && (
                                                            <option key={index} value={item.department}>{item.department}</option>
                                                        )
                                                    )
                                                ))}
                                    </CFormSelect>
                               </CCol>
   
                            </CRow>
                            <CRow>

                            <CCol lg={6} md={6} sm={12}>

                                    <CFormSelect
                                                className="mb-1"
                                                aria-label="Select Job Designation"
                                                value={Designation}
                                                onChange={(e) => setDesignation(e.target.value)}
                                                label="Job Designation"
                                            >
                                                {result.map((item, index) => (
                                                    item.username === username && (
                                                        item.status === true && (
                                                            <option key={index} value={item.jobDesignation}>{item.jobDesignation}</option>
                                                        )
                                                    )
                                                ))}
                                            </CFormSelect>
                            </CCol>
           
                        
                                <CCol lg={6} md={6} sm={12}>                                   
                                    <CFormInput
                                                className="mb-1"
                                                type="number"
                                                value={Salary}
                                                onChange={(e) => setSalary(e.target.value)}
                                                id="exampleFormControlInput1"
                                                label="Salary"
                                                placeholder="Enter Salary"
                                            />
                                </CCol>
                    
                            </CRow>

                            <CRow>
                            <CCol lg={6} md={6} sm={12}>
                                  <CFormSelect
                                                className="mb-1"
                                                aria-label="Select Grade"
                                                value={grade}
                                                onChange={(e) => setgrade(e.target.value)}
                                                label="Grade"
                                                options={[
                                                    "Select Grade",
                                                    { label: "A", value: "A" },
                                                    { label: "B", value: "B" },
                                                    { label: "C", value: "C" },
                                                    { label: "D", value: "D" },
                                                ]}
                                            />
                                </CCol>

                               <CCol lg={6} md={6} sm={12}>
                                     <CFormInput
                                                className="mb-1"
                                                value={comment}
                                                onChange={(e) => setComment(e.target.value)}
                                                type="text"
                                                id="exampleFormControlInput1"
                                                label="Comments"
                                                placeholder="Add Comments"
                                            />
                                </CCol>
                                
                              
                            </CRow>

                            <CRow>
                            <CCol lg={6} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        type="file"
                                        accept='pdf/*'
                                        ref={resumeInput}
                                        id="exampleFormControlInput1"
                                        onChange={HandaleResumeInputChange}
                                        hidden
                                    />


                                    <CButton className='mt-2' onClick={HandaleResumeInputClick}>  <CIcon icon={cilArrowCircleBottom} />Upload Resume</CButton>
                                    <label style={{ color: 'red' }} className='ms-5'>{error}</label>
                                  
                                </CCol>
                                
                            </CRow>
                           
                            <CButton className="mt-4" onClick={() => {
                                saveRecruitment()
                            }}>Save</CButton>
                           
                        </CForm>
                    </CCardBody>
                </CCard>
            }
           
        </>
    )
}

export default Recruitment
