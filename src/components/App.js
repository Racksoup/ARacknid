import React from 'react';
import './App.scss';
import { store } from '../redux/store';
import Landing from './Landing/Landing.jsx';

import { Provider } from 'react-redux';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Provider store={store}>
          <Routes>
            <Route path='/' element={<Landing />} />
          </Routes>
        </Provider>
      </div>
    </Router>
  );
};

export default App;
