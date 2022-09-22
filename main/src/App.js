import './App.css';
import {Outlet} from 'react-router-dom';

import Header from './components/static/Header';
import Footer from './components/static/Footer';

function App() {
  return (
    <div id="wrapper">
      <Header />
      <main>
      </main>
      <Footer />
    </div>
      
  );
}

export default App;
