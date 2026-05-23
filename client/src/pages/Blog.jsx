
import car5 from '../assets/Bmwcover.jpg'; // اضف صورة جديدة
import car6 from '../assets/img1.jpg'; // اضف صورة جديدة
// Blog.js
import { Link } from 'react-router-dom';
import './Blog.css';
import car1 from '../assets/BlogView2.jpg';
import car2 from '../assets/BlogView11.jpg';
import car3 from '../assets/CAHLLENGER.jpg';
import car4 from '../assets/Camaro.jpg';
import Footer from '../component/Footer';


const Blog = () => {
  const posts = [
    { id: 1, title: "Top 5 Cars to Rent This Summer", summary: "Discover the best cars to rent for your summer road trip and enjoy comfort and style.", img: car1, content: "<p>Full article content here...</p>" },
    { id: 2, title: "Tips to Save on Car Rentals", summary: "Learn how to get the best deals on car rentals without compromising quality.", img: car2, content: "<p>Full article content here...</p>" },
    { id: 3, title: "Luxury Cars for Special Occasions", summary: "Treat yourself with luxury cars for weddings, parties, or corporate events.", img: car3, content: "<p>Full article content here...</p>" },
    { id: 4, title: "Essential Checklist Before Renting a Car", summary: "Ensure a safe and smooth rental experience with this essential checklist.", img: car4, content: "<p>Full article content here...</p>" },
    { id: 5, title: "Family-Friendly Cars for Road Trips", summary: "Explore the best vehicles that provide safety, space, and comfort for your family.", img: car5, content: "<p>Full article content here...</p>" },
    { id: 6, title: "How to Choose the Perfect Rental Car", summary: "Tips and tricks for selecting the right car that fits your travel needs and budget.", img: car6, content: "<p>Full article content here...</p>" },
  ];

  return (
    <div>
<div className="blogPage">
      <h1 className="blogTitle">Car Rental Blog</h1>

      <div className="blogPosts">
        {posts.map(post => (
          <div className="blogCard" key={post.id}>
            <div className="blogImage">
              <img src={post.img} alt={post.title} />
            </div>
            <div className="blogContent">
              <h2>{post.title}</h2>
              <p>{post.summary}</p>
              <Link to={`/blog/${post.id}`}>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    
    </div>
    <Footer/>
    </div>
    
    
  );
  
};

export default Blog;
