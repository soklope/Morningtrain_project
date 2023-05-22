import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import LoginScreen from './components/LoginScreen/Login'
import Department from './components/Department/Department'
import Employee from './components/Employee/Employee'
import Navigation from './components/Navigation/Navigation'
<<<<<<< HEAD
import Profile from './components/Navigation/Profile'
import EmployeeList from './components/Employee/EmployeeList'
import './Styling/GlobalColors.scss'
import './Styling/Navigation.scss'
import './Styling/LoginScreen.scss'
=======
import './index.scss'
>>>>>>> a3b47053600b0e5973e1f469c048bcd0df26dff7

export default function App() {


  return (
    <>
      <Navigation />

      <Routes>
        <Route path='/' element={ <LoginScreen />}/>
        <Route path='/Department' element={ <Department />}/>
        <Route path='/Employee' element={ <Employee />}/>
      </Routes>
    </>
  )
}


