import React, { useEffect, useState } from 'react';

function AllUsers() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedRole, setSelectedRole] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 10;

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await fetch('http://127.0.0.1:8000/super-admin/get-users');
      const data = await res.json();
      const allUsers = data?.data || [];
      setUsers(allUsers);
      setFilteredUsers(allUsers);
      setCurrentPage(1); // Reset to first page on new data fetch
    } catch (error) {
      alert('Failed to fetch users');
    }
  };

  const deleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      const res = await fetch(`http://127.0.0.1:8000/super-admin/delete-user/${id}`, {
        method: 'DELETE',
      });
      const result = await res.json();
      if (res.ok) {
        alert('User deleted successfully');
        fetchUsers();
      } else {
        alert(result.message || 'Delete failed');
      }
    } catch (error) {
      alert('Network error: ' + error.message);
    }
  };

  const handleEdit = (id) => {
    alert(`Redirect to edit user with ID: ${id}`);
  };

  const handleFilterChange = (e) => {
    const role = e.target.value;
    setSelectedRole(role);

    if (role === 'all') {
      setFilteredUsers(users);
    } else {
      setFilteredUsers(users.filter(user => user.role === role));
    }
    setCurrentPage(1); // Reset page when filter changes
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div className="container">

      {/* Filter Dropdown */}
      <div className="mb-3 d-flex justify-content-end">
        <label className="me-2 fw-bold">Filter by Role:</label>
        <select value={selectedRole} onChange={handleFilterChange} className="form-select w-auto">
          <option value="all">All</option>
          <option value="operator">Operator</option>
          <option value="verifier">Verifier</option>
          <option value="approver">Approver</option>
        </select>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>DOB</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.length > 0 ? (
              paginatedUsers.map((user, index) => (
                <tr key={user._id}>
                  <td>{startIndex + index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.dob}</td>
                  <td>{user.role}</td>
                  <td>
                    <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(user._id)}>
                      <i className="fas fa-edit"><small>edit</small></i>
                    </button>
                    <button className="btn btn-sm btn-danger" onClick={() => deleteUser(user._id)}>
                      <i className="fas fa-trash-alt"><small>delete</small></i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">No users found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="d-flex justify-content-center gap-3 mb-4">
        <button
          className="btn btn-outline-primary"
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          &larr;
        </button>
        <span className="align-self-center">
          Page {currentPage} of {totalPages || 1}
        </span>
        <button
          className="btn btn-outline-primary"
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages || totalPages === 0}
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}

export default AllUsers;
