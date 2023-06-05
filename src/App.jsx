import { useState } from 'react'
import DeletePost from './components/Delete'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './pages/Auth/SignIn'
import SignUp from './pages/Auth/SignUp'
import Timeline from './pages/Auth/Components/Timeline'
import UserProvider from './context/userContext'
function App() {

  return (
    <>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/delete' element={<DeletePost />} />
          <Route path = '/timeline' element={<Timeline/>}/>
        </Routes>
      </BrowserRouter>
      </UserProvider>
    </>
  )
}

export default App
