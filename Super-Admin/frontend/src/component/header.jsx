import React from 'react';
import logo from '../assets/logo.jpg';

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark px-4 fixed-top"
      style={{ height: '70px', zIndex: 1000}}
    >
      <a className="navbar-brand fw-bold d-flex align-items-center gap-2" href="#home">
        <img
          src={logo}
          alt="Logo"
          style={{ height: '70px', width: '80px' }}
        />
        <span className="ms-2">IT Concurrence System</span>
      </a>
      <div className="collapse navbar-collapse justify-content-end">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Dashboard</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/add-user">Add User</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/manage-users">Manage Users</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
