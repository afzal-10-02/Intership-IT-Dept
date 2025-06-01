import React, { useEffect, useState } from 'react';

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const staticData = [
      {
        _id: '1',
        title: 'New User Request',
        message: 'A new user has requested access to the system.',
        createdAt: new Date().toISOString(),
      },
      {
        _id: '2',
        title: 'Approval Needed',
        message: 'A request is pending your approval.',
        createdAt: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
      },
      {
        _id: '3',
        title: 'Request Verified',
        message: 'A request has been verified by the verifier.',
        createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
      },
    ];

    setNotifications(staticData);
    setLoading(false);
  }, []);

  return (
    <div className="container my-4">
      <h2>New Requests / Notifications</h2>
      {loading ? (
        <p>Loading notifications...</p>
      ) : notifications.length === 0 ? (
        <p>No new requests at the moment.</p>
      ) : (
        <ul className="list-group">
          {notifications.map((notif) => (
            <li key={notif._id} className="list-group-item">
              <strong>{notif.title}</strong> - {notif.message}
              <br />
              <small className="text-muted">
                Date: {new Date(notif.createdAt).toLocaleString()}
              </small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotificationPage;
