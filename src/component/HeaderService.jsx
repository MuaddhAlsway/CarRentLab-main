import ServiceImg from "../assets/serviceImg.png";
import "./HeaderServices.css";

const HeaderService = () => {
  return (
    <section className="headerService">
      {/* Left Side Content */}
      <div className="leftSideContent">
        <p className="line">_____</p>

        <h2>Rent Car Club</h2>

        <p className="desc">
          Your trusted partner for seamless car rentals, offering a diverse fleet
          and exceptional service to get you on the road with ease.
        </p>

        <button className="serviceBtn">
          Explore Services
          <i className="bx bx-right-arrow-circle"></i>
        </button>
      </div>

      {/* Right Image Banner */}
      <div className="imgBanner">
        <img src={ServiceImg} alt="Car Rental Service" />
      </div>
    </section>
  );
};

export default HeaderService;
