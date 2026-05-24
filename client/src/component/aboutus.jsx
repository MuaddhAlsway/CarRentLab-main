import { useEffect, useState } from "react";
import "./about.css";

const Aboutus = () => {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/about")
      .then((res) => res.json())
      .then((data) => setAbout(data))
      .catch((err) => console.log("API Error:", err));
  }, []);

  if (!about) return <p>Loading...</p>;

  return (
    <div className="aboutusContainer">

      {/* HEADER */}
      <div className="desc">
        <h1>{about.title || "About Us"}</h1>
        <p>{about.subtitle || ""}</p>
      </div>

      <div className="ContainerFirstPart">

        {/* MAIN IMAGE */}
        <div className="imgside">
          <img
            className="RentBig"
            src={
              about.mainImage?.startsWith("http")
                ? about.mainImage
                : `http://localhost:5000${about.mainImage}`
            }
            alt="about"
          />
        </div>

        <div className="RightSide">

          {/* CUSTOMERS */}
          <div className="ourClient">
            {about.customers?.map((c, i) => (
              <img
                key={i}
                src={
                  c.image?.startsWith("http")
                    ? c.image
                    : `http://localhost:5000${c.image}`
                }
                alt={`customer-${i}`}
              />
            ))}

            <div className="par">
              <p>{about.customerText || ""}</p>
            </div>
          </div>

          {/* TEXT SECTION */}
          <div className="text">
            <h4>{about.sectionTag || ""}</h4>
            <h1>{about.sectionTitle || ""}</h1>
            <p>{about.sectionDescription || ""}</p>

            <button>{about.buttonText || "Learn More"}</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Aboutus;