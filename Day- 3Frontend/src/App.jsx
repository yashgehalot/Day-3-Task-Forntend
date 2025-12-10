import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Components/MyNavbar';
import Home from './Components/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* 1. Navigation */}
      <MyNavbar />

      {/* 2. Main Content */}
      <main className="flex-grow-1">
        
        {/* Option A: Keep Home and show State below it */}
        <Home />
        
        <hr /> {/* Just a line to separate them */}
        
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}

export default App;