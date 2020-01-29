import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Odometer from './Odometer';
import MainVideo from './MainVideo';


function App() {
  return (
    <div className="App">
      <Header />
      <Odometer />
      <Footer />
      <MainVideo />
    </div>
  );
}

export default App;
