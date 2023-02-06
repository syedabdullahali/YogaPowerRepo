import { CForm, CCard, CNav, CCol, CFormInput, CRow, CButton, CFormSelect } from "@coreui/react"



function AllDietClientForm({ closeFormFun }) {

    return <CCard className="m-3 overflow-hidden" >
        <CNav className="p-2 px-3" style={{ background: '#0B5345' }}>
            <h2 className="text-white"  > Client Diet Form</h2>
        </CNav>
        <CForm className="p-3">

            <CCol className="d-flex justify-content-end">
                <CButton className="bg-danger  text-black " onClick={() => closeFormFun()}> close</CButton>
            </CCol>

            <h3 style={{ marginBottom: '2rem' }}>Info</h3>

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
                        className="w-50"
                        placeholder="Enter your contact number"
                    />
                </CCol>
            </CRow>



            <CRow className='mt-lg-4'>
                <CCol className='d-flex justify-content-between my-2' lg={6}>
                    <h5>Gender</h5>
                    <CFormSelect aria-label="Default select example" className="w-50 ">
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                    </CFormSelect>
                </CCol>

                <CCol className='d-flex justify-content-between my-2 ' lg={6} >
                </CCol>
            </CRow>




            <h3 style={{ margin: '2rem 0' }} >Diet Info </h3>

            <CRow className='mt-lg-4'>
                <CCol className='d-flex justify-content-between my-2' lg={6}>
                    <h5 >Purpose</h5>
                    <CFormInput
                        type="text"
                        className="ms-4 w-50"
                        placeholder="Enter your Purpose"
                    />
                </CCol>

                <CCol className='d-flex justify-content-between my-2 ' lg={6} >
                    <h5 >Start Date</h5>
                    <CFormInput
                        type="date"
                        className="ms-4 w-50"
                    />
                </CCol>
            </CRow>


            <CRow className='mt-lg-4'>
                <CCol className='d-flex justify-content-between my-2' lg={6}>
                    <h5 >End Date</h5>
                    <CFormInput
                        type="date"
                        className="ms-4 w-50"
                        placeholder="Enter Waist"
                    />
                </CCol>

                <CCol className='d-flex justify-content-between my-2 ' lg={6} >
                    <h5 >Package</h5>
                    <CFormInput
                        type="number"
                        className="ms-4 w-50"
                        placeholder="Enter Package"
                    />
                </CCol>
            </CRow>


            <CRow className='mt-lg-4'>
                <CCol className='d-flex justify-content-between my-2' lg={6}>
                    <h5 >Dietitian Name</h5>
                    <CFormInput
                        type="text"
                        className="ms-4 w-50"
                        placeholder="Enter Your Dietitian Name"
                    />
                </CCol>

                <CCol className='d-flex justify-content-between my-2 ' lg={6} >

                </CCol>
            </CRow>





        </CForm>
        <CCol className="p-3">
            <CButton>Save Client Diet</CButton>
        </CCol>

        <CCol className="d-flex justify-content-around p-1 text-white " style={{ background: '#0B5345' }}>

        </CCol>


    </CCard>

}


export default AllDietClientForm