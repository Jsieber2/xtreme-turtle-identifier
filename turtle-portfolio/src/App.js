import React from 'react';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Footer />
      {/* More components will go here */}
    </div>
  );
}

export default App;
