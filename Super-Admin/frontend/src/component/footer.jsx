import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-2">
      <div>
        <p className="mb-0">
          &copy; {new Date().getFullYear()} IT Concurrence System. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
