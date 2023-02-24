import {CForm,CCard,CCardHeader,CCardTitle,CFormInput,CCol,CFormSelect,
    CRow,CTable,CTableHead,CTableHeaderCell,CTableRow,CTableBody, 
    CTableDataCell,CButton} from '@coreui/react'
import axios from 'axios'
import {useEffect, useState} from 'react'    
import { useSelector } from 'react-redux'

function EmployeeTargetSetupForm({closeForm}){
    const url1 = useSelector((el)=>el.domainOfApi) 
    let user = JSON.parse(localStorage.getItem('user-info'))
    const token = user.token;
    const username = user.user.username;
   
    const [TargetValue,setTargetValue] = useState('')
    const [employeeData,setEmployeeData]  = useState([])

    const [monthInput1,setMonthIput1] =useState('')    
    const [monthInput2,setMonthIput2] =useState('')    
    const [monthInput3,setMonthIput3] =useState('')    
    const [monthInput4,setMonthIput4] =useState('')  
    const [monthInput5,setMonthIput5] =useState('')    
    const [monthInput6,setMonthIput6] =useState('')  
    const [monthInput7,setMonthIput7] =useState('')    
    const [monthInput8,setMonthIput8] =useState('')    
    const [monthInput9,setMonthIput9] =useState('') 
    const [monthInput10,setMonthIput10] =useState('')   
    const [monthInput11,setMonthIput11] =useState('')  
    const [monthInput12,setMonthIput12] =useState('')   
 
    console.log(TargetValue)

 useEffect(()=>{
    getEmployee()
 },[])   

async function getEmployee() {
    try{
 const {data} = await  axios.get(`${url1}/employeeform`)
 setEmployeeData(data)          
    }catch(error){
       console.log(error)
    }          
}

console.log(employeeData)


if(TargetValue ==="Sales Target"){

}


return <CCard>

    <CCardHeader  style={{ backgroundColor: '#0B5345', color: 'white' }}>
            <CCardTitle><h4>Empyolee Target Setup</h4></CCardTitle>


    </CCardHeader>
    <CCol className='d-flex justify-content-end mt-4 pe-4'>

    <CButton onClick={()=>closeForm()} color='danger' >Close</CButton>
    </CCol >


    <CForm className='p-4' style={{boxSizing:'border-box'}}>
        <CCol lg={6}>
            <CFormSelect label='Employee'>
            <option >Select Your Employee </option>

{employeeData.filter((list) => list.username === username && list.selected === 'Select').map((item, index) => (
        item.username === username && (
            <option key={index}>{item.FullName}</option>
        )
))}

            </CFormSelect>
             
        </CCol>  

        <CCol lg={6}>
             <CFormSelect
             label='Types Of Target'
             onChange={(e)=>setTargetValue(e.target.value)}
             >
                <option >Select Your Target </option>
                <option >Sales Target</option>
                <option > Client Target</option>
                <option > Calls Target</option>
                <option >Lead Target</option>
                <option >Renewals</option>
                <option >Referral Leads</option>
                <option > Media Target</option>
             </CFormSelect>
        </CCol>
  
    <CRow>
        <CCol lg={6}>
             <CFormSelect
             label='Year'>
                <option>Year</option>
                <option value='Target 2'>2020</option>
                <option value='Target 3'>2021</option>
                <option value='Target 4'>2022</option>
                <option value='Target 5'>2023</option>

             </CFormSelect>
        </CCol>
       
    </CRow>

<div style={{overflowY:'scroll'}} className='mb-3'>
    <CTable  className='mt-3' style={{width:'200%'}}>
          <CTableHead >
             <CTableHeaderCell className=' '>Jan</CTableHeaderCell>
             <CTableHeaderCell className=''>Feb</CTableHeaderCell>
             <CTableHeaderCell className=''>March</CTableHeaderCell>
             <CTableHeaderCell className=''>April</CTableHeaderCell>
             <CTableHeaderCell className=''>May</CTableHeaderCell>
             <CTableHeaderCell className=''>Jun</CTableHeaderCell>
             <CTableHeaderCell className=''>July</CTableHeaderCell>
             <CTableHeaderCell className=''>August</CTableHeaderCell>
             <CTableHeaderCell className=''>Sep</CTableHeaderCell>
             <CTableHeaderCell className=''>Oct</CTableHeaderCell>
             <CTableHeaderCell className=''>Nov</CTableHeaderCell>
             <CTableHeaderCell className=''>Dec</CTableHeaderCell>
          </CTableHead>
          <CTableBody>
            <CTableRow>
                <CTableDataCell>
                    <CFormInput type='number' value={monthInput1}onChange={(e)=>setMonthIput1(e.target.value)}></CFormInput>
                </CTableDataCell>
                <CTableDataCell>
                    <CFormInput type='number' value={monthInput2}onChange={(e)=>setMonthIput2(e.target.value)}></CFormInput>
                </CTableDataCell>     
                <CTableDataCell>
                    <CFormInput type='number' value={monthInput3}onChange={(e)=>setMonthIput3(e.target.value)}></CFormInput>
                </CTableDataCell>     
                <CTableDataCell>
                    <CFormInput type='number' value={monthInput4}onChange={(e)=>setMonthIput4(e.target.value)}></CFormInput>
                </CTableDataCell>     
                <CTableDataCell>
                    <CFormInput type='number' value={monthInput5}onChange={(e)=>setMonthIput5(e.target.value)}></CFormInput>
                </CTableDataCell>     
                <CTableDataCell>
                    <CFormInput type='number' value={monthInput6}onChange={(e)=>setMonthIput6(e.target.value)}></CFormInput>
                </CTableDataCell> 
                <CTableDataCell>
                    <CFormInput type='number' value={monthInput7}onChange={(e)=>setMonthIput7(e.target.value)}></CFormInput>
                </CTableDataCell> 
                <CTableDataCell>
                    <CFormInput type='number' value={monthInput8}onChange={(e)=>setMonthIput8(e.target.value)}></CFormInput>
                </CTableDataCell>
                <CTableDataCell>
                    <CFormInput type='number' value={monthInput9}onChange={(e)=>setMonthIput9(e.target.value)}></CFormInput>
                </CTableDataCell>     
                <CTableDataCell>
                    <CFormInput type='number' value={monthInput10}onChange={(e)=>setMonthIput10(e.target.value)}></CFormInput>
                </CTableDataCell> 
                <CTableDataCell>
                    <CFormInput type='number' value={monthInput11}onChange={(e)=>setMonthIput11(e.target.value)}></CFormInput>
                </CTableDataCell>     
                <CTableDataCell>
                    <CFormInput type='number' value={monthInput12}onChange={(e)=>setMonthIput12(e.target.value)}></CFormInput>
                </CTableDataCell>           
            </CTableRow>
          </CTableBody>
     </CTable>
</div>

     
     <CCol >
       <CButton onClick={()=>setActiveForm((value)=>!value)} >Save</CButton>
     </CCol>
    </CForm>
      </CCard>

}

export default EmployeeTargetSetupForm