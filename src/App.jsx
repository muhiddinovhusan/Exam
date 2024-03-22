import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import './App.css'
import Product from './components/Product/Product'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add/Add';
import Edit from './components/Edit/Edit';


const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>

        <Sidebar />
    

        <Routes>
          <Route path='/' element={<Product />}  />
          <Route path='/Add' element={<Add/>}/> 
          <Route path='/edit/:id' element={<Edit />}/>
        </Routes>
     
      </BrowserRouter>
    </div>
  )
}

export default App