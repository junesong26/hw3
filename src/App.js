import React from 'react';
import { Link, Element } from 'react-scroll';
import Gallery from './homework3/components/Gallery/Gallery';
import Blog from './homework3/components/Blog/Blog';
import './App.css'

function App() {
  return (
    <>
    <nav className = "navbar">
     <div className = "logo">
      <Link to="gallery" smooth={true} duration={500}>Homework</Link>
     </div>

     <div className = "logo2">
      <ul>
     <li><Link to="gallery" smooth={true} duration={500}>shiftGallery</Link></li>
     <li><Link to="blog" smooth={true} duration={500}>shiftBlog</Link></li>
     </ul>
     </div>
     
    
    </nav>
    <Element name="gallery" className="section"><Gallery /></Element>
    <Element name="blog" className="section"><Blog /></Element>
    </>
  );
}
export default App;


