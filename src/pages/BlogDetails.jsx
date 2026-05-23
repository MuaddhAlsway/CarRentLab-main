import { Link, useParams } from "react-router-dom";
import "./BlogDetails.css";

import car1 from "../assets/BlogView2.jpg";
import car2 from "../assets/BlogView11.jpg";
import car3 from "../assets/CAHLLENGER.jpg";
import car4 from "../assets/Camaro.jpg";
import car5 from "../assets/Mustange1.jpg";
import car6 from "../assets/Bmwcover.jpg";
import Footer from "../component/Footer";

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Cars to Rent This Summer",
    author: "Muaddh Alsway",
    readTime: "8 min read",
    date: "July 2026",
    image: car1,
   content: (
   <>
      <p className="lead">
        Summer is the perfect time for road trips and adventure. Choosing the
        right rental car can transform your trip from ordinary to
        <mark>memorable and comfortable</mark>.
      </p>

      <h2>1. Convertible – Feel the Summer Freedom</h2>
      <p>
        Convertibles provide a unique driving experience with open-air
        freedom. Perfect for coastal roads, city cruises, and summer vibes.
      </p>

      <h2>2. SUV – Comfort Meets Power</h2>
      <p>
        SUVs are ideal for families or travelers with lots of luggage. Safety,
        space, and comfort make them the top choice for road trips.
      </p>

      <h2>3. Economy Cars – Efficient & Affordable</h2>
      <p>
        If you’re traveling on a budget, economy cars are fuel-efficient and
        easy to drive. Perfect for city trips and short journeys.
      </p>

      <h2>4. Luxury Cars – Drive in Style</h2>
      <p>
        Luxury rentals offer advanced features, high comfort, and unmatched
        prestige. Ideal for weddings, business trips, or special occasions.
      </p>

      <h2>5. Minivans – Family-Friendly Option</h2>
      <p>
        Minivans are unbeatable for group travel. Extra seats and storage make
        long road trips easy and convenient.
      </p>

      <div className="callout takeaway">
        ✅ Tip: Always match your car choice to your travel needs for maximum
        comfort and enjoyment.
      </div>

      <h2>Final Thoughts</h2>
      <p>
        Renting the right car ensures a smooth and enjoyable journey. Whether
        you want freedom, comfort, or style, choosing wisely makes all the
        difference.
      </p>
    </>
),
  },

  {
    id: 2,
    title: "Tips to Save on Car Rentals",
    author: "Muaddh Alsway",
    readTime: "6 min read",
    date: "July 2026",
    image: car2,
    content: (
     <>
      <p className="lead">
        Renting a car doesn’t have to break the bank. With a few simple tips,
        you can <mark>save money</mark> while enjoying a great vehicle.
      </p>

      <h2>Book Early</h2>
      <p>
        Early bookings often give you better prices and more car options. Don’t
        wait until the last minute, especially during peak seasons.
      </p>

      <h2>Avoid Airport Rentals</h2>
      <p>
        Renting from airport locations is convenient but expensive. Off-airport
        rentals can save up to 30%.
      </p>

      <h2>Use Membership Discounts</h2>
      <p>
        Check for loyalty programs, credit card perks, or insurance discounts.
        These can significantly lower your rental costs.
      </p>

      <h2>Choose the Right Car Size</h2>
      <p>
        Avoid overspending on large SUVs or luxury cars if a compact vehicle
        meets your needs. Size affects both rental and fuel costs.
      </p>

      <h2>Inspect & Avoid Fees</h2>
      <p>
        Always check the car for damages and fuel policies. Extra fees add up if
        overlooked.
      </p>

      <div className="callout takeaway">
        ✅ Pro Tip: Combine early bookings, off-airport rentals, and discounts
        for maximum savings.
      </div>
    </>
    ),
  },

  {
    id: 3,
    title: "Luxury Cars for Special Occasions",
    author: "Muaddh Alsway",
    readTime: "7 min read",
    date: "July 2026",
    image: car3,
    content: (
    <>
      <p className="lead">
        Sometimes a regular rental isn’t enough. For weddings, parties, or
        corporate events, <mark>luxury cars</mark> elevate the experience.
      </p>

      <h2>Why Rent Luxury Cars?</h2>
      <p>
        Luxury rentals combine performance, comfort, and prestige. They offer
        premium interiors, cutting-edge tech, and a statement-making exterior.
      </p>

      <h2>Popular Luxury Options</h2>
      <ul>
        <li>Sports cars for adrenaline-filled rides</li>
        <li>Sedans for executive and business travel</li>
        <li>SUVs for comfort and space in style</li>
      </ul>

      <h2>Event Matching</h2>
      <p>
        Select a car that suits the occasion. Weddings may require elegance,
        corporate events might need sophistication, and parties could benefit
        from flashy models.
      </p>

      <h2>Booking Tips</h2>
      <p>
        Luxury cars are high-demand. Book early, check insurance, and read
        reviews. Always inspect the car before leaving the lot.
      </p>

      <div className="callout takeaway">
        ✅ Key Tip: Luxury isn’t just style—it’s comfort, safety, and making a
        statement.
      </div>

      <h2>Final Thoughts</h2>
      <p>
        A well-chosen luxury rental makes your special day unforgettable.
        Treat yourself and your guests to an experience that combines
        prestige, technology, and comfort.
      </p>
    </>
    ),
  },

  {
    id: 4,
    title: "Essential Checklist Before Renting a Car",
    author: "Muaddh Alsway",
    readTime: "5 min read",
    date: "July 2026",
    image: car4,
    content: (
      <>
      <p className="lead">
        Renting a car is simple, but skipping key checks can lead to problems.
        Use this <mark>essential checklist</mark> to avoid common mistakes.
      </p>

      <h2>1. Verify License & Documents</h2>
      <p>
        Always carry a valid driver’s license, credit card, and any
        identification required by the rental company.
      </p>

      <h2>2. Inspect the Vehicle</h2>
      <p>
        Check for dents, scratches, and mechanical issues. Take photos to
        document the car’s condition.
      </p>

      <h2>3. Understand Insurance</h2>
      <p>
        Know what coverage is included and consider extra insurance if needed.
        This can save you from unexpected expenses.
      </p>

      <h2>4. Fuel Policy</h2>
      <p>
        Check whether you need to return full, pay upfront, or follow a specific
        plan. Fuel fees can be surprisingly high if ignored.
      </p>

      <h2>5. Familiarize with Features</h2>
      <p>
        Understand GPS, air conditioning, safety sensors, and other features
        before driving. Comfort and safety matter.
      </p>

      <div className="callout takeaway">
        ✅ Takeaway: Following a checklist ensures a smooth rental experience,
        avoids disputes, and makes your trip stress-free.
      </div>

      <h2>Final Thoughts</h2>
      <p>
        A little preparation goes a long way. Renting the right car, knowing
        the rules, and inspecting before driving makes your trip safe, smooth,
        and enjoyable.
      </p>
    </>
    ),
  },

  {
    id: 5,
    title: "Family-Friendly Cars for Road Trips",
    author: "Muaddh Alsway",
    readTime: "9 min read",
    date: "July 2026",
    image: car5,
    content: (
      <>
        <p>
          Traveling with family requires space, comfort, and safety.
        </p>

        <h2>Best Family Options</h2>
        <p>
          SUVs and minivans provide room for passengers and luggage while keeping
          everyone comfortable.
        </p>
      </>
    ),
  },

  {
    id: 6,
    title: "How to Choose the Perfect Rental Car",
    author: "Muaddh Alsway",
    readTime: "10 min read",
    date: "July 2026",
    image: car6,
    content: (
     <>
      <p className="lead">
        Choosing the perfect rental car can make or break your travel
        experience. <mark>Comfort, style, and convenience</mark> are just the
        beginning.
      </p>

      <div className="callout tip">
        💡 <strong>Pro Tip:</strong> Your vehicle should match your journey, not just your budget.
      </div>

      <h2>Step 1: Determine Your Travel Needs</h2>
      <p>
        Before booking, ask yourself:
      </p>
      <ul>
        <li>How many passengers will you have?</li>
        <li>How much luggage space do you need?</li>
        <li>Are you driving in urban areas or highways?</li>
        <li>Will you need off-road capability?</li>
      </ul>
      <p>
        Choosing a car that fits your needs ensures comfort, safety, and an
        enjoyable trip.
      </p>

      <h2>Step 2: Consider the Vehicle Type</h2>
      <p>
        Rental cars come in many categories. Each has advantages:
      </p>
      <ul>
        <li><strong>Economy:</strong> Affordable, fuel-efficient, perfect for city travel.</li>
        <li><strong>SUV:</strong> Spacious, safe, ideal for families or long road trips.</li>
        <li><strong>Luxury:</strong> Premium comfort, advanced features, special occasions.</li>
        <li><strong>Convertible:</strong> Fun summer drives and coastal trips.</li>
      </ul>

      <blockquote>
        “The best car is the one that makes your journey effortless and enjoyable.”
      </blockquote>

      <h2>Step 3: Budget vs. Features</h2>
      <p>
        Always balance price with features. Cheap rentals may lack GPS, safety
        sensors, or insurance. Spending a bit more often gives peace of mind and
        a better experience.
      </p>

      <div className="highlight">
        Tip: Look for rentals that include free GPS, unlimited mileage, or
        insurance coverage for added convenience.
      </div>

      <h2>Step 4: Check Reviews & Ratings</h2>
      <p>
        Reading previous customer reviews is a lifesaver. Pay attention to:
      </p>
      <ul>
        <li>Vehicle cleanliness</li>
        <li>Customer service quality</li>
        <li>Ease of pick-up and return</li>
      </ul>

      <h2>Step 5: Book Smart & Early</h2>
      <p>
        Booking early guarantees availability, better cars, and sometimes
        discounts. Avoid last-minute airport rentals—they often cost more.
      </p>

      <div className="callout takeaway">
        ✅ Key Takeaway: Plan ahead, know your needs, and pick a car that
        complements your journey.
      </div>

      <h2>Step 6: Inspect Before You Drive</h2>
      <p>
        Always inspect the car for scratches, dents, and mechanical issues. Take
        photos before leaving the lot. This prevents disputes when returning the
        vehicle.
      </p>

      <h2>Step 7: Optimize Your Travel Experience</h2>
      <p>
        Once you have the perfect rental:
      </p>
      <ul>
        <li>Adjust seats & mirrors for comfort</li>
        <li>Set up your GPS or maps app</li>
        <li>Check fuel levels and tire pressure</li>
      </ul>

      <p>
        These small steps make a big difference in comfort and safety.
      </p>

      <h2>Final Thoughts</h2>
      <p>
        Renting the perfect car requires planning, research, and attention to
        detail. But the reward is priceless: stress-free travel, more
        memorable experiences, and full control of your journey. <mark>Choose wisely
        and enjoy the road ahead!</mark>
      </p>
    </>
    ),
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) return <p>Article not found</p>;

  return (
    <div>
          <div className="blogDetailPage">
      {/* Back Button */}
      <Link to="/blog" className="backToBlog">← Back to Blog</Link>

      {/* Header */}
      <div className="blogHeader">
        <h1>{post.title}</h1>

        <div className="blogMeta">
          <span>By <strong>{post.author}</strong></span>
          <span>•</span>
          <span>{post.readTime}</span>
          <span>•</span>
          <span>{post.date}</span>
        </div>
      </div>

      {/* Social Media */}
      <div className="blogSocial">
        <span>Share:</span>
        <i className="bx bxl-facebook"></i>
        <i className="bx bxl-twitter"></i>
        <i className="bx bxl-linkedin"></i>
      </div>

      {/* Cover Image */}
      <div className="blogCover">
        <img src={post.image} alt={post.title} />
      </div>

      {/* Content */}
      <div className="blogContent">
        {post.content}
      </div>
    </div>
    <Footer/>
    </div>
  
  );
};

export default BlogDetail;
