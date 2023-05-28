import { Route, Routes } from 'react-router-dom'
import LoginScreen from './components/LoginScreen/Login.jsx'
import Department from './components/Department/Department.jsx'
import Employee from './components/Employee/Employee.jsx'
import Navigation from './components/Navigation/Navigation.jsx'
import './index.scss'

export default function App() {

  return (
    <>
      <div className='body-flex'>
        <Navigation />

        <Routes>
          <Route path='/' element={ <LoginScreen />}/>
          <Route path='/Department' element={ <Department />}/>
          <Route path='/Employee' element={ <Employee />}/>
        </Routes>
      </div>
    </>
  )
}


