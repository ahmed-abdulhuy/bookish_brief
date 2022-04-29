import React from 'react';
import Header from './layout/Header/Header';
import './App.scss';
import Footer from './layout/Footer/Footer';
import Centered from './layout/centered/Centered';
import { store } from './redux/store';
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        <Header />
        <Centered />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
