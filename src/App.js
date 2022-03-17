import React from 'react';
import { Route, Routes} from 'react-router-dom';
import './App.css';
import Navigation from './routes/navigaation/navigation.component';
import Home from './routes/home/home.component';
import SignIn from './routes/signin/signin.component';


const Shop = () => (
  <div>I am the shop page</div>
)

const App =()=> {
  
  
  
  return (
    <Routes>
    <Route path='/' element={<Navigation/>} >
      <Route index  element={<Home/>} />
      <Route path = 'shop' element={<Shop/>} />
      <Route path = 'sign-in' element={<SignIn/>} />
    </Route>
    </Routes>
  )
  
}

export default App;