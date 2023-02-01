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

function getDaysInMonth(month, year) {
  var date = new Date(year, month, 1);
  var days = [];
  while (date.getMonth() === month) {
    // console.log(date.getDate())
    days.push(date.getDate());
    date.setDate(date.getDate() + 1);
  }
  return days;
}


console.log(getDaysInMonth(1,2023))

// const columns = ['sun','Mon','Tue','Wed','Thu','Fri','Sat']
// const items = ['g','g','g','g']
const footer = getDaysInMonth(1,2023)


const daysInWeakPears = footer.map((el)=>footer.splice(0,7).filter((el)=>el)).filter((el)=>el)


const columns = [
    {
      key: 'id',
      label: 'Time',
      _props: { scope: 'col' },
    },
    {
      key: 'Jonas',
      _props: { scope: 'col' },
    },
    {
      key: 'heading_1',
      label: 'Heading',
      _props: { scope: 'col' },
    },
   {
      key: 'heading_2',
      label: 'Heading',
      _props: { scope: 'col' },
    },
    {
      key: 'heading_2',
      label: 'Heading',
      _props: { scope: 'col' },
    },
    {
      key: 'heading_2',
      label: 'Heading',
      _props: { scope: 'col' },
    },
]


const Time = ['7AM','8AM','9AM','10AM','11AM','1APM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM','9PM']

const StyleCalenderHead ={
  background:'#0B5345',
  height:'100px',
  color:'white',
  fontSize:'20px', 
  textAlign:'center',
  padding:'10px',
  gap:'0px',
}

const StyleCalenderHead2 ={
  minHeight:'150px',
  color:'black',
  fontSize:'20px', 
  textAlign:'center',
  padding:'10px',
  border:'1px solid black',
  borderTop:'none',
  lineHeight:'100px',
  minWidth:'100px' 
}


const Calender = () => {
  return (    
<CCard className="p-4 mt-5" style={{overflowX:'scroll'}}> 
    <CContainer style={{width:'1380px'}}>
  <CRow>
    <CCol >
      <CCol style={StyleCalenderHead} >Time</CCol>
      {Time.map((el)=> <CCol style={StyleCalenderHead2} >{el}</CCol>)}
    </CCol>

    <CCol>
      <CCol style={StyleCalenderHead}>Jonas</CCol>
      {Time.map((el)=> <CCol  style={StyleCalenderHead2}></CCol>)}
    </CCol>
    
    
    <CCol>
    <CCol  style={StyleCalenderHead}>Jonas1</CCol>
      {Time.map((el)=> <CCol style={StyleCalenderHead2} ></CCol>)}
    </CCol>
    
    <CCol>
    <CCol  style={StyleCalenderHead} >Jonas2</CCol>
      {Time.map((el)=> <CCol style={StyleCalenderHead2}  ></CCol>)}
    </CCol>

    <CCol>
    <CCol  style={StyleCalenderHead} >Jonas3</CCol>
      {Time.map((el)=> <CCol style={StyleCalenderHead2} ></CCol>)}
    </CCol>
    
  </CRow>
  
</CContainer>
    
</CCard>
  )
}

export default Calender
