import "./ServicesCard.css";
const ServicesCard = () => {
  return (
    <div className="cardItemServiesWrapper ">
        <div>
           
            <h2>Our Services</h2>
        <p>
            Guide our client to better experience
        </p>
        </div>
        
        <div className="cardItemServies">
            <i className='bx bxs-car-garage iconServiceCard' ></i>
            <h3>Wide Range of Vehicles</h3>
            <p>Choose from a diverse selection of cars to suit your needs and preferences.</p>
        </div>
         <div className="cardItemServies">
            <i className='bx bxs-car-garage iconServiceCard' ></i>
            <h3>Wide Range of Vehicles</h3>
            <p>Choose from a diverse selection of cars to suit your needs and preferences.</p>
        </div>
         <div className="cardItemServies">
            <i className='bx bxs-car-garage iconServiceCard' ></i>
            <h3>Wide Range of Vehicles</h3>
            <p>Choose from a diverse selection of cars to suit your needs and preferences.</p>
        </div>
          
    </div>
  )
}
export default ServicesCard