import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import {
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CFormInput,
    CFormSelect,
    CInputGroup,
    CInputGroupText,
    CNav,
    CNavItem,
    CNavLink,
    CRow,
    CTabContent,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CTabPane,
} from '@coreui/react'


// form 
import FitnessMeasurmentForm from './form/FitnessMeasurmentForm'
import AllDietClientForm from './form/AllDietClientForm';
import DietPlanTempletForm from './form/DietPlanTempletForm';
import WorkoutTempletForm from './form/WorkoutTempletForm';
import ExerciseLbiiry from './form/ExerciseLibiry';
import DailyWorkoutScheduling from './form/DailyWorkoutScheduling';

// Tables
const MeasurementTable = React.lazy(() => import('./Tablels/MeasurmentTable'))
const ClientDietTable = React.lazy(() => import('./Tablels/ClientDietTable'))
const DietPlanTable = React.lazy(() => import('./Tablels/DietPlanTable'))
const WorkOutTempletTable = React.lazy(() => import('./Tablels/WorkOutTempletTable'))
const ExerciseLibiryTable = React.lazy(() => import('./Tablels/ExerciseLibiry'))
const DailyWorkoutSchedulingTable =  React.lazy(() => import('./Tablels/DailyWorkoutScheduling'))



const Fitness = () => {

    const [active, setActiveButton] = useState(1)
    // Forms 
    const [showForm, setForm] = useState(false)
    // Barriar Token 
    let user = JSON.parse(localStorage.getItem('user-info'))
    const token = user.token;

    const {id} = useParams()
    console.log(id)

    const closeFormFun = () => {
        setForm(() => false)
    }


    return (
        <CCard style={{ overflow: 'hidden' }}>

            <CNav variant="pills" role="tablist" style={{ background: '#0B5345' }}>
                <CNavLink className='m-2 p-2' style={{ color: 'white', cursor: 'pointer' }} active={active === 1} onClick={() => { setActiveButton(1), closeFormFun() }}>
                    Measurment
                </CNavLink >
                <CNavLink className='m-2 p-2' style={{ color: 'white', cursor: 'pointer' }} active={active === 2} onClick={() => { setActiveButton(2), closeFormFun() }}>
                    ALL Diet Client
                </CNavLink>
                <CNavLink className='m-2 p-2' style={{ color: 'white', cursor: 'pointer' }} active={active === 3} onClick={() => { setActiveButton(3), closeFormFun() }}>
                    Diet Plan Templet
                </CNavLink>
                <CNavLink className='m-2 p-2' style={{ color: 'white', cursor: 'pointer' }} active={active === 4} onClick={() => { setActiveButton(4), closeFormFun() }}>
                    Work out Templet
                </CNavLink>
                <CNavLink className='m-2 p-2' style={{ color: 'white', cursor: 'pointer' }} active={active === 5} onClick={() => { setActiveButton(5), closeFormFun() }}>
                    Exercise Libiry
                </CNavLink>
                <CNavLink className='m-2 p-2' style={{ color: 'white', cursor: 'pointer' }} active={active === 6} onClick={() => { setActiveButton(6), closeFormFun() }}>
                    Daily Workout Scheduling
                </CNavLink>
            </CNav >
            <CCol className='m-4 mt-1 p-4' style={{ position: 'relative' }}>
                <CButton style={{ position: 'absolute', right: '0' }} onClick={() => setForm((value) => !value)}>Add New</CButton>
            </CCol>
            {showForm && active === 1 ? <FitnessMeasurmentForm closeFormFun={closeFormFun} /> : ''}
            {showForm && active === 2 ? <AllDietClientForm closeFormFun={closeFormFun} /> : ''}
            {showForm && active === 3 ? <DietPlanTempletForm closeFormFun={closeFormFun} /> : ''}
            {showForm && active === 4 ? <WorkoutTempletForm closeFormFun={closeFormFun} /> : ''}
            {showForm && active === 5 ? <ExerciseLbiiry closeFormFun={closeFormFun} /> : ''}
            {showForm && active === 6 ? <DailyWorkoutScheduling closeFormFun={closeFormFun} /> : ''}


            {active === 1 && <MeasurementTable Token={token} />}
            {active === 2 && <ClientDietTable Token={token} />}
            {active === 3 && <DietPlanTable />}
            {active === 4 && <WorkOutTempletTable />}
            {active === 5 && <ExerciseLibiryTable />}           
            {active === 6 && <DailyWorkoutSchedulingTable/>}


        </CCard>
    )
}

export default Fitness
