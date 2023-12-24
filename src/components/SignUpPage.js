import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signUp } from '../actions/auth';

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        password2: '',
    });
    const dispatch = useDispatch();

    const onInputChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSignUp = () => {
        dispatch(signUp(formData));
    };
    return (
        <div className="container">
            <div className="form-inline" style={{ textAlign: 'center' }}>
                <h2>Sign Up Page</h2>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        placeholder="Enter Your Email Here..."
                        maxLength="100"
                        style={{ textAlign: "center" }}
                        onChange={onInputChange}
                    />
                    <input
                        className="form-control"
                        type="password"
                        id="password"
                        placeholder="Enter Your Password Here..."
                        maxLength="30"
                        style={{ textAlign: "center" }}
                        onChange={onInputChange}
                    />
                    <input
                        className="form-control"
                        type="password"
                        id="password2"
                        placeholder="Re-Enter Your Password Here..."
                        maxLength="30"
                        style={{ textAlign: "center" }}
                        onChange={onInputChange}
                    />
                    <button
                        style={{ marginTop: '10px' }}
                        className="btn btn-primary"
                        id="submit"
                        onClick={handleSignUp}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage