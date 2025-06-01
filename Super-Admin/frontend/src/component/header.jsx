import React from 'react';
import logo from '../assets/logo.jpg';
import './style.css'
import { FaBell } from 'react-icons/fa';

const Header = () => {
  return (
    <div> 
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
          <li className="nav-item box mx-1">
            <a className="nav-link text-white" href="/">Dashboard</a>
          </li>
          <li className="nav-item box mx-1">
            <a className="nav-link text-white " href="/add-user">Add User</a>
          </li>
          <li className="nav-item box mx-1">
            <a className="nav-link text-white" href="/manage-users">Manage Users</a>
          </li>

<li className="nav-item mx-1 box">
  <a className="nav-link text-white position-relative" href="/notifications">
    <FaBell size={20} />
  </a>
</li>
         
        </ul>
      </div>
    </nav>
    <div style={{marginBottom: '85px'}}></div>
    </div>
  );
};

export default Header;
