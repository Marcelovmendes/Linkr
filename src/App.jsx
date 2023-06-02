import { useState } from 'react'
import DeletePost from './components/Delete'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './pages/Auth/SignIn'
import SignUp from './pages/Auth/SignUp'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/delete' element={<DeletePost state={[count, setCount]}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
