import {CCard,CTable,CCol,CTableHead,CTableRow,CTableHeaderCell,
    CTableBody,CTableDataCell,CFormInput,CCardHeader,CCardTitle,CButton
 } from '@coreui/react'

 import { useSelector } from 'react-redux'
 import {useState,useEffect} from "react"
 import axios from 'axios'

 import { BsWhatsapp } from "react-icons/bs";
 import { MdCall, MdDelete, MdEdit, MdMail } from "react-icons/md";

function StockOrderList (){

    const url = useSelector((el)=>el.domainOfApi) 
    const [result1, setResult1] = useState([])
    

    useEffect(() => {
        getStockAssigning()
    }, [])

    function getStockAssigning() {
        axios.get(`${url}/stockorderlist`)
            .then((res) => {
                setResult1(res.data.reverse())
                console.log(res.data);
            })
            .catch((error) => {
                console.error(error)
            })
    }




    return (
        <CCard >
             <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                        <CCardTitle>Stock Order List</CCardTitle>
            </CCardHeader>
        
                    <CCol className='mt-2 p-4'>
                        <CButton className="float-end" > Add Stock Order List</CButton>
                    </CCol>
        
        
        <CTable className='mt-3 ' align="middle" bordered style={{ borderColor: "#0B5345",width:'150%' }} hover responsive>
                        <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                            <CTableRow >
                            <CTableHeaderCell>Sr No</CTableHeaderCell>
                                <CTableHeaderCell>Order date</CTableHeaderCell>
                                <CTableHeaderCell>Product Category</CTableHeaderCell>
                                <CTableHeaderCell>Product Name</CTableHeaderCell>
                                <CTableHeaderCell>Brand Name</CTableHeaderCell>
                                <CTableHeaderCell>Category</CTableHeaderCell>
                                <CTableHeaderCell>Product Prize</CTableHeaderCell>
                                <CTableHeaderCell>Orders Qty</CTableHeaderCell>
                                <CTableHeaderCell>Total Prize</CTableHeaderCell>
                                <CTableHeaderCell>Action</CTableHeaderCell>
                                <CTableHeaderCell>Edit/Delete</CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            <CTableRow>
                                <CTableDataCell>
                                    <CFormInput
                                        className="mb-1"
                                        style={{ minWidth: "60px" }}
                                        type="text"
                                        disabled
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />
                                </CTableDataCell>
                                <CTableDataCell>
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        style={{ minWidth: "120px" }}
                                        disabled
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />
                                </CTableDataCell>
                                <CTableDataCell>
                                    <CFormInput
                                        className="mb-1"
                                        style={{ minWidth: "120px" }}
                                        type="text"
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />
                                </CTableDataCell>
                                <CTableDataCell>
                                    <CFormInput
                                        className="mb-1"
                                        style={{ minWidth: "100px" }}
                                        type="text"
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />
                                </CTableDataCell>
                                <CTableDataCell>
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        style={{ minWidth: "200px" }}
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />
                                </CTableDataCell>
                                <CTableDataCell>
                                    <CFormInput
                                        className="mb-1"
                                        style={{ minWidth: "120px" }}
                                        type="text"
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />
                                </CTableDataCell>
                                <CTableDataCell>
                                    <CFormInput
                                        className="mb-1"
                                        style={{ minWidth: "120px" }}
                                        type="number"
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />
                                </CTableDataCell>
                                 <CTableDataCell>
                                    <CFormInput
                                        className="mb-1"
                                        style={{ minWidth: "120px" }}
                                        type="number"
                                        disabled
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />
                                </CTableDataCell>
                                <CTableDataCell>
                                    <CFormInput
                                        className="mb-1"
                                        style={{ minWidth: "120px" }}
                                        type="number"
                                        disabled
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />
                                </CTableDataCell>
                                <CTableDataCell>
                                    <CFormInput
                                        className="mb-1"
                                        style={{ minWidth: "120px" }}
                                        type="number"
                                        disabled
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />
                                </CTableDataCell>
                                <CTableDataCell>
                                    <CFormInput
                                        className="mb-1"
                                        style={{ minWidth: "120px" }}
                                        type="number"
                                        disabled
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />
                                </CTableDataCell>
                                
                            </CTableRow>
                            {result1.map((item, index) => (
                        <CTableRow key={index}>
                            <CTableDataCell>{index + 1 }</CTableDataCell>
                            <CTableDataCell>{item.Order_Date}</CTableDataCell>
                            <CTableDataCell>{item.Product_Category}</CTableDataCell>
                            <CTableDataCell>{item.Product_Name}</CTableDataCell>
                            <CTableDataCell>{item.Brand_Name}</CTableDataCell>
                            <CTableDataCell>{item.Category}</CTableDataCell>
                            <CTableDataCell>{item.Product_Price}</CTableDataCell>
                            <CTableDataCell>{item.Orders_Quantity}</CTableDataCell>    
                            <CTableDataCell>{item.Total_Price}</CTableDataCell>   
                            <CTableDataCell className='text-center'><a href={`tel:${item.mobile}`} target="_black"><MdCall style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`https://wa.me/${item.mobile}`} target="_black"><BsWhatsapp style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`mailto: ${item.email}`} target="_black"> <MdMail style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "4px" }} size='20px' /></a> </CTableDataCell>
                                <CTableDataCell className='text-center'><MdEdit id={item._id} style={{ fontSize: '35px', cursor: 'pointer', markerStart: '10px' }} size='20px' /> <MdDelete style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "5px" }}  size='20px' /></CTableDataCell>                                                   
                        </CTableRow>
                    ))}
                  
                          
                        </CTableBody>
                    </CTable>
        
        
        
        </CCard>
        
        )



}


export default StockOrderList
