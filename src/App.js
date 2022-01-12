import React from 'react'

import './App.css';
// import Recipe from './components/Recipe';
// import Form from './components/Form';
import { BrowserRouter,Route ,Routes} from 'react-router-dom';
import Data from './components/Data';
import Food from './components/Food';
import Header from './components/Header';
function App() {

  return (
    
    <BrowserRouter>
    
    <Header/>
    <div>
      <Routes >
      {/* <Route path="/" element={<Data />} exact/> */}
      <Route path="/food" element={<Food />} exact/>
      
      </Routes>
    </div>

    </BrowserRouter>
    
  )
}

export default App;
