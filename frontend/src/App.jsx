import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import LoginAdmin from './Components/LoginAdmin'
import RegisterUser from './Components/RegisterUser'
import LoginUser from './Components/LoginUser'
import PersonalDetails from './Components/PersonalDetails'
import EducationalDetails from './Components/EducationalDetails'
import ExperienceDetails from './Components/ExperienceDetails'
import UploadFiles from './Components/UploadFiles'
import InfoPage from './Components/InfoPage'
function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginAdmin />} />
        <Route path='/register' element={<RegisterUser />}></Route>
        <Route path='/login' element={<LoginUser />}></Route>
        <Route path='/personaldetails' element={<PersonalDetails />}></Route>
        <Route path='/educationdetails' element={<EducationalDetails />}></Route>
        <Route path='/experiencedetails' element={<ExperienceDetails />}></Route>
        <Route path='/uploadfiles' element={<UploadFiles />}></Route>
        <Route path='/info' element={<InfoPage />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
