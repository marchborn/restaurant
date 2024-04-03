import React, { useState } from 'react';
import { Card, CardContent, TextField, Typography, Button, Link } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prevCredentials => ({
            ...prevCredentials,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); 
        try {
            const response = await axios.post('http://localhost:3001/login', credentials);

            if (response.data.message === "Login successful") {
                if(credentials.username=="admin" && credentials.password=="pass"){
                    navigate('/admin')
                }
                else{
                navigate('/');
                }
            } else {
                setError("Login Failed: " + response.data.message);
            }
        
        } catch (error) {
            setError("Login Error: " + error.response?.data?.message || 'An error occurred');
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5rem' }}>
            <Card style={{ width: '400px' }}>
                <CardContent>
                    <Typography variant="h5" style={{ marginBottom: '2rem', textAlign: 'center' }}>
                        Login
                    </Typography>
                    {error && <Typography color="error">{error}</Typography>}
                    <form onSubmit={handleSubmit}>
                        <TextField
                            name="username"
                            label="Username"
                            variant="outlined"
                            fullWidth
                            required
                            style={{ marginBottom: '1rem' }}
                            value={credentials.username}
                            onChange={handleChange}
                        />
                        <TextField
                            name="password"
                            label="Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            required
                            style={{ marginBottom: '2rem' }}
                            value={credentials.password}
                            onChange={handleChange}
                        />
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Log In
                        </Button>
                    </form>
                    <Typography variant="body2" style={{ marginTop: '2rem', textAlign: 'center' }}>
                        Not registered yet? <Link href="/signup" style={{ textDecoration: 'none' }}>Create an account</Link>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default Login;
