import './App.css';
import React from 'react';
import {Outlet} from 'react-router-dom';

import Header from './components/static/Header';
import Footer from './components/static/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
      
  );
}

export default App;
