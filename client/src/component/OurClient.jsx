import './OurClient.css';
import user1 from '../assets/user1.avif';
import user2 from '../assets/user2.avif';
import user3 from '../assets/user3.avif';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Al-Faisal',
      position: 'Entrepreneur',
      img: user1,
      message: 'Renting a car here was super easy and affordable. The car was in perfect condition and the service was excellent!',
    },
    {
      id: 2,
      name: 'Sara Al-Mutairi',
      position: 'Traveler',
      img: user2,
      message: 'I loved the variety of cars available. The booking process was smooth and the staff was very helpful.',
    },
    {
      id: 3,
      name: 'Fahad Al-Harbi',
      position: 'Businessman',
      img: user3,
      message: 'The customer service is top-notch. I had a great experience renting a car for my business trip.',
    },
  ];

  return (
    <section className="testimonialSection1">
      <h2>What Our Customers Say</h2>
      <div className="testimonialContainer">
        {testimonials.map((t) => (
          <div className="testimonialCard1" key={t.id}>
            <img src={t.img} alt={t.name} className="testimonialImg" />
            <p className="testimonialMessage1">"{t.message}"</p>
            <h3 className="testimonialName1">{t.name}</h3>
            <span className="testimonialPosition1">{t.position}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
