import React, { useState } from 'react';
import Nav from '../Nav';
import Footer from '../Footer';
import Resume from '../Pages/Resume.js';
import About from '../Pages/About.js';
import Portfolio from '../Pages/Portfolio.js';
import Contact from '../Pages/Contact.js';

function PortfolioContent() {
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case 'Resume':
        return <Resume/>
      case 'About':
        return <About/>
      case 'Portfolio':
        return <Portfolio/>
      case 'Contact':
        return <Contact/>
    }
  };

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className="container">
        {
          renderPage()
        }
      </div>
      <Footer/>
    </div>
  );
}

export default PortfolioContent;