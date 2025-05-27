import React, { useState } from 'react';

const AddUserForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        password: '',
        confirmPassword: '',
        role: '',
        dob: '',
        email: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:8000/super-admin/create-user', {  
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                alert(`Error: ${data.error}`);
            } else {
                alert('User created successfully!');
            }
        } catch (error) {
            alert('Network error: ' + error.message);
        }
    };

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="mb-4 text-center">Add New User</h2>
                    <form className="card p-4 shadow" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Date of Birth</label>
                            <input
                                type="date"
                                name="dob"
                                className="form-control"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                className="form-control"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label d-block">Role</label>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="role"
                                    id="operator"
                                    value="operator"
                                    required
                                    onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="operator">Operator</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="role"
                                    id="verifier"
                                    value="verifier"
                                    onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="verifier">Verifier</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="role"
                                    id="approval"
                                    value="approval"
                                    onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="approval">Approval</label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary w-100">Add User</button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default AddUserForm;
