import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Cadastro from './Pages/Cadastro';
import List from './Pages/List';


ReactDOM.render(
      <React.StrictMode>
        <Router>
          <div className="Content">
            <Routes >
              <Route path='/' element={<Cadastro/>} />
              <Route path="/List" element={<List/>} />
            </Routes >
          </div>
        </Router>
      </React.StrictMode>,
  document.getElementById('root')
);