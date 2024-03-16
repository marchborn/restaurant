import React from 'react';
import { Card, CardContent, TextField, Typography, Button } from '@mui/material';

const Signup = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5rem' }}>
            <Card style={{ width: '400px' }}>
                <CardContent>
                    <Typography variant="h5" style={{ marginBottom: '2rem', textAlign: 'center' }}>
                        Sign Up
                    </Typography>

                    <form>
                        <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            required
                            style={{ marginBottom: '1rem' }}
                        />
                        <TextField
                            label="Email"
                            type="email"
                            variant="outlined"
                            fullWidth
                            required
                            style={{ marginBottom: '1rem' }}
                        />
                        <TextField
                            label="Phone Number"
                            type="tel"
                            variant="outlined"
                            fullWidth
                            required
                            style={{ marginBottom: '1rem' }}
                        />
                        <TextField
                            label="Create Username"
                            variant="outlined"
                            fullWidth
                            required
                            style={{ marginBottom: '1rem' }}
                        />
                        <TextField
                            label="Create Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            required
                            style={{ marginBottom: '2rem' }}
                        />
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Sign Up
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default Signup;
