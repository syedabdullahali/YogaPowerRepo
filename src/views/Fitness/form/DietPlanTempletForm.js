import { CForm, CCard, CNav, CCol, CFormInput, CRow, CButton } from "@coreui/react"


function DietPlanTempletForm({ closeFormFun }) {



    return <CCard className="m-3 overflow-hidden" >
        <CNav className="p-2 px-3" style={{ background: '#0B5345' }}>
            <h2 className="text-white"  >Diet Plan Form</h2>
        </CNav>
        <CForm className="p-3">

            <CCol className="d-flex justify-content-end">
                <CButton className="bg-danger  text-black " onClick={() => closeFormFun()}> close</CButton>
            </CCol>

            <h3 style={{ marginBottom: '2rem' }}>Diet Plan</h3>

            <CRow className='mt-lg-4'>
                <CCol className='d-flex justify-content-between my-2' lg={6}>
                    <h5>Diet Plan Name</h5>
                    <CFormInput
                        type="text"
                        className="w-50"
                        placeholder="Diet Plan Name"
                    />
                </CCol>

                <CCol className='d-flex justify-content-between my-2 ' lg={6} >
                    <h5 >Diet Duretion</h5>
                    <CFormInput
                        type="text"
                        className="w-50"
                        placeholder="Enter your Diet Duretion"
                    />
                </CCol>
            </CRow>



            <CRow className='mt-lg-4'>
                <CCol className='d-flex justify-content-between my-2' lg={6}>
                    <h5>Format</h5>
                    {/* <CFormSelect aria-label="Default select example" className="w-50 ">
           <option value="1">Male</option>
           <option value="2">Female</option>
</CFormSelect> */}
                    <CFormInput
                        type="text"
                        className="w-50"
                        placeholder=" Diet  Format"
                    />
                </CCol>

                <CCol className='d-flex justify-content-between my-2 ' lg={6} >
                    <h5 >Diet Plan</h5>
                    <CFormInput
                        type="text"
                        className="ms-4 w-50"
                        placeholder="Enter your Diet Plan"
                    />
                </CCol>
            </CRow>


        </CForm>
        <CCol className="p-3">
            <CButton>Save Diet Plan</CButton>
        </CCol>

        <CCol className="d-flex justify-content-around p-1 text-white " style={{ background: '#0B5345' }}>

        </CCol>


    </CCard>

}

export default DietPlanTempletForm