import mustange from '../assets/img1.jpg';
import camaro from '../assets/camaro.jpg';
import Challenger from '../assets/CAHLLENGER.jpg';
import Bmwcover from '../assets/Bmwcover.jpg';
import './BannerService.css';

const BannerService = () => {
  return (
<div className="CoverCar">
  <h1>Our Process</h1>

  <div className="itemsRow">
    <div className="itemNumber">
      <span className="number3D">1</span>
      <div className="imageWrapper">
        <img src={mustange} alt="" />
        <p className="labelOnImage">ASK</p>
      </div>
    </div>

    <div className="itemNumber">
      <span className="number3D">2</span>
      <div className="imageWrapper">
        <img src={camaro} alt="" />
        <p className="labelOnImage">ANAYLSIS</p>
      </div>
    </div>

    <div className="itemNumber">
      <span className="number3D">3</span>
      <div className="imageWrapper">
        <img src={Challenger} alt="" />
        <p className="labelOnImage">SEARCH</p>
      </div>
    </div>

    <div className="itemNumber">
      <span className="number3D">4</span>
      <div className="imageWrapper">
        <img src={Bmwcover} alt="" />
        <p className="labelOnImage">GET</p>
      </div>
    </div>
  </div>
</div>



  );
};

export default BannerService;
