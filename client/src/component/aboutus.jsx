import carRent from '../assets/CarRentImage.jpg';



import custmer2 from '../assets/custmer2.jpg';
import custmer3 from '../assets/custmer3.jpg';
import TrustProffesional from './TrushProfessionals';
import './about.css';
const Aboutus = () => {
  return (
    <div className='aboutusContainer'>
        <div className="desc">
            <h1>About US</h1>
            <p>Premium service with high standard rent car</p>
        </div>
        <div className="ContainerFirstPart">
        <div className="imgside">
            <img className="RentBig" src={carRent} alt="bigImage" />
           
        </div>
        <div className="RightSide">
            <div className="ourClient">
                <img src={custmer2} alt="customer1" />
                <img src={custmer2} alt="customer2" />
                <img src={custmer3} alt="customer3" />
                <div className="par">
                     <p>Our Happy Customers</p>
                </div>
               
            </div>
            <div className="text">
                <h4>ABOUT US</h4>
                <h1>
                    More than Just a Car Rental Service
                </h1>
                <p>
                    At CarRentLab, we pride ourselves on being more than just a car rental service. We are your trusted partner in mobility, dedicated to providing exceptional vehicles and unparalleled customer service. Whether you're embarking on a business trip, a family vacation, or simply need a reliable ride for the day, we have the perfect vehicle to suit your needs.
                </p>
                <button>Learn More</button>
            </div>
        </div>
        </div>

    
     
    </div>
  
  )
}
export default Aboutus