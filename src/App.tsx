import React from 'react';
import Header from './layout/Header/Header';
import './App.scss';
import Footer from './layout/Footer/Footer';
import Centered from './layout/centered/Centered';

function App() {
  return (
    <div className="App">
      <Header />
      <Centered />
      <Footer />
    </div>
  );
}

export default App;
