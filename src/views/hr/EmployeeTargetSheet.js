import {CCard,CCardTitle,CCardHeader,CTable,CTableHead,
    CTableHeaderCell,CTableBody,CTableRow,CTableDataCell, 
    CButton,CCol,CPagination,CPaginationItem}from '@coreui/react'
import React,{useState,useEffect} from 'react'   
import YogaSpinnar from '../theme/YogaSpinnar';
import {MdDelete} from 'react-icons/md';

import { useSelector } from 'react-redux'

import axios from 'axios'
const  EmployeeTargetSetupForm =  React.lazy(()=>import('./EmployeeTargetSetupForm'))
  
function EmployeeTargetSheet(){
  const url1 = useSelector((el)=>el.domainOfApi) 
  const [activeForm,setActiveForm] = useState(false)
  const [employeeTargetSheeTdata,setEmployeeTargetSeetData] = useState([])
  const [pagination, setPagination] = useState(10)


const closeForm  = ()=>{
    setActiveForm(false)
  }

useEffect(()=>{
    getEmployeeTargetSheetData()
},[])


async function getEmployeeTargetSheetData(){  
try{  
const {data} = await  axios.get(`${url1}/employeetargetsheet`)
setEmployeeTargetSeetData(data.reverse())
}catch(error){
  console.error(error)
 }
}

async function deleteEmployeeData (id){
  console.log(id)
  try{
   await  axios.delete(`${url1}/employeetargetsheet/${id}`)
  getEmployeeTargetSheetData()
  }catch(error){
   console.error(error)
  }

}


return <CCard>
     <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
         <CCardTitle className='p-2'>
            <h4>Empyolee Target Sheet</h4></CCardTitle>
     </CCardHeader>

     <div className='p-4'>
     <CCol className='pb-4 mt-3  d-flex justify-content-end '>
  {activeForm ||<CButton onClick={()=>setActiveForm((value)=>!value)} >Add New</CButton>}
  </CCol>
  {activeForm && <EmployeeTargetSetupForm closeForm={closeForm} getEmployeeTargetSheetData={getEmployeeTargetSheetData}/>}

  </div>   


   <div style={{overflowX:'scroll',boxSizing:'border-box'}} className='mx-4'>

     <CTable style={{width:'180%'}} className='mt-3'>
          <CTableHead >
             <CTableHeaderCell className='p-3'>Sr No</CTableHeaderCell>
             <CTableHeaderCell className='p-3'>Emp</CTableHeaderCell>
             <CTableHeaderCell className='p-3'>Types Of Target</CTableHeaderCell>
             <CTableHeaderCell className='p-3'>Year</CTableHeaderCell>
             <CTableHeaderCell className='p-3'>Jan</CTableHeaderCell>
             <CTableHeaderCell className='p-3'>Feb</CTableHeaderCell>
             <CTableHeaderCell className='p-3'>March</CTableHeaderCell>
             <CTableHeaderCell className='p-3'>April</CTableHeaderCell>
             <CTableHeaderCell className='p-3'>May</CTableHeaderCell>
             <CTableHeaderCell className='p-3'>Jun</CTableHeaderCell>
             <CTableHeaderCell className='p-3'>July</CTableHeaderCell>
             <CTableHeaderCell className='p-3'>August</CTableHeaderCell>
             <CTableHeaderCell className='p-3'>Sep</CTableHeaderCell>
             <CTableHeaderCell className='p-3'>Oct</CTableHeaderCell>
             <CTableHeaderCell className='p-3'>Nov</CTableHeaderCell>
             <CTableHeaderCell className='p-3'>Dec</CTableHeaderCell>
             <CTableHeaderCell className='p-3'>Delete</CTableHeaderCell>
          </CTableHead>
          <CTableBody>
            {employeeTargetSheeTdata.
            filter((el, i) => {
                  if (pagination - 10 < i + 1 && pagination >= i + 1) {
                        return el
                      }
              }).map((el,i)=>
             <CTableRow key={i}>
             <CTableDataCell>{i + 1 + pagination - 10}</CTableDataCell>
             <CTableDataCell>{el.Employee}</CTableDataCell>
             <CTableDataCell>{el.Type_Of_Target}</CTableDataCell>
             <CTableDataCell>{el.Year!=='0'&&el.Year}</CTableDataCell>
             <CTableDataCell>{el.Jan!=='0'&&el.Jan}</CTableDataCell>
             <CTableDataCell>{el.Feb!=='0'&&el.Feb}</CTableDataCell>
             <CTableDataCell>{el.March!=='0'&&el.March}</CTableDataCell>
             <CTableDataCell>{el.April!=='0'&&el.April}</CTableDataCell>
             <CTableDataCell>{el.May!=='0'&&el.May}</CTableDataCell>
             <CTableDataCell>{el.June!=='0'&&el.June}</CTableDataCell>
             <CTableDataCell>{el.July!=='0'&&el.July}</CTableDataCell>
             <CTableDataCell>{el.August !=='0'&&el.August}</CTableDataCell>
             <CTableDataCell>{el.Sept !=='0'&&el.Sept}</CTableDataCell>
             <CTableDataCell>{el.Oct!=='0'&& el.Oct}</CTableDataCell>
             <CTableDataCell>{el.Nov!=='0'&&el.Nov}</CTableDataCell>
             <CTableDataCell>{el.Dec!=='0'&&el.Dec}</CTableDataCell>
             <CTableDataCell ><MdDelete style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "40%" }} 
                                                onClick={() => deleteEmployeeData(el._id)} size='20px' /></CTableDataCell>
           </CTableRow>
            
            )}

          </CTableBody>
     </CTable>
     {!employeeTargetSheeTdata[0] ?
                                <CCol style={{ width: '100%' }} className='d-flex justify-content-center my-3'>
                                    <YogaSpinnar />
                         </CCol> : ''}
     </div>
     <div className='d-flex justify-content-center mt-3' >
                        <CPagination aria-label="Page navigation example" style={{cursor:'pointer'}}>
                            <CPaginationItem aria-label="Previous" onClick={() => setPagination((val) => val > 10 ? val - 10 : 10)}>
                                <span aria-hidden="true" >&laquo;</span>
                            </CPaginationItem>
                            <CPaginationItem active >{pagination / 10}</CPaginationItem>
                            {employeeTargetSheeTdata.length > pagination / 10 * 10 && <CPaginationItem onClick={() => setPagination((val) => val < employeeTargetSheeTdata.length ? val + 10 : val)}>{pagination / 10 + 1}</CPaginationItem>}
                            {employeeTargetSheeTdata.length > pagination / 10 * 20 && <CPaginationItem onClick={() => setPagination((val) => val < employeeTargetSheeTdata.length ? val + 10 : val)}>{pagination / 10 + 2}</CPaginationItem>}
                            <CPaginationItem aria-label="Next" onClick={() => setPagination((val) => val < employeeTargetSheeTdata.length ? val + 10 : val)}>
                                <span aria-hidden="true">&raquo;</span>
                            </CPaginationItem>
                        </CPagination>
      </div>

</CCard>

}


export default EmployeeTargetSheet