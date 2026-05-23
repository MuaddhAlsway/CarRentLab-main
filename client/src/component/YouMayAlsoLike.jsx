import React from "react";
import { useNavigate } from "react-router-dom";
import "./YouMayAlsoLike.css";

const YouMayAlsoLike = ({ cars, currentCar }) => {
  const navigate = useNavigate();

  // Filter related cars: same brand or type, exclude current car
  const relatedCars = cars
    .filter(
      (c) =>
        c.id !== currentCar.id &&
        (c.brand === currentCar.brand || c.type === currentCar.type)
    )
    .slice(0, 6); // show max 6 cars

  if (relatedCars.length === 0) return null;

  return (
    <div className="youMayAlsoLike">
      <div className="title">
        <h1>You May Also Like</h1>
      </div>

      <div className="cardCar">
        {relatedCars.map((car) => (
          <div
            key={car.id}
            className="cardCarItem"
            title={car.name}
            onClick={() => navigate(`/rent/${car.id}`)} // Navigate to RentPage
          >
            <img
              src={car.images?.[0] || "/placeholder.jpg"}
              alt={car.name}
              className="cardCarImg"
            />
            <h4>{car.name}</h4>
            <p>${car.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouMayAlsoLike;
