import { AuthPage } from './components/AuthPage';

function App() {
  const currentURL = window.location.href;
  const isRegister = currentURL.includes('registro');

  return (
    <div className='flex justify-center items-center h-screen'>
      <AuthPage isRegister={isRegister} />
    </div>  
  )
}

export default App
