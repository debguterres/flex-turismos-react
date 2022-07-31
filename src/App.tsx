import React from 'react';
import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import FakeBot from './components/FakeBot';

function App() {
  return (
    <>
      <FakeBot />
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
