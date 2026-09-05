import { Outlet } from 'react-router'
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'

function App() {
  

  return (
    <div className='app'>
      <NavBar />

      <Outlet />
    </div>
  )
}

export default App