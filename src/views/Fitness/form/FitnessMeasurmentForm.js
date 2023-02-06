import { CForm, CCard, CNav, CCol, CFormInput, CRow, CButton } from "@coreui/react"


function FitnessMeasurmentForm({ closeFormFun }) {
    console.log(closeFormFun)
    return <CCard className="m-3 overflow-hidden" >
        <CNav className="p-2 px-3" style={{ background: '#0B5345' }}>
            <h2 className="text-white"  >Measurment Form</h2>
        </CNav>
        <CForm className="p-3">
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
                    />
                </CCol>

                <CCol className='d-flex justify-content-between my-2 ' lg={6} >
                    <h5 >Contact</h5>
                    <CFormInput
                        type="number"
                        className="ms-4 w-50"
                        placeholder="Enter your contact number"
                    />
                </CCol>
            </CRow>


            <CRow className='mt-lg-4'>
                <CCol className='d-flex justify-content-between my-2' lg={6}>
                    <h5>Measurement Date</h5>
                    <CFormInput
                        type="date"
                        className="w-50"
                    />
                </CCol>

                <CCol className='d-flex justify-content-between my-2 ' lg={6} >
                    <h5 >Apply Date</h5>
                    <CFormInput
                        type="date"
                        className="ms-4 w-50"
                    />
                </CCol>
            </CRow>


            <CRow className='mt-lg-4'>
                <CCol className='d-flex justify-content-between my-2' lg={6}>
                    <h5 >Waist</h5>
                    <CFormInput
                        type="text"
                        className="ms-4 w-50"
                        placeholder="Enter Waist"
                    />
                </CCol>

                <CCol className='d-flex justify-content-between my-2 ' lg={6} >
                    <h5 >Weight</h5>
                    <CFormInput
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
                    />
                </CCol>

                <CCol className='d-flex justify-content-between my-2 ' lg={6} >
                    <h5 >Age</h5>
                    <CFormInput
                        type="number"
                        className="w-50"
                        placeholder="Enter Your Age"
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
                    />
                </CCol>

                <CCol className='d-flex justify-content-between my-2 ' lg={6} >
                    <h5 >Left Calf</h5>
                    <CFormInput
                        type="number"
                        className="w-50"
                        placeholder="Enter about Your Left Calf"
                    />
                </CCol>
            </CRow>

            <CRow className='mt-lg-4'>
                <CCol className='d-flex justify-content-between my-2 ' lg={6} >
                    <h5 className="me-1">Lower Abs:</h5>
                    <CFormInput
                        type="text"
                        placeholder="Enter Lower Abs:"
                        className="w-50"
                    />
                </CCol>

                <CCol className='d-flex justify-content-between my-2' lg={6}>
                    <h5 >Neck</h5>
                    <CFormInput
                        type="text"
                        className="w-50"
                        placeholder="Enter Neck"
                    />
                </CCol>
            </CRow>

            <CRow className='mt-lg-4'>
                <CCol className='d-flex justify-content-between my-2 ' lg={6} >
                    <h5 className="me-1">Hips</h5>
                    <CFormInput
                        type="text"
                        placeholder="Enter Hips"
                        className="w-50"
                    />
                </CCol>

                <CCol className='d-flex justify-content-between my-2' lg={6}  >
                    <h5 >Shoulder</h5>
                    <CFormInput
                        type="text"
                        className="w-50"
                        placeholder="Enter Shoulder"
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
                    />
                </CCol>

                <CCol className='d-flex justify-content-between my-2' lg={6} >
                    <h5 >Chest</h5>
                    <CFormInput
                        type="text"
                        className="w-50"
                        placeholder="Enter Chest"
                    />
                </CCol>


            </CRow>


            <CRow className='mt-lg-4'>
                <CCol className='d-flex justify-content-between my-2' lg={6}>
                    <h5 className="me-1">Right-Thigh</h5>
                    <CFormInput
                        type="text"
                        placeholder="Enter Right Thigh"
                        className="w-50"
                    />
                </CCol>

                <CCol className='d-flex justify-content-between my-2' lg={6}>
                    <h5 >Upper Abs</h5>
                    <CFormInput
                        type="text"
                        className="w-50"
                        placeholder="Enter Upper Abs"
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
                    />
                </CCol>

                <CCol className='d-flex justify-content-between my-2 ' lg={6} >
                    <h5 className="me-1">Right-Arms</h5>
                    <CFormInput
                        type="text"
                        placeholder="Enter Right Arms"
                        className="w-50"
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
                    />
                </CCol>

                <CCol className='d-flex justify-content-between my-2' lg={6} >
                    <h5 className="me-1">RBM:</h5>
                    <CFormInput
                        type="text"
                        placeholder="Enter RBM:"
                        className="w-50"
                    />
                </CCol>
            </CRow>

            <CRow className='mt-lg-4'>
                <CCol className='d-flex justify-content-between my-2' lg={6}>
                    <h5 >Body Age</h5>
                    <CFormInput
                        type="text"
                        className="w-50"
                        placeholder="Enter Body Age"
                    />
                </CCol>

                <CCol className='d-flex justify-content-between my-2' lg={6} >
                    <h5 className="me-1">Vis. Fat:</h5>
                    <CFormInput
                        type="text"
                        placeholder="Enter Vis.Fat:"
                        className="w-50"
                    />
                </CCol>
            </CRow>


            <CRow className='mt-lg-4' lg={6}>
                <CCol className='d-flex justify-content-between my-2' >
                    <h5 className="me-1" >BMI</h5>
                    <CFormInput
                        type="text"
                        className="w-50"
                        placeholder="Enter BMI"
                    />
                </CCol>

                <CCol className='d-flex justify-content-between my-2 ' lg={6} >
                    <h5 className="me-1">Sub Fat:</h5>
                    <CFormInput
                        type="text"
                        placeholder="Enter Sub Fat"
                        className="w-50"
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
                    />

                </CCol>
            </CRow>


        </CForm>
        <CCol className="p-3">
            <CButton>Save Measurments</CButton>
        </CCol>

        <CCol className="d-flex justify-content-around p-1 text-white " style={{ background: '#0B5345' }}>
           
        </CCol>


    </CCard>




}

export default FitnessMeasurmentForm 