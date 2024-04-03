import React, { useState } from 'react';
import { Card, CardContent, TextField, Typography, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        username: '',
        password: '',
    });

    const navigate = useNavigate(); 

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/signup', formData);
            console.log("Signup successful");
            navigate('/login'); 
        } catch (error) {
            console.error("Signup failed", error);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5rem' }}>
            <Card style={{ width: '400px' }}>
                <CardContent>
                    <Typography variant="h5" style={{ marginBottom: '2rem', textAlign: 'center' }}>
                        Sign Up
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        {["name", "email", "phone", "username", "password"].map((item, index) => (
                            <TextField
                                key={index}
                                label={item.charAt(0).toUpperCase() + item.slice(1)}
                                type={item === "email" ? "email" : item === "password" ? "password" : "text"}
                                variant="outlined"
                                fullWidth
                                required
                                style={{ marginBottom: '1rem' }}
                                name={item}
                                value={formData[item]}
                                onChange={handleChange}
                            />
                        ))}
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Sign up
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default Signup;
