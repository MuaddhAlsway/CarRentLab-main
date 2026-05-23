import './Header.css'
import HeaderVideo from '../assets/HeaderVideo.mp4'
const Header = () => {
  return (
    <div>
        <header className="header">
            <video className='headerVideo' src={HeaderVideo} autoPlay loop muted></video>
            <div className="headerContent">
                <h1>Find Your Perfect Rental Car</h1>
                <p>Experience the freedom of the open road with our reliable and affordable car rentals.</p>
                <button className="headerBtn">Get Started</button>
            </div>
        </header>


    </div>
  )
}
export default Header