import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import {Routes,Route} from 'react-router-dom';
import Player from './pages/Player';
import PreventAccess from './pages/PreventAccess';


const App = () => {
  return (
    <div>
      <Routes>

        <Route path='/' element={<PreventAccess />}>
         <Route path='/' element={<Home />}></Route>
        </Route>

         <Route path='/login' element={<Login />}></Route>
         <Route path='/signup' element={<Signup />}></Route>
         <Route path='/player/:id' element={<Player />}></Route>

      </Routes>
    </div>
  )
}

export default App

