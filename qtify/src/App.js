import React from 'react';
import './App.css'; // This imports your global CSS for styling
import Navbar from './components/Navbar/Navbar'; // Import the Navbar component

// Assuming you will later implement the Hero component as well,
// you would uncomment and use it like this:
// import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
      {/* Render the Navbar component here */}
      <Navbar />

      {/* When you implement the Hero section, it will likely go here below the Navbar */}
      {/* <Hero /> */}

      {/* You can remove any remaining default Create React App content from this file if it's still present */}
    </div>
  );
}

export default App;