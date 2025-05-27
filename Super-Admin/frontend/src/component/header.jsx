import React from 'react';


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <a className="navbar-brand fw-bold" href="#home">
        IT Co-occurrence System
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
