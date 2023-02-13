import React from 'react'
import {
  CAvatar,
  CBadge,
  CButton,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNavLink,
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
  cilUserPlus,
  cilClock,
  cilCalendarCheck,
  cilFingerprint,
  cilLinkAlt,
  cilEnvelopeClosed,
  cilBasket
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import avatar8 from './../../assets/images/avatars/8.jpg'
import { Link, useNavigate } from 'react-router-dom'

const AppHeaderDropdown = () => {
  const navigate = useNavigate()
  const Logout = () => {
    localStorage.clear()
    navigate('/login')
  }

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
      
       
        
       
        <CDropdownItem href="#">
          <CIcon icon={cilUser} className="me-2" />
          Profile
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilSettings} className="me-2" />
          Settings
        </CDropdownItem>
       
        
        <CDropdownDivider />
        <CDropdownItem href="#" onClick={Logout} >
          <CIcon icon={cilLockLocked} className="me-2" />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}


const AppHeaderDropdownForm = () => {
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CIcon icon={cilUserPlus} size="lg" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">

        <CDropdownItem href="#">
          <Link style={{ textDecoration: 'none' }} to="/forms/enquiry-form">
            <CIcon icon={cilBell} className="me-2"
              tabIndex={-1}
            />
            Enquiry
          </Link>
        </CDropdownItem>
        <CDropdownItem href="#">
          <Link style={{ textDecoration: 'none' }} to="/forms/member-form">
            <CIcon icon={cilEnvelopeOpen} className="me-2" tabIndex={-1} />
            Member
          </Link>
        </CDropdownItem>
        <CDropdownItem href="#">

          <Link style={{ textDecoration: 'none' }} to="/forms/staff-form">
            <CIcon icon={cilTask} className="me-2" />
            Recruitment
          </Link>
        </CDropdownItem>
       
        <CDropdownItem>
            
          <Link style={{ textDecoration: 'none' }} to='/voucher/expense' >
          <CIcon icon={cilUser} className="me-2" />
          Expense
          </Link>

        </CDropdownItem>
        <CDropdownItem href="#">
          <Link style={{ textDecoration: 'none' }} to="/forms/invoice">
            <CIcon icon={cilCreditCard} className="me-2" />
            Invoice
          </Link>
        </CDropdownItem>
        <CDropdownItem href="#">
        <Link style={{ textDecoration: 'none' }} to="/forms/support">
          <CIcon icon={cilFile} className="me-2" />
          Support
        </Link>
        </CDropdownItem>


        <CDropdownItem href="#">

          {console.log(window.location.pathname)}

       <Link style={{ textDecoration: 'none' }} to="/message/reminder" >

          <CIcon icon={cilEnvelopeClosed} className="me-2" />
            Reminder Message
        </Link>
 
        </CDropdownItem>

        <CDropdownDivider />
      </CDropdownMenu>
    </CDropdown>
  )
}

const AppHeaderDropdownBook = () => {
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CIcon icon={cilClock} size="lg" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">

        <CDropdownItem href="#">
          <Link style={{ textDecoration: 'none' }} to="/forms/live-class">
            <CIcon icon={cilBell} className="me-2"
              tabIndex={-1}
            />
            Live Classes
          </Link>
        </CDropdownItem>
        <CDropdownItem href="#">
          <Link style={{ textDecoration: 'none' }} to="/forms/offline-class">
            <CIcon icon={cilEnvelopeOpen} className="me-2" tabIndex={-1} />
            Offline Batch
          </Link>
        </CDropdownItem>
        <CDropdownItem href="#">
          <Link style={{ textDecoration: 'none' }} to="/forms/pt-class">
            <CIcon icon={cilTask} className="me-2" />
            PT Classes
          </Link>
        </CDropdownItem>
        <CDropdownItem href="#">
          <Link style={{ textDecoration: 'none' }} to="/forms/ttc">
            <CIcon icon={cilCommentSquare} className="me-2" />
            TTC
          </Link>
        </CDropdownItem>
        <CDropdownItem href="#">
          <Link style={{ textDecoration: 'none' }} to="/forms/event">
            <CIcon icon={cilCommentSquare} className="me-2" />
            Event
          </Link>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilUser} className="me-2" />
          Venue
        </CDropdownItem>
        <CDropdownDivider />
      </CDropdownMenu>
    </CDropdown>
  )
}


const AppHeaderDropdownCheckIn = () => {
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CIcon icon={cilFingerprint} size="lg" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">

        <CDropdownItem href="#">
          <Link style={{ textDecoration: 'none' }} to="/forms/client-checkin">
            <CIcon icon={cilBell} className="me-2"
              tabIndex={-1}
            />
            Client CheckIn
          </Link>
        </CDropdownItem>
        <CDropdownItem href="#">
          <Link style={{ textDecoration: 'none' }} to="/forms/staff-checkin">
            <CIcon icon={cilEnvelopeOpen} className="me-2" tabIndex={-1} />
            Employee CheckIn
          </Link>
        </CDropdownItem>
        <CDropdownDivider />
      </CDropdownMenu>
    </CDropdown>
  )
}
const AppHeaderDropdownBasket= () => {
  return (
    <CDropdown variant="nav-item">

 
  <Link style={{ textDecoration: 'none',color:'GrayText' }} to="/card/invoice">
  <CIcon icon={cilBasket} size="lg" />
  </Link>
      
    </CDropdown>
  )
}

const AppHeaderDropdownLink = () => {
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CIcon icon={cilLinkAlt} size="lg" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">

        <CDropdownItem href="#">
          <Link style={{ textDecoration: 'none' }} to="/forms/enquiry-form">
            <CIcon icon={cilBell} className="me-2"
              tabIndex={-1}
            />
            Feedback Link
          </Link>
        </CDropdownItem>
        <CDropdownItem href="#">
          <Link style={{ textDecoration: 'none' }} to="/forms/member-form">
            <CIcon icon={cilEnvelopeOpen} className="me-2" tabIndex={-1} />
            Google Review Link
          </Link>
        </CDropdownItem>
        <CDropdownItem href="#">
          <Link style={{ textDecoration: 'none' }} to="/forms/member-form">
            <CIcon icon={cilEnvelopeOpen} className="me-2" tabIndex={-1} />
            Payment Link
          </Link>
        </CDropdownItem>
        <CDropdownItem href="#">
          <Link style={{ textDecoration: 'none' }} to="/forms/member-form">
            <CIcon icon={cilEnvelopeOpen} className="me-2" tabIndex={-1} />
            Social Media Link
          </Link>
        </CDropdownItem>
        <CDropdownDivider />
      </CDropdownMenu>
    </CDropdown>
  )
}

export { AppHeaderDropdown, AppHeaderDropdownForm, AppHeaderDropdownBook, AppHeaderDropdownCheckIn, AppHeaderDropdownLink,AppHeaderDropdownBasket }
