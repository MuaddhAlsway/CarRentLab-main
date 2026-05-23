import 'boxicons/css/boxicons.min.css';
import './OurImpession.css';
const OurImpession = () => {
  return (
    <div className="OurImpession">
        <h1>Find Your Perfect Rental Car </h1>
        <div className="Features">
            <div className="featureItem">
                <i className='bx bxs-car-garage featureIcon'></i>
                <h2>Wide Selection</h2>
                <p>Choose from a diverse range of vehicles to suit your needs and preferences.</p>
            </div>
            <div className="featureItem">
                <i className='bx bxs-map featureIcon'></i>
                <h2>Competitive Pricing</h2>
                <p>Enjoy affordable rates without compromising on quality or service.</p>
            </div>
            <div className="featureItem">
               <i class='bx  bx-headphone featureIcon'></i> 
                <h2>24/7 Customer Support</h2>
                <p>Our dedicated support team is here to assist you anytime, anywhere.</p>
            </div>
            <div className='featureItem'>
                
                <i className='bx bxs-calendar-check featureIcon'></i> 
                <h2>Easy Booking Process</h2>
                <p>Book your rental car quickly and conveniently through our user-friendly platform.</p>
            </div>
            <div className='featureItem'>
                <i className='bx bxs-check-shield featureIcon'></i>
                <h2>Reliable Vehicles</h2>
                <p>All our cars are well-maintained and undergo regular inspections for your safety.</p>
            </div>
            <div className='featureItem'>
                <i className='bx bxs-wallet featureIcon'></i>
                <h2>Flexible Rental Options</h2>
                <p>Choose from various rental durations and packages to fit your schedule and budget.</p>
            </div>
        </div>
    </div>
  )
}
export default OurImpession