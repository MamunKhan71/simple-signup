import { useState } from 'react'
import SignUp from './components/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-96 mx-auto'>
      <SignUp/>
    </div>
  )
}

export default App
