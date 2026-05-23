import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Rent.css";

import camery from '../assets/Camery.jpg';
import BMW from '../assets/BMW.jpg';
import Bmw1 from '../assets/Bmw.webp';
import accent from '../assets/Accent.webp';
import Ford from '../assets/Ford.webp';
import Ford1 from '../assets/FordMachine.avif';
import mustang from '../assets/FordMusntage.webp';
import Nissan from '../assets/Nissan.webp';
import Nissan1 from '../assets/NissanMachine.webp';
import CameryBack from '../assets/CameryBack.avif';
import CamerySide from '../assets/CamerySide.jpg';
import Bmw11 from '../assets/Bmw11.jpg';
import Bmw22 from '../assets/BMW22.avif';
import YouMayAlsoLike from "../component/YouMayAlsoLike";
import Banner from "../component/Banner";
import Footer from "../component/Footer";
const RentPage = () => {
  const { carId } = useParams();
  const navigate = useNavigate();

  // all cars data
  const carsData = [
  {
    id: 1,
    name: "Toyota Camry",
    type: "Sedan",
    brand: "Toyota",
    price: 30000,
    year: 2022,
    seats: 5,
    fuel: "Petrol",
    transmission: "Automatic",
    images: [camery, CameryBack, CamerySide],
    features: [
      { title: "Air Conditioning", desc: "Automatic dual-zone climate control" },
      { title: "Bluetooth", desc: "Hands-free calling and music streaming" },
      { title: "Navigation System", desc: "Built-in GPS navigation system" },
      { title: "Cruise Control", desc: "Comfortable highway driving" },
      { title: "Parking Sensors", desc: "Front and rear parking assistance" },
      { title: "Safety System", desc: "ABS, airbags, and stability control" }
    ]
  },

  {
    id: 2,
    name: "BMW X1",
    type: "SUV",
    brand: "BMW",
    price: 70000,
    year: 2023,
    seats: 5,
    fuel: "Diesel",
    transmission: "Automatic",
    images: [BMW, Bmw11, Bmw22],
    features: [
      { title: "Leather Seats", desc: "Premium leather interior" },
      { title: "Panoramic Sunroof", desc: "Wide panoramic glass roof" },
      { title: "Digital Display", desc: "Fully digital instrument cluster" },
      { title: "Driving Modes", desc: "Eco, Comfort, and Sport modes" },
      { title: "Reverse Camera", desc: "High-resolution rear view camera" },
      { title: "Advanced Safety", desc: "Lane assist and collision warning" }
    ]
  },

  {
    id: 3,
    name: "BMW X3",
    type: "SUV",
    brand: "BMW",
    price: 80000,
    year: 2023,
    seats: 5,
    fuel: "Petrol",
    transmission: "Automatic",
    images: [Bmw1, BMW, Bmw22],
    features: [
      { title: "Smart Key", desc: "Keyless entry and start" },
      { title: "Apple CarPlay", desc: "Wireless smartphone integration" },
      { title: "Adaptive Cruise", desc: "Automatic speed adjustment" },
      { title: "Premium Sound", desc: "High-quality surround sound system" },
      { title: "Heated Seats", desc: "Comfort in cold weather" },
      { title: "Driver Assistance", desc: "Blind spot monitoring system" }
    ]
  },

  {
    id: 4,
    name: "Toyota Accent",
    type: "Sedan",
    brand: "Toyota",
    price: 40000,
    year: 2021,
    seats: 5,
    fuel: "Petrol",
    transmission: "Manual",
    images: [accent, camery, CameryBack],
    features: [
      { title: "Fuel Efficiency", desc: "Excellent fuel economy" },
      { title: "Touch Screen", desc: "7-inch infotainment display" },
      { title: "Bluetooth", desc: "Audio and call connectivity" },
      { title: "Rear Sensors", desc: "Parking assistance system" },
      { title: "ABS Brakes", desc: "Anti-lock braking system" },
      { title: "Eco Mode", desc: "Optimized fuel consumption" }
    ]
  },

  {
    id: 5,
    name: "Ford Explorer",
    type: "SUV",
    brand: "Ford",
    price: 90000,
    year: 2023,
    seats: 7,
    fuel: "Diesel",
    transmission: "Automatic",
    images: [Ford, Ford1, mustang],
    features: [
      { title: "7 Seats", desc: "Spacious seating for families" },
      { title: "Terrain Control", desc: "Multiple driving terrain modes" },
      { title: "Large Display", desc: "12-inch infotainment system" },
      { title: "360 Camera", desc: "Full surround view camera" },
      { title: "Wireless Charging", desc: "Cable-free phone charging" },
      { title: "Safety Assist", desc: "Advanced driver safety features" }
    ]
  },

  {
    id: 6,
    name: "Ford Ranger",
    type: "Truck",
    brand: "Ford",
    price: 30000,
    year: 2020,
    seats: 2,
    fuel: "Diesel",
    transmission: "Manual",
    images: [Ford1, Ford, Nissan],
    features: [
      { title: "Heavy Duty", desc: "Built for tough workloads" },
      { title: "4x4 Drive", desc: "Off-road capability" },
      { title: "Hill Assist", desc: "Improved control on slopes" },
      { title: "Tow Hook", desc: "Strong towing capacity" },
      { title: "Durable Interior", desc: "Easy-to-clean cabin design" },
      { title: "Safety Frame", desc: "Reinforced body structure" }
    ]
  },

  {
    id: 7,
    name: "Ford Mustang",
    type: "Sports",
    brand: "Ford",
    price: 120000,
    year: 2023,
    seats: 4,
    fuel: "Petrol",
    transmission: "Automatic",
    images: [mustang, Ford, Ford1],
    features: [
      { title: "V8 Engine", desc: "High-performance engine power" },
      { title: "Sport Mode", desc: "Dynamic driving experience" },
      { title: "Leather Interior", desc: "Premium sport seats" },
      { title: "Performance Brakes", desc: "Enhanced braking system" },
      { title: "Launch Control", desc: "Fast acceleration support" },
      { title: "Premium Sound", desc: "High-end audio system" }
    ]
  },

  {
    id: 8,
    name: "Nissan Altima",
    type: "Sedan",
    brand: "Nissan",
    price: 35000,
    year: 2022,
    seats: 5,
    fuel: "Petrol",
    transmission: "Manual",
    images: [Nissan, Nissan1, camery],
    features: [
      { title: "Comfort Seats", desc: "Ergonomic seat design" },
      { title: "Touch Display", desc: "Modern infotainment screen" },
      { title: "Eco Drive", desc: "Fuel saving technology" },
      { title: "Cruise Control", desc: "Smooth long drives" },
      { title: "Blind Spot Alert", desc: "Extra safety while changing lanes" },
      { title: "ABS System", desc: "Improved braking control" }
    ]
  },

  {
    id: 9,
    name: "Nissan Patrol",
    type: "SUV",
    brand: "Nissan",
    price: 100000,
    year: 2023,
    seats: 7,
    fuel: "Diesel",
    transmission: "Automatic",
    images: [Nissan1, Nissan, Ford],
    features: [
      { title: "Off-road System", desc: "Designed for desert and sand driving" },
      { title: "Luxury Interior", desc: "Premium leather seats" },
      { title: "Adaptive Suspension", desc: "Smooth ride on all terrains" },
      { title: "Rear Entertainment", desc: "Screens for rear passengers" },
      { title: "Surround Camera", desc: "360-degree view system" },
      { title: "Advanced Safety", desc: "Driver assistance technologies" }
    ]
  }
];


  const car = carsData.find(c => c.id === Number(carId));

  const [mainImage, setMainImage] = useState(car?.images?.[0]);


  if (!car) {
    return <p style={{ textAlign: "center" }}>Car not found</p>;
  }

  return (
    (
    <>
      <div className="rentPage">
        {/* Back Button */}
        <button className="backBtn" onClick={() => navigate(-1)}>
          ← Back to Store
        </button>

        {/* Car Details */}
        <div className="carDetailsContainer">

          {/* Images Section */}
          <div className="carImageWrapper">
            <img src={mainImage} alt={car.name} className="carImage" />

            <div className="viewCartImage">
              {car.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={car.name}
                  className="carImageView"
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </div>

          {/* Car Info Section */}
          <div className="carInfo">
            <h1>{car.name}</h1>
            <p className="carPrice">${car.price.toLocaleString()}</p>

            <div className="carSpecs">
              <div><strong>Type:</strong> {car.type}</div>
              <div><strong>Brand:</strong> {car.brand}</div>
              <div><strong>Seats:</strong> {car.seats}</div>
              <div><strong>Fuel:</strong> {car.fuel}</div>
              <div><strong>Year:</strong> {car.year}</div>
              <div><strong>Transmission:</strong> {car.transmission}</div>
            </div>

            {/* Actions */}
            <div className="rentActions">
              <button
                className="confirmBtn"
                onClick={() => alert(`You rented ${car.name}!`)}
              >
                Confirm Rent
              </button>
              <button className="chatBtn">Chat with Support</button>
            </div>

            {/* Description */}
            <div className="carDescription">
              <h3>About this car</h3>
              <p>
                {car.name} is a premium {car.brand} {car.type} with
                {` ${car.transmission} transmission and seating for ${car.seats}.`}
              </p>
            </div>

            {/* Features */}
       

          </div>
          
        </div>
             <div className="carFeatures">
              <h3>Car Features</h3>
              <div className="features">
                {car.features.map((feature, index) => (
                  <div key={index} className="FeatruresItem">
                    <h4>{feature.title}</h4>
                    <p>{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
      </div>

      {/* You May Also Like Section */}
      <YouMayAlsoLike cars={carsData} currentCar={car} />
      <Banner/>
      {/* Footer */}
      <Footer />
    </>
  ));
};

export default RentPage;


