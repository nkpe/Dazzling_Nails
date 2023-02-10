import './App.css';
import React from 'react';
import {Outlet} from 'react-router-dom';

import Header from './components/static/Header';
import Footer from './components/static/Footer';

function App() {
  return (
    <>
      <Header />
      <main id="page-container">
        <Outlet />
      </main>
      <Footer />
    </>
      
  );
}

export default App;
