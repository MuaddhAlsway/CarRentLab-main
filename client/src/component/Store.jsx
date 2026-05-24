import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCars } from "../api/cars";
import "./Store.css";

const API_URL = "http://localhost:5000";

const Store = () => {
  const [cars, setCars] = useState([]);
  const [carType, setCarType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [brand, setBrand] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCars();
  }, [carType, priceRange, brand]);

  async function fetchCars() {
    try {
      setLoading(true);
      setError("");

      let min = "";
      let max = "";

      if (priceRange) {
        [min, max] = priceRange.split("-");
      }

      // getCars should return array of cars
      const data = await getCars({
        type: carType,
        brand,
        min,
        max,
      });

      setCars(data || []);
    } catch (err) {
      setError(err.message || "Failed to fetch cars");
    } finally {
      setLoading(false);
    }
  }

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
          <option value="Truck">Truck</option>
        </select>

        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="filterSelect"
        >
          <option value="">Select Price Range</option>
          <option value="20000-40000">20,000 - 40,000</option>
          <option value="60000-90000">60,000 - 90,000</option>
          <option value="110000-130000">110,000 - 130,000</option>
        </select>

        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="filterSelect"
        >
          <option value="">Select Brand</option>
          <option value="Toyota">Toyota</option>
          <option value="Ford">Ford</option>
          <option value="BMW">BMW</option>
          <option value="Nissan">Nissan</option>
        </select>
      </div>

      {loading && <p>Loading cars...</p>}
      {error && <p>{error}</p>}

      {/* Car Cards */}
      <div className="cardCards">
        {cars.length > 0 ? (
          cars.map((car) => (
            <div className="cardItem" key={car.id}>
              {/* Image from Turso DB via backend */}
              <img
                src={`${API_URL}${car.img}`}
                alt={car.name}
                className="carImage"
                onError={(e) => {
                  e.target.src = "/fallback-car.jpg";
                }}
              />

              <h2>{car.name}</h2>
              <p>Brand: {car.brand}</p>
              <p>Type: {car.type}</p>
              <p>Price: ${Number(car.price).toLocaleString()}</p>

              <Link to={`/rent/${car.id}`}>
                <button className="rentBtn">Rent Now</button>
              </Link>
            </div>
          ))
        ) : (
          !loading && (
            <p style={{ fontSize: "1.2rem", color: "#555" }}>
              No cars match your filters.
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default Store;