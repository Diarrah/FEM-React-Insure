import React from 'react';
import './App.scss';

import { Navbar, Header, Different, CTA, Footer } from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Different />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;