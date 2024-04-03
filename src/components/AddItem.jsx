import React, { useState } from 'react';
import { Button, TextField, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const AddItem = () => {
    const [formData, setFormData] = useState({
        itemname: '',
        price: '',
        description: '',
    });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:3001/add', formData);
        console.log("Data added successful");
        alert('Item added successfully')
        navigate('/menu'); 
    } catch (error) {
        console.error("Signup failed", error);
    }
};
  return (
    <Container maxWidth="sm">&nbsp;
      <Typography variant="h4" gutterBottom>
        Add New Item
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="itemname"
          label="Item Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.itemname}
          onChange={handleChange}
          required
        />
        <TextField
          name="price"
          label="Price"
          type="number"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <TextField
          name="description"
          label="Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={formData.description}
          onChange={handleChange}
          required
        />
       
        <Button type="submit" variant="contained" color="primary">
          Add Item
        </Button>
      </form>
    </Container>
  );
};

export default AddItem;
