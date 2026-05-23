import Footer from "../component/Footer"
import Header from "../component/Header"
import OurImpession from "../component/OurImpession"
import Store from "../component/Store"
import Testimonial from "../component/testemoinial"

const Home = () => {
  return (
    <div>
         <Header />
            <OurImpession />
          
            <Store />
              <Testimonial/>
        
            <Footer/>
    </div>
  )
}
export default Home