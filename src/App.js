import React from 'react';
import './App.css';
import Top from './components/top';
import Navbar from './components/navbar';
import Break from './components/break';
import Bottom from './components/bottom';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Top />
      <Break />
      <Bottom />
      <Footer />
    </div>
  );
}

export default App;
