import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './views/Home/Home.js'
import Profile from './views/Profile/Profile.js'
import PageNotFound from './views/PageNotFound/PageNotFound.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/user/:id" element={<Profile />}>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router >
    </div>
  );
}

export default App;
