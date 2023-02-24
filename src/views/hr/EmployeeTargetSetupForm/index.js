import {CForm,CCard,CCardHeader,CCardTitle,CFormInput,CCol,CFormSelect,
    CRow,CTable,CTableHead,CTableHeaderCell,CTableRow,CTableBody, 
    CTableDataCell,CButton} from '@coreui/react'
import axios from 'axios'
import {useEffect, useState} from 'react'    
import { useSelector } from 'react-redux'

function EmployeeTargetSetupForm({closeForm,getEmployeeTargetSheetData}){
    const url1 = useSelector((el)=>el.domainOfApi) 
    let user = JSON.parse(localStorage.getItem('user-info'))
    const token = user.token;
    const username = user.user.username;
   
    const [TargetValue,setTargetValue] = useState('')
    const [employeeData,setEmployeeData]  = useState([])
    const [selectedEmployee,setSselectedEmployee ] = useState('')
    const [year,setYear]=useState('')

    const [monthInput1,setMonthIput1] =useState('0')    
    const [monthInput2,setMonthIput2] =useState('0')    
    const [monthInput3,setMonthIput3] =useState('0')    
    const [monthInput4,setMonthIput4] =useState('0')  
    const [monthInput5,setMonthIput5] =useState('0')    
    const [monthInput6,setMonthIput6] =useState('0')  
    const [monthInput7,setMonthIput7] =useState('0')    
    const [monthInput8,setMonthIput8] =useState('0')    
    const [monthInput9,setMonthIput9] =useState('0') 
    const [monthInput10,setMonthIput10] =useState('0')   
    const [monthInput11,setMonthIput11] =useState('0')  
    const [monthInput12,setMonthIput12] =useState('0')   
 
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


const PostData =  {
    "Sr_No": "1" ,
    "Employee": selectedEmployee,
    "Type_Of_Target": TargetValue,
    "Year": year,
    "Jan": monthInput1 ,
    "Feb":  monthInput2 ,
    "March":  monthInput3 ,
    "April":  monthInput4 ,
    "May":  monthInput5 ,
    "June":  monthInput6 ,
    "July":  monthInput7 ,
    "August":  monthInput8 ,
    "Sept":  monthInput9 ,
    "Oct":  monthInput10 ,
    "Nov":  monthInput11 ,
    "Dec":  monthInput12 ,
}


async function  saveTargetSheetData(){

    const response = await axios.post(`${url1}/employeetargetsheet`,JSON.stringify(PostData),{
        headers: {
          'Content-Type': 'application/json'
        }
      })
    console.log(response)
    console.log(PostData)
    getEmployeeTargetSheetData()
    alert('Success Fully Save')
    setMonthIput1('0')
    setMonthIput2('0')
    setMonthIput3('0')
    setMonthIput4('0')
    setMonthIput5('0')
    setMonthIput6('0')
    setMonthIput7('0')
    setMonthIput8('0')
    setMonthIput9('0')
    setMonthIput10('0')
    setMonthIput11('0')
    setMonthIput12('0')
    setTargetValue('')
    setSselectedEmployee ('')
    setYear('')
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
            <CFormSelect label='Employee'
            value={selectedEmployee}
            onChange={(e)=>setSselectedEmployee(e.target.value)}
            >
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
             value={TargetValue}
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
             value={year}
             onChange={(e)=>setYear(e.target.value)}
             label='Year'>
                <option>Select Year</option>
                <option>{new Date().getFullYear()-4}</option>
                <option >{new Date().getFullYear()-3}</option>
                <option >{new Date().getFullYear()-2}</option>
                <option >{new Date().getFullYear()-1}</option>
                <option> {new Date().getFullYear()}</option>

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
       <CButton onClick={()=>saveTargetSheetData()} >Save</CButton>
     </CCol>
    </CForm>
      </CCard>

}

export default EmployeeTargetSetupForm