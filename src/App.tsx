import React from 'react';

import './App.css';
import NavBar from './components/navbar';
import {BrowserRouter ,Routes,Route } from 'react-router-dom'
import Home from './pages/Home';
import Deposit from './pages/Deposit';
import Transfer from './pages/transfer';
import Withdraw from './pages/widthdraw';
import SignOut from './pages/signout';
import SignIn from './pages/signIn';
import SignUp from './pages/signup';

function App() {
  return (
    <div className='w-full h-screen bg-slate-300'>
      <NavBar />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/deposit' element={<Deposit />} />
        <Route path='/transfer' element={<Transfer />} />
        <Route path='/withdraw' element={<Withdraw />} />
        <Route path='/signout' element={<SignOut />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
