import React from 'react';
import './App.css';
import NavBar from './components/NavBar/index.js'
import Footer from './components/Footer';
import Search from './components/Search';

function App() {
  return (
    <div className="d-flex flex-column">
      <NavBar />
      <Search />
      <Footer />

    </div>
  );
}

export default App;
