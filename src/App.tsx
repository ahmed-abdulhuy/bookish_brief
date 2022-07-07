import React from 'react';
import './App.scss';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/HomePage/Home';
import AddBook from './Pages/AddBook/AddBook';
import Header from './layout/Header/Header';

function App() {
  return (
    <Provider store={ store }>
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/addBookPage' element={<AddBook />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
