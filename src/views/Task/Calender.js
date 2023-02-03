import { CTable,CCard,CTableHead,CTableRow,CTableHeaderCell,CTableBody,CTableDataCell,CContainer,CRow,CCol} from "@coreui/react";

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


const d = new Date();
document.write("The current month is " + monthNames[d.getMonth()]);

// **
//  * @param {int} The month number, 0 based
//  * @param {int} The year, not zero based, required to account for leap years
//  * @return {Date[]} List with date objects for each day of the month
//  */

// function getDaysInMonth(month, year) {
//   var date = new Date(year, month, 1);
//   var days = [];
//   while (date.getMonth() === month) {
//     // console.log(date.getDate())
//     days.push(date.getDate());
//     date.setDate(date.getDate() + 1);
//   }
//   return days;
// }


// console.log(getDaysInMonth(1,2023))

// const footer = getDaysInMonth(1,2023)


// const daysInWeakPears = footer.map((el)=>footer.splice(0,7).filter((el)=>el)).filter((el)=>el)




const Time = ['7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM','8 PM','9 PM']

const StyleCalenderHead ={
  background:'#0B5345',
  minHeight:'70px',
  color:'white',
  fontSize:'18px', 
  textAlign:'center',
  padding:'10px',
  gap:'0px',
  borderRight:'1px solid white',
  minWidth:'100px' 
}

const StyleCalenderHead2 ={
  height:'250px',
  color:'black',
  fontSize:'18px', 
  textAlign:'center',
  padding:'10px',
  borderRight:'1px solid black',
  borderBottom:'1px solid black',
  minWidth:'100px', 
  overflowY:'scroll'
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
      <CCol style={{...StyleCalenderHead2,...{color:'white',background:'#0B5345',borderBottom:'1px solid white',minWidth:'100px',overflow:'hidden'}}} >{el.split(" ").join("")}</CCol>)}
    </CCol>

     {userInfo.map((el,i)=>{
      return <CCol >
      <CCol style={StyleCalenderHead}>{el.userName}</CCol>
      {Time.map((el2)=>{         
                  console.log( +el2.split(" ")[0] ,el.selectedTask )

        if(+el2.split(" ")[0]=== +el.userTime[0]  && el2.includes('AM')){
         return  <CCol  style={StyleCalenderHead2}> <p ><b><u>{"Time " + el.userTime[0] +":" + el.userTime[1]  +" AM"  }</u></b> {el.selectedTask}</p></CCol>
        }
        if(+el2.split(" ")[0]+12=== +el.userTime[0] && el2.includes('PM')){
          return  <CCol  style={StyleCalenderHead2}><p><b><u>{"Time " + (el.userTime[0]-12) + ":" + el.userTime[1] +" PM"  }</u></b> {el.selectedTask}</p></CCol>

        }else if(12=== +el.userTime[0] && el2.includes('PM')   && 12===+el2.split(" ")[0]){
          return  <CCol  style={StyleCalenderHead2}><p> <b><u>{"Time " + (el.userTime[0]) + ":" + el.userTime[1] +" PM"  }</u></b> {el.selectedTask}</p></CCol>

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
