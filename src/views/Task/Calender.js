import { CTable,CCard,CTableHead,CTableRow,CTableHeaderCell,CTableBody,CTableDataCell,CContainer,CRow,CCol} from "@coreui/react";

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


const Time = ['7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM','8 PM','9 PM']

const StyleCalenderHead ={
  background:'#0B5345',
  minHeight:'70px',
  color:'white',
  fontSize:'20px', 
  textAlign:'center',
  padding:'10px',
  gap:'0px',
  borderRight:'1px solid white',
  minWidth:'100px' 
}

const StyleCalenderHead2 ={
  minHeight:'150px',
  color:'black',
  fontSize:'20px', 
  textAlign:'center',
  padding:'10px',
  borderRight:'1px solid black',
  borderBottom:'1px solid black',
  lineHeight:'100px',
  minWidth:'100px' 
}

const Calender = ({CurrentDate,CurrentMonth,CurrentYear,userInfo,size}) => {

  const width  = size>3?120+(size*10):100 


  return (    
 <CCard className="p-4 mt-4" style={{overflow:'scroll'}}> 
    <CContainer style={{minWidth:'700px',maxWidth:'10000000000000000000000000000000px',width:`${width}%`,cuiGutterX:"0rem",border:'1px solid',padding:'0'}}>
      <CRow xs={{ gutterX: 0 }}>
      <CCol style={{...StyleCalenderHead,borderBottom:'1px solid white'}} ><h2>{`${+CurrentDate} ${monthNames[+CurrentMonth]} ${CurrentYear} `}</h2></CCol>
      </CRow>
  <CRow xs={{ gutterX: 0 }}>
    <CCol style={{flex:"0"}} >
      <CCol style={{...StyleCalenderHead,borderBottom:'1px solid white'}} >Time</CCol>
      {Time.map((el)=> 
      <CCol style={{...StyleCalenderHead2,...{color:'white',background:'#0B5345',borderBottom:'1px solid white',minWidth:'100px'}}} >{el.split(" ").join("")}</CCol>)}
    </CCol>

     {userInfo.map((el,i)=>{
      return <CCol >
      <CCol style={StyleCalenderHead}>{el.userName}</CCol>
      {Time.map((el2)=>{         
        if(+el2.split(" ")[0]=== +el.userTime[0]  && el2.includes('AM')){
          console.log(el.selectedTask)
         return  <CCol  style={StyleCalenderHead2}>{  ("Time " + el.userTime[0] +":" + el.userTime[1]  +"AM" + " " +  el.selectedTask)}</CCol>
        }
        
        if(+el2.split(" ")[0]+12=== +el.userTime[0] && el2.includes('PM')){
          return  <CCol  style={StyleCalenderHead2}>{  ("Time " + (el.userTime[0]-12) + ":" + el.userTime[1] +"PM"  + " " + el.selectedTask)}</CCol>

        }
        return  <CCol  style={StyleCalenderHead2}></CCol>


      })}
      
    </CCol>
     })}
  </CRow>  
</CContainer>
    
</CCard>
  )
}

export default Calender
