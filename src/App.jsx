import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Homepage from './Homepage';

function App() {

  return (
    <div className=" py-4 h-[100vh] bg-cover bg-center bg-[url('https://images.pexels.com/photos/847402/pexels-photo-847402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]">
    <Navbar/>
    <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      </div>
  )
}

export default App
