import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CForm,
    CFormInput,
    CFormSelect,
    CPagination,
    CPaginationItem,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CToast,
    CToastBody,
    CToastClose,
} from "@coreui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { MdCall, MdDelete, MdEdit, MdMail } from "react-icons/md";
import { useSelector } from 'react-redux'


const AllSuppilerList = () => {

    const url = useSelector((el)=>el.domainOfApi)  

    
    const [action, setAction] = useState(false)
    const [toast, setToast] = useState(false)
    const [id, setId] = useState()

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [category, setCategory] = useState('');
    const [address, setAddress] = useState('');
    const [company, setCompany] = useState('');
    const [result1, setResult1] = useState([])

    const [search1, setSearch1] = useState('')
    const [search2, setSearch2] = useState('')
    const [search3, setSearch3] = useState('')
    const [search4, setSearch4] = useState('')
    const [search5, setSearch5] = useState('')
    const [search6, setSearch6] = useState('')
    const [search7, setSearch7] = useState('')
    const [search8, setSearch8] = useState('')
    const [search9, setSearch9] = useState('')
    const [search10, setSearch10] = useState('')

    let user = JSON.parse(localStorage.getItem('user-info'))
    console.log(user);
    const token = user.token;
    const username = user.user.username;
    const [paging, setPaging] = useState(0);
    useEffect(() => {
        getImpCall()
    }, [])





    function getImpCall() {
        axios.get(`${url}/clothes`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                setResult1(res.data.reverse())
                console.log(res.data);
            })
            .catch((error) => {
                console.error(error)
            })
    }

    const saveImpCall = () => {
        let data = {
            username: username, productCode: result1.length,
            productName: name, brandName: phone, category: email, color: category, productPrice: address, totalStock: company, available: company,
        }

        fetch(`${url}/clothes`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((resp) => {
            resp.json().then(() => {
                setToast(true)
                setAction(false)
            })
        })
    }

    const saveUpdate = () => {
        let data1 = {
            username: username, 
            productCode: result1.length,
            productName: name,
            brandName: phone,
            category: email, 
            color: category,
            productPrice: address,
            totalStock: company,
            available: company,
            sold: 0,

            
        }

        fetch(`${url}/clothes/${id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1)
        }).then((resp) => {
            resp.json().then(() => {
                alert("successfully submitted")
                setVisible(false)
            })
        })
    }

    function deleteCall(id) {

        if (confirm('Do you want to delete this')) {
            fetch(`${url}/clothes/${id}`, {
                method: 'DELETE',
                headers: {
                    "Authorization": `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then((result) => {
                result.json().then(() => {
                    getImpCall()
                })
            })
        }
    }

    const handleUpdate = (id) => {
        setId(id)
        getUpdate(id)
    }
    const clear = () => {
        setId('')
        setName('')
        setPhone('')
        setEmail('')
        setCategory('')
        setAddress('')
        setCompany('')
    }

    function getUpdate(id) {
        axios.get(`${url}/clothes/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                setName(res.data.Product_Name)
                setPhone(res.data.Brand_Name)
                setEmail(res.data.Category)
                setCategory(res.data.Color)
                setAddress(res.data.Price)
                setCompany(res.data.Total_Stock)
                setAction(true)
            })
            .catch((error) => {
                console.error(error)
            })
    }
    return (
        <CRow className='d-flex mb-2'>
            <CCol lg={9} sm={6} className='mb-2'>
                <CToast autohide={true} visible={toast} color='success' className="align-items-center">
                    <div className="d-flex">
                        <CToastBody style={{ color: 'white' }}>Successfully Submitted.</CToastBody>
                        <CToastClose className="me-2 m-auto" />
                    </div>
                </CToast>
            </CCol>
            <CCol lg={3} sm={6} className='mb-2'>
                <CButton className="float-end" onClick={() => { setAction(!action), clear() }}>{action ? 'Close' : 'Add Clothes Product'}</CButton>
            </CCol>
            {action &&

                <CCard className="mt-2 mb-2" >
                    <CCardBody>
                        <CForm>
                            <CRow>
                                <CCol lg={3} sm={6} >
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        id="exampleFormControlInput1"
                                        label="Product Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Enter Name"
                                    />
                                </CCol>
                                <CCol lg={3} sm={6} >
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        id="exampleFormControlInput1"
                                        label="Brand Name"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="Enter Brand Name"
                                    />
                                </CCol>
                                <CCol lg={3} sm={6}>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Category"
                                        label="Stock Category"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        options={[
                                            "Select Category",
                                            { label: "Small Size", value: "Small Size" },
                                            { label: "L Size", value: "L Size" },
                                        ]}
                                    />
                                </CCol>
                                <CCol lg={3} sm={6} >
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        id="exampleFormControlInput1"
                                        label="Colour"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        placeholder="Enter Colour"
                                    />
                                </CCol>

                                <CCol lg={3} sm={6} >
                                    <CFormInput
                                        className="mb-1"
                                        type="number"
                                        id="exampleFormControlInput1"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        label="Price"
                                        placeholder="Enter Price"
                                    />
                                </CCol>

                                <CCol lg={3} sm={6} >
                                    <CFormInput
                                        className="mb-1"
                                        type="number"
                                        id="exampleFormControlInput1"
                                        value={company}
                                        onChange={(e) => setCompany(e.target.value)}
                                        label="Total Stock"
                                        placeholder="Enter Total Stock"
                                    />
                                </CCol>
                                




                                <CCol className="mt-4">
                                    {id
                                        ?
                                        <CButton onClick={() => saveUpdate()} >update</CButton>
                                        :
                                        <CButton onClick={() => { saveImpCall() }} >Save</CButton>
                                    }
                                </CCol>
                            </CRow>
                        </CForm>
                    </CCardBody>
                </CCard>
            }
            <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} hover responsive>
                <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                    <CTableRow >
                        <CTableHeaderCell>Sr.No</CTableHeaderCell>
                        <CTableHeaderCell>Product Code</CTableHeaderCell>
                        <CTableHeaderCell>Product Name</CTableHeaderCell>
                        <CTableHeaderCell>Brand Name</CTableHeaderCell>
                        <CTableHeaderCell>Category</CTableHeaderCell>
                        <CTableHeaderCell>Colour</CTableHeaderCell>
                        <CTableHeaderCell>Price</CTableHeaderCell>
                        <CTableHeaderCell>TOtal Stock</CTableHeaderCell>
                        <CTableHeaderCell>Sold</CTableHeaderCell>
                        <CTableHeaderCell>AVL Stock</CTableHeaderCell>
                        <CTableHeaderCell>Sold By</CTableHeaderCell>
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
                                value={search1}
                                disabled
                                onChange={(e) => setSearch1(e.target.value)}
                                aria-describedby="exampleFormControlInputHelpInline"
                            />
                        </CTableDataCell>
                        <CTableDataCell>
                            <CFormInput
                                className="mb-1"
                                style={{ minWidth: "120px" }}
                                value={search2}
                                onChange={(e) => setSearch2(e.target.value)}
                                type="text"
                                aria-describedby="exampleFormControlInputHelpInline"
                            />
                        </CTableDataCell>
                        <CTableDataCell>
                            <CFormInput
                                className="mb-1"
                                style={{ minWidth: "100px" }}
                                value={search3}
                                onChange={(e) => setSearch3(e.target.value)}
                                type="text"
                                aria-describedby="exampleFormControlInputHelpInline"
                            />
                        </CTableDataCell>
                        <CTableDataCell>
                            <CFormInput
                                className="mb-1"
                                type="text"
                                style={{ minWidth: "200px" }}
                                value={search4}
                                onChange={(e) => setSearch4(e.target.value)}
                                aria-describedby="exampleFormControlInputHelpInline"
                            />
                        </CTableDataCell>
                        <CTableDataCell>
                            <CFormInput
                                className="mb-1"
                                style={{ minWidth: "120px" }}
                                value={search5}
                                onChange={(e) => setSearch5(e.target.value)}
                                type="text"
                                aria-describedby="exampleFormControlInputHelpInline"
                            />
                        </CTableDataCell>
                        <CTableDataCell>
                            <CFormInput
                                className="mb-1"
                                style={{ minWidth: "120px" }}
                                value={search6}
                                onChange={(e) => setSearch6(e.target.value)}
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
                                value={search7}
                                onChange={(e) => setSearch7(e.target.value)}
                                aria-describedby="exampleFormControlInputHelpInline"
                            />
                        </CTableDataCell>
                        <CTableDataCell>
                            <CFormInput
                                className="mb-1"
                                type="number"
                                style={{ minWidth: "120px" }}
                                disabled
                                value={search8}
                                onChange={(e) => setSearch8(e.target.value)}
                                aria-describedby="exampleFormControlInputHelpInline"
                            />
                        </CTableDataCell>
                        <CTableDataCell>
                            <CFormInput
                                className="mb-1"
                                type="number"
                                style={{ minWidth: "120px" }}
                                disabled
                                value={search9}
                                onChange={(e) => setSearch9(e.target.value)}
                                aria-describedby="exampleFormControlInputHelpInline"
                            />
                        </CTableDataCell>
                        <CTableDataCell>
                            <CFormInput
                                className="mb-1"
                                type="text"
                                style={{ minWidth: "120px" }}
                                disabled
                                value={search10}
                                onChange={(e) => setSearch10(e.target.value)}
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
                                type="text"
                                style={{ minWidth: "120px" }}
                                disabled
                                aria-describedby="exampleFormControlInputHelpInline"
                            />
                        </CTableDataCell>
                   
                    </CTableRow>
                 
                    {result1.slice(paging * 10, paging * 10 + 10).map((item, index) => (
                        <CTableRow key={index}>
                            <CTableDataCell>{index + 1 + (paging * 10)}</CTableDataCell>
                            <CTableDataCell>{item.Product_Code}</CTableDataCell>
                            <CTableDataCell>{item.Product_Name}</CTableDataCell>
                            <CTableDataCell>{item.Brand_Name}</CTableDataCell>
                            <CTableDataCell>{item.Category}</CTableDataCell>
                            <CTableDataCell>{item.Color}</CTableDataCell>
                            <CTableDataCell>{item.Price}</CTableDataCell>
                            <CTableDataCell>{item.Total_Stock}</CTableDataCell>
                            <CTableDataCell>{item.Sold}</CTableDataCell>
                            <CTableDataCell>{item.Available_Stock}</CTableDataCell>
                            <CTableDataCell>{item.Sold_By}</CTableDataCell>
                            <CTableDataCell className='text-center'><a href={`tel:${item.mobile}`} target="_black"><MdCall style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`https://wa.me/${item.mobile}`} target="_black"><BsWhatsapp style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`mailto: ${item.email}`} target="_black"> <MdMail style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "4px" }} size='20px' /></a> </CTableDataCell>
                            <CTableDataCell className='text-center'><MdEdit id={item._id} style={{ fontSize: '35px', cursor: 'pointer', markerStart: '10px' }} onClick={() => handleUpdate(item._id)} size='20px' /> <MdDelete style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "5px" }} onClick={() => deleteCall(item._id)} size='20px' /></CTableDataCell>
                        </CTableRow>
                    ))}
                </CTableBody>
            </CTable>

        </CRow>

    );
};


export default AllSuppilerList;