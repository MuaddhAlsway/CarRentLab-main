import './Pricing.css';

const Pricing = () => {
  return (
    <div className="pricingPage">
      <p className="pricingTitle">Pricing Plan</p>

      <div className="pricingCards">
        <div className="pricingCard basic">
          
          <div className="cardContent">
            <h1>Basic Plan</h1>
            <span>$100/day</span>
            <p>Include a basic standard for rent car</p>
            <button>More Info</button>
          </div>
        </div>

        <div className="pricingCard premium">
      
          <div className="cardContent">
            <h1>Premium Plan</h1>
            <span>$300/day</span>
            <p>Include a High standard for rent car</p>
            <button>More Info</button>
          </div>
        </div>

        <div className="pricingCard master">
    
          <div className="cardContent">
            <h1>Master Plan</h1>
            <span>$500/day</span>
            <p>Include a Master standard for rent car</p>
            <button>More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
