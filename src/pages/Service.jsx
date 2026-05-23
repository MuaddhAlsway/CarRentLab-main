import BannerService from "../component/BannerService"
import HeaderService from "../component/HeaderService"
import ServicesCard from "../component/ServicesCard"
import Pricing from "../component/Pricing"
import BlogView from "../component/BlogView"
import Footer from "../component/Footer"

const Service = () => {
  return (
    <div>
        <HeaderService/>
        <ServicesCard/>
        <BannerService/>
        <Pricing/>
        <BlogView/>
        <Footer/>
    </div>
  )
}
export default Service