import { useState } from 'react'
import { AuthPage } from './components/AuthPage';

function App() {
  const [isRegister, setIsRegister] = useState(false)

  return (
    <div className='flex justify-center items-center h-screen'>
      <AuthPage isRegister={isRegister} setIsRegister={setIsRegister} />
    </div>  
  )
}

export default App
