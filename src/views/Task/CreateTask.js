import Calender from './Calender'
import React,{useState} from 'react'
import { CCol,CFormInput,CRow,CButton,CFormSelect,CCard,CForm,CContainer } from '@coreui/react'




const CreateTask = () => {

const [userName,setUserName] = useState()
const [ date,setDate] = useState('')
const [ Time,setTime] = useState('')
const [selectedTask,setSelectedTask] = useState('')
const [toggaleValue,setToggaleValue] = useState(false)
const [filterDate,setFilterDate] = useState(false)
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

function clearFilter(){
    setFilterDate('')
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
console.log(+Time.split(":")[0]<=20)
console.log(+Time.split(":")[0]>=7) 
console.log(Time)

 if(+Time.split(":")[0]>21  ||  +Time.split(":")[0]<7){
     setError('Please Enter Task Time between 7AM and 10PM')
    //  console.log(Time[0]) 
    return 
}


    e.preventDefault()

    setTaskData((prev)=>{

       

    const val =    prev.some((el)=>{
            const value =(el.date ==TaskObjeact.date && el.month ===TaskObjeact.month && el.year ===TaskObjeact.year )

           

             if(el.date ==TaskObjeact.date && el.month ===TaskObjeact.month && el.year ===TaskObjeact.year ){
              el.userInfo.push(...TaskObjeact.userInfo)
             }
           
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


console.log(TaskData)




return (

    <>
          <CCard className='p-4' >

          { toggaleValue?<CContainer>
               <label style={{ color: 'red' }}>{error}</label>

                <CCol lg={12} sm={12}>
                                     <CRow>
                                     <CCol xs={6}>
                                                <CFormInput
                                                 className="mb-1"
                                                 type="text"
                                                 value={userName}
                                                 onChange={(e) => setUserName(e.target.value)}
                                                 list="username"
                                                 label="Name"
                                                 placeholder="Enter Date"
                                                 name="username" 
                                                />
                                                
                                             <datalist id='username'>
                                             <option value="Jonas"/>
                                             <option value="Jonas1"/>
                                             <option value="Jonas2"/>
                                             <option value="Jonas3"/>
                                             <option value="Jonas4"/>
                                             </datalist>
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
                  </CContainer> :
                  <CButton onClick={()=>toggaleFun()} className='p-2' style={{width:'300px',marginLeft:'auto'}} color='primary'> <h5> Add Your Task</h5></CButton>}                   
          </CCard> 
                                             <CCol className='mt-4'>   
                                               <h5 >Filter Calender</h5>  
                                             <CCol style={{display:'flex'}}>
                                              <CFormInput
                                               className=""
                                               type="date"
                                               format="MM-dd-yyyy"
                                               value={filterDate}
                                               onChange={(e) => setFilterDate(e.target.value)}
                                               id="exampleFormControlInput1"
                                               placeholder="Enter Date"
                                               style={{width:'65%',fontSize:'20px'}}
                                                             />
                                              <CButton className='mx-2' onClick={clearFilter}>Clear Filter</CButton> 
                                            </CCol>                
                                             </CCol>      

      {console.log(filterDate)}                                                  

   { TaskData[0] ? TaskData.filter((el)=>{
    if(filterDate){
      return  el.date=== `${+filterDate.split("-")[2]}`&&
        el.month ===`${+filterDate.split("-")[1]}`&&
        el.year===`${+filterDate.split("-")[0]}`
    }
    if(!filterDate){
      return el

    }

    }
    ).map((el,i)=>{
    return <Calender 
         CurrentDate ={el.date}
         CurrentMonth={el.month-1}
         CurrentYear={el.year} 
         userInfo={el.userInfo}   
         size={el.userInfo.length}
         key={i}
         />
    }
    ): <h4 className='m-2' style={{color:'#f9b115'}}>No task allocated to match this search  please enter different date</h4>}

    </>                                  
  )
}

export default CreateTask
