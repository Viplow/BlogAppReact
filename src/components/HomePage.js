import React from 'react'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    let navigate = useNavigate();
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center' }}>
            <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Welcome to Our Blog</h1>
            <p style={{ fontSize: '16px', color: '#555', marginBottom: '30px' }}>Explore a world of knowledge and inspiration through our blog posts.</p>
            <div className="input-field">
                <button
                    style={{
                        marginTop: '20px',
                        padding: '12px 20px',
                        fontSize: '16px',
                        backgroundColor: '#007BFF',
                        color: 'white',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        border: 'none'
                    }}
                    onClick={() => { navigate("/login") }}
                >
                    Have an account? Log In Here
                </button>
            </div>
            <div className="input-field">
                <button
                    style={{
                        marginTop: '20px',
                        padding: '12px 20px',
                        fontSize: '16px',
                        backgroundColor: '#28A745',
                        color: 'white',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        border: 'none'
                    }}
                    onClick={() => { navigate("/signup") }}
                >
                    Don't have an account? Sign Up Here
                </button>
            </div>
        </div>
    );
    
}

export default HomePage
