import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';

function App() {
  return (
    // BEM
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/checkout' element={<>
            <Checkout/>
          </>}/>
          <Route path='/' element={<>
            <Home/>
          </>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
