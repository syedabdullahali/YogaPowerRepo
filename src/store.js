import { createStore } from 'redux'

const initialState = {
  sidebarShow: true,
  domainOfApi:'https://yoga-power-api.vercel.app',
  alllClientData:[]
}

let user = JSON.parse(localStorage.getItem('user-info'))
const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
     return state
  }  
}




const store = createStore(changeState)



export default store
