import { Link } from "react-router-dom";
import "./RentMainPage.css";

// Sample car images
import camery from '../assets/Camery.jpg';
import BMW from '../assets/BMW.jpg';
import Bmw1 from '../assets/Bmw.webp';
import Ford from '../assets/Ford.webp';
import Bmw11 from '../assets/Bmw11.jpg';
import Footer from "../component/Footer";

const RentMainPage = () => {
  const carsData = [
    { id: 1,
    name: "Toyota Camry",
    type: "Sedan",
    brand: "Toyota",
    price: 30000,
    img: camery },
    { id: 2,
    name: "BMW X1",
    type: "SUV",
    brand: "BMW",
    price: 70000,
    img: BMW },
    { id: 3, name: "Ford Explorer", type: "SUV", brand: "Ford", price: 90000, img: Ford },
    { id: 4,
    name: "Ford Explorer",
    type: "SUV",
    brand: "Ford",
    price: 90000,
    img: Bmw1 },
    { id: 6,
    name: "Ford Ranger",
    type: "Truck",
    brand: "Ford",
    price: 30000,
    img: Bmw11 },
  ];

  const featuredCars = carsData.slice(0, 3); // top 3 featured

  return (
    <div>
   <div className="rentMainPageNew">
      {/* Hero Section */}
      <section className="rentHero">
        <h1>Find Your Perfect Rental Car</h1>
        <p>Browse our fleet of premium and affordable cars for any journey.</p>
      </section>

      {/* Featured Cars */}
      <section className="featuredCars">
        <h2>Featured Cars</h2>
        <div className="carsGrid">
          {featuredCars.map(car => (
            <div key={car.id} className="carCard">
              <img src={car.img} alt={car.name} />
              <div className="carInfo">
                <h3>{car.name}</h3>
                <p>Type: {car.type}</p>
                <p>Brand: {car.brand}</p>
                <p>Price: ${car.price.toLocaleString()}</p>
                <Link to={`/rent/${car.id}`} className="rentBtn">Rent Now</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Cars Section */}
      <section className="allCars">
        <h2>All Available Cars</h2>
        <div className="carsGridAll">
          {carsData.map(car => (
            <div key={car.id} className="carCardSmall">
              <img src={car.img} alt={car.name} />
              <h4>{car.name}</h4>
              <p>${car.price.toLocaleString()}</p>
              <Link to={`/rent/${car.id}`} className="rentBtnSmall">Rent Now</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Special Offers */}
      <section className="specialOffers">
        <h2>Special Offers</h2>
        <p>Get discounts on weekend rentals and long-term bookings!</p>
        <div className="offerBanner">🎉 Up to 20% off on SUVs this week! 🎉</div>
      </section>
      
    </div>
      <Footer />
    </div>

 
  
  );
};

export default RentMainPage;
