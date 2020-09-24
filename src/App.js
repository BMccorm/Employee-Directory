import React from 'react';
import './App.css';
import NavBar from './components/NavBar/index.js'
import Footer from './components/Footer';
import Search from './components/Search';
import SearchBar from './components/SearchBar';
//import SearchResults from "./components/SearchResults"

function App() {
  return (
    <div>
      <NavBar />
      <SearchBar />
      <Search />
      <Footer />

    </div>
  );
}

export default App;
