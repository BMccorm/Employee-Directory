import React from 'react';
import './App.css';
import NavBar from './components/NavBar/index.js'
import Footer from './components/Footer';
import Search from './components/Search';
//import SearchResults from "./components/SearchResults"

function App() {
  return (
    <div>
      <NavBar />
      <Search />
      <Footer />

    </div>
  );
}

export default App;
