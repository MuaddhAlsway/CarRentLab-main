import './BlogView.css'
import BlogView11 from '../assets/BlogView2.jpg'
import BlogView1 from '../assets/BlogView11.jpg'

const BlogView = () => {
  return (
    <div className='blogView'>
        <div className="containerBlog">
                 <div className="title">
            {/* on left side as row */}
            <h1>Blog</h1>
            <p>Our latest Blog posts</p>
            <button>View All</button>
        </div>
          <div className="itemContianer">
            {/* each item should be row only 2 */}
            <div className="item">
            {/* the image it should be cover */}
                <img src={BlogView11} alt="" />
                {/* should card on the image but from bottom */}
                <div className="card">
                    <div className="title">
                        <h4>Rent is effect the econmy</h4>
                        <span>1/7/2026</span>
                        <p>Rent is a best way for invesment</p>
                    </div>
                </div>
                
            </div>
          <div className="item">
            {/* the image it should be cover */}
                <img src={BlogView1} alt="" />
                {/* should card on the image but from bottom */}
                <div className="card">
                    <div className="title">
                        <h4>Rent is effect the econmy</h4>
                        <span>1/7/2026</span>
                        <p>Rent is a best way for invesment</p>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
       
      
    </div>
  )
}
export default BlogView