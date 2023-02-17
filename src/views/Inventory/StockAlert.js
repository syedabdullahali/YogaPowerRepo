import {CCard,CTable,CCol,CTableHead,CTableRow,CTableHeaderCell,
    CTableBody,CTableDataCell,CFormInput,CCardHeader,CCardTitle,CButton
 } from '@coreui/react'

 import { useSelector } from 'react-redux'
 import {useState,useEffect} from "react"
 import axios from 'axios'

function StockAlert(){
 const url = useSelector((el)=>el.domainOfApi) 
    const [result1, setResult1] = useState([])
    

    useEffect(() => {
        getStockAssigning()
    }, [])

    function getStockAssigning() {
        axios.get(`${url}/stockalert`)
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
                <CCardTitle>Stock Alert</CCardTitle>
            </CCardHeader>

            <CCol className='mt-2 p-4'>
                <CButton className="float-end" > Add Stock Alert</CButton>
            </CCol>


<CTable className='mt-3 ' align="middle" bordered style={{ borderColor: "#0B5345",width:'150%' }} hover responsive>
                <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                    <CTableRow >
                    <CTableHeaderCell>Sr No</CTableHeaderCell>
                        <CTableHeaderCell>Product Category</CTableHeaderCell>
                        <CTableHeaderCell>Product Name</CTableHeaderCell>
                        <CTableHeaderCell>No of Products</CTableHeaderCell>
                        <CTableHeaderCell>Brand Name</CTableHeaderCell>
                        <CTableHeaderCell>Total Stock</CTableHeaderCell>
                        <CTableHeaderCell>Use Stock</CTableHeaderCell>
                        <CTableHeaderCell>Avaible Stock </CTableHeaderCell>
                        <CTableHeaderCell>Alrt Stock</CTableHeaderCell>
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
                    
                        
                    </CTableRow>
                    {result1.map((item, index) => (
                        <CTableRow key={index}>
                            <CTableDataCell>{index + 1 }</CTableDataCell>
                            <CTableDataCell>{item.Category}</CTableDataCell>
                            <CTableDataCell>{item.Product_Name}</CTableDataCell>
                            <CTableDataCell>{item.No_Of_Products}</CTableDataCell>
                            <CTableDataCell>{item.Brand_Name}</CTableDataCell>
                            <CTableDataCell>{item.Total_Stock}</CTableDataCell>
                            <CTableDataCell>{item.Use_Stock}</CTableDataCell>
                            <CTableDataCell>{item.Available_Stock}</CTableDataCell>    
                            <CTableDataCell>{item.Alert_Stock}</CTableDataCell>                                                   
                        </CTableRow>
                    ))}
                  
                </CTableBody>
            </CTable>



</CCard>

)

}


export default StockAlert