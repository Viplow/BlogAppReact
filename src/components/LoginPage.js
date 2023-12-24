import React, { useState } from "react";
import { login, signIn } from "../actions/auth";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const dispatch = useDispatch();
    const authIn = useSelector(state => state.auth.uid)
    let navigate = useNavigate();
    if (authIn)
        navigate("/blogs")
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(signIn(credentials));
    };
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center vh-100">
                <div className="col-md-6">
                    <div className="card p-4">
                        <h3 className="text-center mb-4">Sign In</h3>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                id="email"
                                placeholder="Enter Your Email"
                                value={credentials.email}
                                onChange={event => setCredentials({ ...credentials, email: event.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="password"
                                id="password"
                                placeholder="Enter Your Password"
                                value={credentials.password}
                                onChange={event => setCredentials({ ...credentials, password: event.target.value })}
                            />
                        </div>
                        <div className="text-danger mb-3" id="warning">
                            {/* Display error message here if needed */}
                        </div>
                        <button
                            className="btn btn-primary btn-block"
                            onClick={onSubmit}
                        >
                            Sign In
                        </button>
                        <div className="mt-3 text-center">
                            <button
                                className="btn btn-link"
                                onClick={() => navigate("/signUp")}
                            >
                                Don't have an account? Sign Up Here
                            </button>
                        </div>
                        <div className="mt-3 text-center">
                            <button
                                className="btn btn-link"
                                onClick={() => { /* Handle reset logic or navigation */ }}
                            >
                                Forget Your Password?
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default LoginPage;