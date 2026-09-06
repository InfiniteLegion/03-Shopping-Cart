import { Outlet } from 'react-router'
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import { useState } from 'react'

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="app">
      <NavBar cartItems={cartItems} />

      <Outlet
        context={{ cartItems, setCartItems }}
      />
    </div>
  );
}

export default App