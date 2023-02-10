import { CCard,CCardBody,CCardHeader,CCardTitle,CFormInput,CForm,CRow ,CCol,CFormSelect,CButton }from "@coreui/react"


function ExpenseVoucher (){

return <CCard className="overflow-hidden">
       <CCardHeader style={{ backgroundColor: "#0B5345", color: "white" }}> 
           <CCardTitle><h4>Add Expense</h4></CCardTitle>
       </CCardHeader>
       <CCardBody>
              <CCardTitle className="p-4 " >
                <h5 className=" p-2 text-center  mx-auto outline"  >
                    Expense Voucher</h5>
             </CCardTitle>     
         <CForm>
           <CRow>
           <CCol md={6}>
                <CFormInput
                type="number"
                label='Voucher No'                
                />
            </CCol>

            <CCol md={6}>
                <CFormInput
                type="text"
                label='Source'                
                />
            </CCol>
         
          </CRow>   

          <CRow>
           

            <CCol md={6}>
                <CFormInput
                type="date"
                label='Voucher Date'                
                />
            </CCol>
            <CCol md={6}>
                <CFormInput
                type="text"
                label='Mode of payment'                
                />
            </CCol>
         
          </CRow>      

          <CRow>
            <CCol md={6}>
                <CFormSelect 
                label='Category' 
                options={['a','b','c','d']}               
                />
            </CCol>
            <CCol md={6}>
                <CFormInput
                type="text"
                label='Paid To'                
                />
            </CCol>
          </CRow>   

           <CRow>
            <CCol md={6}>
                <CFormInput 
                type="text"
                label='Towards' 
                />
            </CCol>
            <CCol md={6}>
                <CFormInput
                type="number"
                label='Rs ₹'                
                />
            </CCol>
          </CRow>  

          <CRow>
            <CCol md={6}>
                <CFormInput 
                type="text"
                label='Words in ₹' 
                />
            </CCol>
           
          </CRow>  

          <CCol className="p-2 d-flex justify-content-center mt-2">
             <CButton className="p-2 w-25">Save</CButton>
          </CCol>

            
 
         </CForm>    
       </CCardBody>

    </CCard>
}


export default ExpenseVoucher