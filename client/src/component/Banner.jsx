import React from 'react';
import './Banner.css';
import mustang1 from '../assets/Mustange1.jpg';

const Banner = () => {
  return (
    <section className="banner">
      <img src={mustang1} alt="Ford Mustang" className="bannerImage" />

      <div className="bannerContent">
        <h4 className="bannerTitle">
          Book Your Adventure Today and Feel the Power of the Open Road
        </h4>
        <button className="bannerButton">Get Your Dream Car Now</button>
      </div>
    </section>
  );
};

export default Banner;
