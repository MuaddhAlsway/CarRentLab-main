import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Store.css';
import camery from '../assets/Camery.jpg';
import BMW from '../assets/BMW.jpg';
import Bmw1 from '../assets/Bmw.webp';
import accent from '../assets/Accent.webp';
import Ford from '../assets/Ford.webp';
import Ford1 from '../assets/FordMachine.avif';
import mustang from '../assets/FordMusntage.webp';
import Nissan from '../assets/Nissan.webp';
import Nissan1 from '../assets/NissanMachine.webp';

const Store = () => {
  // All cars data
  const carsData = [
    { id: 1, name: 'Toyota Camery', type: 'Sedan', brand: 'Toyota', price: 30000, img: camery },
    { id: 2, name: 'BMW X1', type: 'Sedan', brand: 'BMW', price: 70000, img: BMW },
    { id: 3, name: 'BMW X1', type: 'Sedan', brand: 'BMW', price: 80000, img: Bmw1 },
    { id: 4, name: 'Toyota Accent', type: 'Sedan', brand: 'Toyota', price: 40000, img: accent },
    { id: 5, name: 'Ford X2', type: 'Sedan', brand: 'Ford', price: 90000, img: Ford },
    { id: 6, name: 'Ford W1', type: 'Truck', brand: 'Ford', price: 30000, img: Ford1 },
    { id: 7, name: 'Ford Mustang', type: 'Sedan', brand: 'Ford', price: 120000, img: mustang },
    { id: 8, name: 'Nissan X1', type: 'Sedan', brand: 'Nissan', price: 35000, img: Nissan },
    { id: 9, name: 'Nissan X1', type: 'Sedan', brand: 'Nissan', price: 100000, img: Nissan1 },
  ];

  // State for filters
  const [carType, setCarType] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [brand, setBrand] = useState('');

  // Filtered cars
  const filteredCars = carsData.filter((car) => {
    const typeMatch = carType ? car.type.toLowerCase() === carType.toLowerCase() : true;
    const brandMatch = brand ? car.brand.toLowerCase() === brand.toLowerCase() : true;
    let priceMatch = true;

    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number);
      priceMatch = car.price >= min && car.price <= max;
    }

    return typeMatch && brandMatch && priceMatch;
  });

  return (
    <div className="store">
      <h1>Find Your Perfect Car</h1>

      {/* Filters */}
      <div className="filterSection">
        <select
          value={carType}
          onChange={(e) => setCarType(e.target.value)}
          className="filterSelect"
        >
          <option value="">Select Car Type</option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="Hatchback">Hatchback</option>
          <option value="Convertible">Convertible</option>
          <option value="Truck">Truck</option>
          <option value="Van">Van</option>
        </select>

        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="filterSelect"
        >
          <option value="">Select Price Range</option>
          <option value="20000-40000">20,000 - 40,000</option>
          <option value="60000-90000">60,000 - 90,000</option>
          <option value="110000-120000">110,000 - 120,000</option>
        </select>

        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="filterSelect"
        >
          <option value="">Select Brand</option>
          <option value="Toyota">Toyota</option>
          <option value="Ford">Ford</option>
          <option value="Honda">Honda</option>
          <option value="Hyundai">Hyundai</option>
          <option value="BMW">BMW</option>
          <option value="Audi">Audi</option>
        </select>
      </div>

      {/* Car Cards */}
      <div className="cardCards">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <div className="cardItem" key={car.id}>
              <img src={car.img} alt={car.name} className="carImage" />
              <h2>{car.name}</h2>
              <p>Type: {car.type}</p>
              <p>Price: ${car.price.toLocaleString()}</p>
              <Link to={`/rent/${car.id}`}>
                <button className="rentBtn">Rent Now</button>
              </Link>
            </div>
          ))
        ) : (
          <p style={{ fontSize: "1.2rem", color: "#555" }}>No cars match your filters.</p>
        )}
      </div>
    </div>
  );
};

export default Store;
