import Calender from './Calender'
import React,{useState} from 'react'
import { CCol,CFormInput,CRow,CButton,CFormSelect,CCard,CForm } from '@coreui/react'




const CreateTask = () => {



const [userName,setUserName] = useState()
const [ date,setDate] = useState()
const [ Time,setTime] = useState()
const [selectedTask,setSelectedTask] = useState()

const CurrentDate = new Date()


const [TaskData,setTaskData] = useState([
    {
        date:`${CurrentDate.getDate()}`, 
        month:`${CurrentDate.getMonth()+1}`,
        year:`${CurrentDate.getFullYear()}`, 
        userInfo:[{userName:"Jonas",
        userTime:'7:90 ',
        selectedTask:'38'}]
    }
])


function sumbitTask (e){
if(userName!==''&& date!==''&& Time!==''&&selectedTask!==''){

    const TaskObjeact = {
        userInfo:[{userName,
        userTime:Time,
        selectedTask}],
        date:`${+date.split("-")[2]}`,
        month:`${+date.split("-")[1]}`,
        year:`${+date.split("-")[0]}`,       
    }
    console.log(e.preventDefault())

    setTaskData((prev)=>{
        console.log(prev)



    const val =    prev.some((el)=>{
            const value =(el.date ==TaskObjeact.date && el.month ===TaskObjeact.month && el.year ===TaskObjeact.year )
             if(el.date ==TaskObjeact.date && el.month ===TaskObjeact.month && el.year ===TaskObjeact.year ){
              el.userInfo.push(...TaskObjeact.userInfo)
             }
            return  value 
           })
    console.log(val)

     if(val){
        return [...prev]
     }else{
        return  [...prev,TaskObjeact]
     }  

})
    console.log(TaskData)

}


}







return (

    <>
          <CCard className='p-4' >

          <CForm>
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
                                         <CButton type='submit'  onClick={sumbitTask} className="mt-2">Save</CButton>
                                         </CCol>
                                      </CRow>                                          
                           </CCol>   
                  </CForm>                    
          </CCard> 

    {TaskData[0]&&TaskData.map((el)=>{
    console.log(el)    
    return <Calender 
         CurrentDate ={el.date}
         CurrentMonth={el.month-1}
         CurrentYear={el.year} 
         userInfo={el.userInfo}   
         />
    }
    )}

    </>                                  
  )
}

export default CreateTask
