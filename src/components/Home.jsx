import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <>
    <div id="carouselExampleFade" class="carousel slide carousel-fade">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://unsplash.com/photos/LdfLThHJB7c/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NDR8fHJlc3RhdXJhbnQlMjBmb29kfGVufDB8MHx8fDE3MTA0MjgxMDl8MA&force=true" className="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://unsplash.com/photos/09HGdZzkP-Q/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHwwfHx8MTcxMDQyODA5OXww&force=true" className="d-block w-100" alt="..."/>
      </div>
      {/* <div class="carousel-item">
        <img src="..." class="d-block w-100" alt="..."/>
      </div> */}
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
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
 </>


  
  );
}

export default Home;
