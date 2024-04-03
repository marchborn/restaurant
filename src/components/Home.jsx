import React, {useEffect,useState} from 'react';
import './Home.css';
import food1 from './images/food1.png'
import food2 from './images/food2.png'
import food3 from './images/food3.png'
import burger2 from './images/burger2.png';
import fish from './images/fish.png';
import thai from './images/thai.png';
import cheesecake from './images/cheesecake.png';
import axios from 'axios';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography,TextField } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useLocation, useNavigate } from 'react-router-dom'; 

const Home = () => {

  useEffect(() => {
    const specialitems = async () => {
        try {
            const response = await axios.get('http://localhost:3001/add');
            setmenuData(response.data);
        } catch (error) {
            console.error('Failed to fetch menu items', error);
        }
    };
    specialitems();
});


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
});

const [menuData, setmenuData] = useState([]);

const navigate = useNavigate(); 

const handleChange = (e) => {
  setFormData({
      ...formData,
      [e.target.name]: e.target.value,
  });
};



  const cards = [
    {
      title: "Double Cheese Beef Burger", 
      price: 8.99, 
      description: "A delicious double cheeseburger made with fresh, quality beef and melted cheese.",
      imageUrl: burger2,
    },
    {
      title: "Fish Fritters",
      price: 5.99,
      description: "Crispy, golden fish fritters made with chickpea flour and spices.",
      imageUrl: fish,
    },
    {
      title: "Thai Fried Rice",
      price: 7.49,
      description: "Fragrant and aromatic Thai fried rice with a mix of spices and fresh vegetables.",
      imageUrl: thai,
    },
    {
      title: "Cheesecake",
      price: 4.99,
      description: "Rich and creamy cheesecake on a graham cracker crust with a fruit topping.",
      imageUrl: cheesecake,
    },
  ];
  
  

  const addItemToCart = async (item) => {
    try {
      const res = await axios.get(`http://localhost:3001/cart/check/${item.title}`);
      if (res.data.exists) {
        await axios.put(`http://localhost:3001/cart/update`, {
          title: item.title,
          quantity: res.data.quantity + 1,
        });
        alert("Quantity updated successfully");
      } else {
        await axios.post('http://localhost:3001/cart', {
            title: item.title,
            price: item.price,
            quantity: 1,
        });
        alert("Successfully added to cart");
      }
    } catch (error) {
        console.error("Error updating cart:", error);
        alert("Failed to update the cart.");
    }
  };
  
  const handleFeedback = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:3001/feedback', formData);
        console.log(formData)  
        console.log("Feedback successfully added");
        alert("Your feedback has been submitted!");
    } catch (error) {
        console.error("Feedback submission failed", error);
    }
};

  return (
    <>
   
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={food1} style={{ width: "700px", height: "400px" }} alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={food2} style={{ width: "700px", height: "400px" }} alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={food3} style={{ width: "700px", height: "400px" }} alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>

<section className="about-restaurant">
<h2 className="about-heading">About the Restaurant</h2>
<p>
    Nestled in the vibrant heart of Vadakara, Resto emerges as a culinary haven for food enthusiasts craving an eclectic dining experience. This multi-cuisine restaurant, with its elegantly designed interiors and welcoming ambiance, promises a gastronomic journey that spans the globe. From the spicy delights of traditional Indian cuisine to the subtle flavors of European dishes, and the exotic zest of Asian specialties, Resto offers a meticulously curated menu that caters to the palate of global diners. Its commitment to freshness and authenticity ensures that each dish served is a celebration of flavor, meticulously prepared by chefs who are masters of their craft.
</p>
<p>
    Beyond the culinary excellence, Resto takes pride in its exceptional service and warm hospitality, making it not just a place to eat, but a destination to experience. Whether it's a family gathering, a casual outing with friends, or a romantic dinner, the restaurant's atmosphere adapts to fit every occasion, ensuring a memorable dining experience for all. With its extensive menu, Resto stands out as a beacon of culinary diversity in Vadakara, inviting patrons to embark on a flavorful adventure that tantalizes the senses and leaves them longing for more.
</p>
</section>

<Grid container spacing={2}> 
      {cards.map((val, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}> 
          <Card sx={{ maxWidth: 345, minHeight:300, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}> {/* Ensures cards are of equal height */}
            <div>
              <CardMedia
                component="img"
                height="300"
                image={val.imageUrl}
                alt={val.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {val.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {val.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   Price: {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val.price)}
                </Typography>
              </CardContent>
            </div>
            <CardActions>
              <Button variant="outlined" color="success" onClick={() => addItemToCart(val)}>
                Add to Cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  &nbsp;
    <section className="special">
      <h2 className="special-heading" style={{fontFamily: "cursive", textDecoration:"bold" , fontSize:"3rem"}}>Restaurant's Special</h2>&nbsp;
      <Grid container spacing={2}> 
      {menuData.map((val, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card sx={{ maxWidth: 345, minHeight:300, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}> 
               <CardContent>
        <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
          {val.itemname}
        </Typography>
        <Typography variant="h5" component="div" gutterBottom>
          Price: ${val.price}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {val.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>{alert('order placed')}}>order now</Button>
      </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>

    </section>
&nbsp;
    <section className="feedback-section">
  <Grid container spacing={4} alignItems="center" justifyContent="space-between" style={{ margin: '5px' }}>
    
    <Grid item xs={12} md={6}>
      <Typography variant="h4" component="h2" gutterBottom style={{ textAlign: 'center' }}>
        We value your feedback
      </Typography>
      <form noValidate autoComplete="off" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }} onSubmit={handleFeedback}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={5}>
            <TextField
              required
              id="name"
              name="name"
              label="Name"
              fullWidth
              variant="outlined"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              variant="outlined"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={10}>
            <TextField
              required
              id="feedback"
              name="feedback"
              label="Your Feedback"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={10} style={{ display: 'flex', justifyContent: 'center' }}>
            <Button type='submit' variant="contained" color="primary">
              Submit Feedback
            </Button> 
          </Grid>
        </Grid>
      </form>
    </Grid>

    {/* Contact Information */}
    <Grid item xs={12} md={5}>
      <Grid container spacing={2} justifyContent="flex-start">
        <Grid item container alignItems="center" spacing={1}>
          <Grid item>
            <PhoneIcon />
          </Grid>
          <Grid item>
            <Typography variant="body1">+123 456 7890</Typography>
          </Grid>
        </Grid>

        <Grid item container alignItems="center" spacing={1}>
          <Grid item>
            <EmailIcon />
          </Grid>
          <Grid item>
            <Typography variant="body1">example@email.com</Typography>
          </Grid>
        </Grid>

        <Grid item container alignItems="center" spacing={1}>
          <Grid item>
            <LocationOnIcon />
          </Grid>
          <Grid item>
            <Typography variant="body1">Vadakara, Kerala</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    
  </Grid>
</section>



<footer className="site-footer">
  <Typography variant="h6" align="center" gutterBottom>
    Resto - Taste the World
  </Typography>
  <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
    Thank you for visiting us. Follow us on social media!
  </Typography>
</footer>


 </>


  
  );
}

export default Home;
