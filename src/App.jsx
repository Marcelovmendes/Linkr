import { useState } from 'react'
import DeletePost from './components/Delete'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <DeletePost></DeletePost>
</>
  )
}

export default App
