
import React,{useState} from 'react'
import { CCol,CFormInput,CRow,CButton,CFormSelect } from '@coreui/react'




const CreateTask = () => {

const user =[
    {
        name:'Jonas',
        date:'2023-02-11',
        task:'Hve to go',
        time:'67:pm' 
    }
]

const [userName,setUserName] = useState()
const [ date,setDate] = useState()
const [ Time,setTime] = useState()
const [selectedTask,setSelectedTask] = useState()



function CreateTask (){

}




return (


<CCol lg={12} sm={12}>
                                     <CRow>
                                     <CCol xs={6}>
                                                <CFormInput
                                                 className="mb-1"
                                                 type="text"
                                                 value={userName}
                                                 onChange={(e) => setUserName(e.target.value)}
                                                 id="exampleFormControlInput1"
                                                 label="Name"
                                                 placeholder="Enter Date"
                                                />
                                         </CCol> 

                                          <CCol xs={6}>
                                              <CFormInput
                                               className="mb-1"
                                               type="date"
                                               format="MM-dd-yyyy"
                                               value={date}
                                               onChange={(e) => setDate(e.target.value)}
                                               id="exampleFormControlInput1"
                                               label="Task Date"
                                               placeholder="Enter Date"
                                                             />
                                         </CCol> 
                                          <CCol xs={6}>
                                                <CFormInput
                                                 className="mb-1"
                                                 type='time'
                                                 value={Time}
                                                 onChange={(e) => setTime(e.target.value)}
                                                 id="exampleFormControlInput1"
                                                 label="Task Time"
                                                 placeholder="Enter Date"
                                                />
                                         </CCol> 


                                          <CCol xs={6} >
                                         <CFormSelect  label="Task Details" value={selectedTask} onChange={(e)=>setSelectedTask(e.target.value)} >
                                                       <option>Task Type</option>
                                                       <option value="1">One</option>
                                                       <option value="2">Two</option>
                                                       <option value="3">Three</option>
                                          </CFormSelect>
                                          </CCol> 
                                         
                                         <CCol xs={6}>
                                         <CButton className="mt-2"onClick={() => CreateTask()}>Save</CButton>
                                         </CCol>
                                      </CRow>                                          
</CCol>                                       
  )
}

export default CreateTask
