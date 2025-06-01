import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './component/header.jsx';
import Footer from './component/footer.jsx';
import AddUserForm from './pages/userManagement/adduser.jsx';
import Dashboard from './pages/dashboard/dashboard.jsx';
import AllUsers from './pages/userManagement/users.jsx';
import NotificationPage from './pages/notification/notification.jsx';


import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-user" element={<AddUserForm />} />
        <Route path="/manage-users" element={<AllUsers />} />
        <Route path='/notifications' element = {<NotificationPage />}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>
);
