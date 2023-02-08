import { CForm, CCard, CNav, CCol, CFormInput, CRow, CButton } from "@coreui/react"
import { number } from "prop-types"
import { useRef } from "react"


function FitnessMeasurmentForm({ closeFormFun }) {
    const Age = useRef('')  
    const ArmsL = useRef('')  
    const ArmsR = useRef('')  
    const BMI = useRef('') 
    const CalfL = useRef('') 
    const CalfR = useRef('') 
    const Chest = useRef('')  
    const ContactNumber =useRef('') 
    const Counseller = useRef('') 
    const Fat = useRef('') 
    const ForArms = useRef('') 
    const Fullname = useRef('')
    const Height = useRef('') 
    const Hips = useRef('')//l
    const Member_ID = useRef('n')
    
    const Neck = useRef('')  //l 
    const NextFollowup_Date = useRef('')
    const Shoulder = useRef('') // l
    const ThighL = useRef('') // l
    const ThighR =useRef('') // l
    const Waist = useRef('') //l
    const Weight = useRef('') //l 
    const createdAt = useRef('') // l
    const updatedAt = useRef('') // l  
    const username = useRef('adminyogpower')  

     
    
     
    const ToValidation = 
     [
        Age,ArmsL,ArmsR,BMI,CalfL,CalfR,
        Chest,ContactNumber,Counseller,Fat,
        ForArms,Fullname,Height,Hips,Member_ID,
        Neck,NextFollowup_Date,Shoulder,ThighL,
        ThighR,Waist,Weight,createdAt,updatedAt,username
    ]
    
    
    
    
    
    console.log(ToValidation.every((el)=>el.current===''))



 const  sumbitFormInfoHandler = (e)=>{
e.preventDefault()
  const obj = {
       Age:Age.current.value,
       ArmsL:ArmsL.current.value,
       ArmsR:ArmsR.current.value,
       BMI:BMI.current.value,
       CalfL:CalfL.current.value,
       CalfR:CalfR.current.value,
       Chest:Chest.current.value,
       ContactNumber:ContactNumber.current.value,
       Counseller:Counseller.current.value,
       Member_ID:`63${Age.current.value}${Fullname}${ContactNumber.current.value}`,
       Fat:Fat.current.value,
       ForArms:ForArms.current.value,
       Fullname:Fullname.current.value,
       Height: Height.current.value,
       Hips:Hips.current.value,
       Neck:Neck.current.value,
       Shoulder:Shoulder.current.value,
       ThighL:ThighL.current.value,
       ThighR:ThighR.current.value,
       Waist:Waist.current.value,
       Weight:Weight.current.value,
       createdAt:createdAt.current.value,
       updatedAt:updatedAt.current.value,
       NextFollowup_Date:NextFollowup_Date.current.value,
  }

  console.log(obj)


 }


    return <CCard className="m-3 overflow-hidden" >
        <CNav className="p-2 px-3" style={{ background: '#0B5345' }}>
            <h2 className="text-white"  >Measurment Form</h2>
        </CNav>
        <CForm className="p-3" onSubmit={(e)=>e.preventDefault()}>
            <CCol className="d-flex justify-content-end">
                <CButton className="bg-danger  text-black " onClick={() => closeFormFun()}> close</CButton>
            </CCol>

            <h3 style={{ marginBottom: '2rem' }}>Info


            </h3>

            <CRow className='mt-lg-4'>
                <CCol className='d-flex justify-content-between my-2' lg={6}>
                    <h5>Name</h5>
                    <CFormInput
                        type="text"
                        className="w-50"
                        placeholder="Enter your Name"
                        ref={Fullname}
                    />
                </CCol>

                <CCol className='d-flex justify-content-between my-2 ' lg={6} >
                    <h5 >Contact</h5>
                    <CFormInput
                        type="number"
                        className="ms-4 w-50"
                        placeholder="Enter your contact number"
                        ref={ContactNumber}
                    />
                </CCol>
            </CRow>


            <CRow className='mt-lg-4'>
                <CCol className='d-flex justify-content-between my-2' lg={6}>
                    <h5>Measurement Date</h5>
                    <CFormInput
                        type="date"
                        className="w-50"
                        ref={createdAt}
                    />
                </CCol>
                <CCol className='d-flex justify-content-between my-2 ' lg={6} >
                    <h5 >Apply Date</h5>
                    <CFormInput
                        type="date"
                        className="ms-4 w-50"
                        ref={updatedAt}
                    />
                </CCol>
            </CRow>


            <CRow className='mt-lg-4'>
                <CCol className='d-flex justify-content-between my-2' lg={6}>
                    <h5 >Waist</h5>
                    <CFormInput
                        type="text"
                        className="ms-4 w-50"
                        ref={Waist}
                        placeholder="Enter Waist"                        
                    />
                </CCol>

                <CCol className='d-flex justify-content-between my-2 ' lg={6} >
                    <h5 >Weight</h5>
                    <CFormInput
                        ref={Weight}
                        type="number"
                        className="w-50"
                        placeholder="Enter Weight"
                    />
                </CCol>
            </CRow>


            <CRow className='mt-lg-4'>
                <CCol className='d-flex justify-content-between my-2' lg={6}>
                    <h5 >Height</h5>
                    <CFormInput
                        type="number"
                        className="ms-4 w-50"
                        placeholder="Enter Your Height"
                        ref={Height}
                    />
                </CCol>

                <CCol className='d-flex justify-content-between my-2 ' lg={6} >
                    <h5 >Age</h5>
                    <CFormInput
                        type="number"
                        className="w-50"
                        placeholder="Enter Your Age"
                        ref={Age}
                    />
                </CCol>
            </CRow>

            <CRow className='mt-lg-4'>
                <CCol className='d-flex justify-content-between my-2' lg={6}>
                    <h5 >Right Calf</h5>
                    <CFormInput
                        type="number"
                        className="ms-4 w-50"
                        placeholder="Enter about Your Right Calf"
                        ref={CalfR}
                    />
                </CCol>

                <CCol className='d-flex justify-content-between my-2 ' lg={6} >
                    <h5 >Left Calf</h5>
                    <CFormInput
                        type="number"
                        className="w-50"
                        placeholder="Enter about Your Left Calf"
                        ref={CalfL}
                    />
                </CCol>
            </CRow>

            <CRow className='mt-lg-4'>
               

                <CCol className='d-flex justify-content-between my-2' lg={6}>
                    <h5 >Neck</h5>
                    <CFormInput
                        type="text"
                        className="w-50"
                        placeholder="Enter Neck"
                        ref={Neck}
                    />
                </CCol>
                <CCol className='d-flex justify-content-between my-2 ' lg={6} >
                    <h5 className="me-1">Hips</h5>
                    <CFormInput
                        type="text"
                        placeholder="Enter Hips"
                        className="w-50"
                        ref={Hips}
                    />
                </CCol>
            </CRow>

            <CRow className='mt-lg-4'>
                

                <CCol className='d-flex justify-content-between my-2' lg={6}  >
                    <h5 >Shoulder</h5>
                    <CFormInput
                        type="text"
                        className="w-50"
                        placeholder="Enter Shoulder"
                        ref={Shoulder}
                    />
                </CCol>
                <CCol className='d-flex justify-content-between my-2' lg={6} >
                    <h5 >Chest</h5>
                    <CFormInput
                        type="text"
                        className="w-50"
                        placeholder="Enter Chest"
                        ref={Chest}
                    />
                </CCol>
            </CRow>

            <CRow className='mt-lg-4'>
                <CCol className='d-flex justify-content-between my-2 ' lg={6}>
                    <h5 className="me-1">Left-Thigh</h5>
                    <CFormInput
                        type="text"
                        placeholder="Enter Left Thigh"
                        className="w-50"
                        ref={ThighL}
                    />
                </CCol>

                <CCol className='d-flex justify-content-between my-2' lg={6}>
                    <h5 className="me-1">Right-Thigh</h5>
                    <CFormInput
                        type="text"
                        placeholder="Enter Right Thigh"
                        className="w-50"
                        ref={ThighR}
                    />
                </CCol>



            </CRow>


            <CRow className='mt-lg-4'>
                <CCol className='d-flex justify-content-between my-2' lg={6} >
                    <h5 className="me-1">Left-Arms</h5>
                    <CFormInput
                        type="text"
                        placeholder="Enter Left Arms"
                        className="w-50"
                        ref={ArmsL}
                    />
                </CCol>

                <CCol className='d-flex justify-content-between my-2 ' lg={6} >
                    <h5 className="me-1">Right-Arms</h5>
                    <CFormInput
                        type="text"
                        placeholder="Enter Right Arms"
                        className="w-50"
                        ref={ArmsL}
                    />
                </CCol>


            </CRow>

            <CRow className='mt-lg-4'>
                <CCol className='d-flex justify-content-between my-2' lg={6}>
                    <h5 className="me-1">Forarms</h5>
                    <CFormInput
                        type="text"
                        placeholder="Enter about Your Forarms"
                        className="w-50"
                        ref={ForArms}
                    />
                </CCol>

                <CCol className='d-flex justify-content-between my-2' lg={6}>

                </CCol>
            </CRow>

            <h3 style={{ marginBottom: '2rem' }}>BMI</h3>
            <CRow className='mt-lg-4'>
                <CCol className='d-flex justify-content-between my-2' lg={6}>
                    <h5 >Fat</h5>
                    <CFormInput
                        type="text"
                        className="w-50"
                        placeholder="Enter Fat"
                        ref={Fat}
                    />
                </CCol>

                <CCol className='d-flex justify-content-between my-2' >
                    <h5 className="me-1" >BMI</h5>
                    <CFormInput
                        type="text"
                        className="w-50"
                        placeholder="Enter BMI"
                        ref={BMI}
                    />
                </CCol>

            </CRow>


            <CRow className='mt-lg-4'>
                <CCol className='d-flex justify-content-between my-2' lg={6} >
                    <h5 className="me-1">Muscle</h5>
                    <CFormInput
                        type="text"
                        placeholder="Enter  Muscle"
                        className="w-50"
                    />

                </CCol>

                <CCol className='d-flex justify-content-between my-2' lg={6} >
                    <h5 className="me-1">Counseller</h5>
                    <CFormInput
                        type="text"
                        placeholder="Enter Counseller "
                        className="w-50"
                        ref={Counseller}
                    />

                </CCol>
            </CRow>
            <CRow className='mt-lg-4'>
                <CCol className='d-flex justify-content-between my-2' lg={6} >

                </CCol>

                <CCol className='d-flex justify-content-between my-2' lg={6} >
                    <h5 className="me-1">Next Follow Up Date</h5>
                    <CFormInput
                        type="date"
                        className="w-50"
                        ref={NextFollowup_Date}
                    />

                </CCol>
            </CRow>

        <CCol className="p-3">
            <CButton onClick={sumbitFormInfoHandler}>Save Measurments</CButton>
        </CCol>


        </CForm>
       
        <CCol className="d-flex justify-content-around p-1 text-white " style={{ background: '#0B5345' }}>
           
        </CCol>


    </CCard>




}

export default FitnessMeasurmentForm 