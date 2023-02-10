import './App.css';
import React, { useState } from 'react';
import {Outlet} from 'react-router-dom';

import Header from './components/static/Header';
import Footer from './components/static/Footer';

function App() {
  //responsiveness State for mobile
  const [screenMobile, setScreenMobile] = useState(null);

  const screenUpdate = () => {
      window.innerWidth <= 450 ? setScreenMobile(true) : setScreenMobile(false);
  }

  window.addEventListener('resize', screenUpdate)
  window.addEventListener('load', screenUpdate)

  return (
    <>
      <Header screenMob={screenMobile} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
      
  );
}

export default App;
