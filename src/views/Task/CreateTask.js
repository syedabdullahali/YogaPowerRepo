import Calender from './Calender'
import React,{useState} from 'react'
import { CCol,CFormInput,CRow,CButton,CFormSelect,CCard,CForm } from '@coreui/react'




const CreateTask = () => {

const [userName,setUserName] = useState()
const [ date,setDate] = useState('')
const [ Time,setTime] = useState('')
const [selectedTask,setSelectedTask] = useState('')
const [toggaleValue,setToggaleValue] = useState(false)
const [error, setError] = useState('')

const CurrentDate = new Date()


const [TaskData,setTaskData] = useState([
    {
        date:`${CurrentDate.getDate()}`, 
        month:`${CurrentDate.getMonth()+1}`,
        year:`${CurrentDate.getFullYear()}`, 
        userInfo:[{userName:"Welcome! Back Let's Create a Task To Members",
        userTime:'0:00',
        selectedTask:""}]
    }
])




const toggaleFun = ()=>{
    setToggaleValue((value)=>!value)
} 
const closeFun =()=>{
toggaleFun()
setSelectedTask(' ')
setTime('')
setDate('')
setUserName('')
setError('')
}


function sumbitTask (e){
if(userName!==""&&selectedTask!==''&&date!==''&&Time!==''){

    const TaskObjeact = {
        userInfo:[{userName,
        userTime:Time.split(":"),
        selectedTask}],
        date:`${+date.split("-")[2]}`,
        month:`${+date.split("-")[1]}`,
        year:`${+date.split("-")[0]}`,       
}
 

    e.preventDefault()

    setTaskData((prev)=>{

       

    const val =    prev.some((el)=>{
            const value =(el.date ==TaskObjeact.date && el.month ===TaskObjeact.month && el.year ===TaskObjeact.year )

           

             if(el.date ==TaskObjeact.date && el.month ===TaskObjeact.month && el.year ===TaskObjeact.year ){
              el.userInfo.push(...TaskObjeact.userInfo)
             }
            //  console.log(el.userInfo)
           
            return  value 
           })      


     if(val){
        console.log()
        prev.forEach((el,i)=>{
          el.userInfo = prev.map((el)=>el.userInfo.filter((el)=>el.userName!=="Welcome! Back Let's Create a Task To Members"))[i]
        })
        return [...prev]
     }else{
      
        return  [...prev,TaskObjeact]
     }  

})


toggaleFun()
setSelectedTask(' ')
setTime('')
setDate('')
setUserName('')
setError('')
}else{
    setError('Please Fill All Details')
}
}







return (

    <>
          <CCard className='p-4' >

          { toggaleValue?<CForm>
               <label style={{ color: 'red' }}>{error}</label>

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
                                    

                                                <CFormInput
                                                 className="mb-1"
                                                 type='text'
                                                 value={selectedTask}
                                                 onChange={(e)=>setSelectedTask(e.target.value)}                      
                                                 label="Task Detail"
                                                 placeholder="Enter Task Details"
                                                />
                                          </CCol> 
                                         
                                         <CCol xs={6}>
                                         <CButton type='submit'  onClick={sumbitTask} className="m-2" color='primary'>Save</CButton>
                                         <CButton type='submit'  onClick={closeFun} className="m-2" color='danger'>Close</CButton>

                                         </CCol>
                                      </CRow>                                          
                           </CCol>   
                  </CForm> :
                  <CButton onClick={()=>toggaleFun()} className='p-2' style={{width:'300px',marginLeft:'auto'}} color='primary'> <h5> Add Your Task</h5></CButton>}                   
          </CCard> 



    {TaskData.filter((el)=>el).map((el,i)=>{
    return <Calender 
         CurrentDate ={el.date}
         CurrentMonth={el.month-1}
         CurrentYear={el.year} 
         userInfo={el.userInfo}   
         size={el.userInfo.length}
         key={i}
         />
    }
    )}

    </>                                  
  )
}

export default CreateTask
