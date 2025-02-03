import { configureStore } from '@reduxjs/toolkit'
// import InputComponentValReducer from './InputComponent/InputComponentVal'
// import RadioComponentValsReducer from './InputComponent/RadioComponentVals'
// import DetailNavReducer from './PeopleDetail/DetailNav'
import MenuReducer from './common/Menu'
// import OrganizationNaviReducer from './Organization/OrganizationNavi'

export const Store = configureStore({
  reducer:{
    // InputComponentVal : InputComponentValReducer,
    // RadioComponentVals : RadioComponentValsReducer,
    // DetailNav : DetailNavReducer,
    Menu: MenuReducer,
    // OrganizationNavi: OrganizationNaviReducer
  }
})