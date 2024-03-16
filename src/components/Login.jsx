import React from 'react';
import { Card, CardContent, TextField, Typography, Button, Link } from '@mui/material';

const Login = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5rem' }}>
            <Card style={{ width: '400px' }}>
                <CardContent>
                    <Typography variant="h5" style={{ marginBottom: '2rem', textAlign: 'center' }}>
                        Login
                    </Typography>

                    <form>
                        <TextField
                            label="Username"
                            variant="outlined"
                            fullWidth
                            required
                            style={{ marginBottom: '1rem' }}
                        />
                        <TextField
                            label="Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            required
                            style={{ marginBottom: '2rem' }}
                        />
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Log In
                        </Button>
                    </form>

                    <Typography variant="body2" style={{ marginTop: '2rem', textAlign: 'center' }}>
                        Not registered yet?{' '}
                        <Link href="/signup" style={{ textDecoration: 'none' }}>
                            Create an account
                        </Link>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default Login;
