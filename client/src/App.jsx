import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";


import RentPage from "./pages/Rent"; // create this page

import Home from "./pages/Home";
import About from "./pages/about";
import ScrollToTop from "./component/ScrollToTop";

import Service from "./pages/Service";
import RentMainPage from "./pages/RentMainPage";
import ContactPage from "./pages/ContactUs";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/Logout";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetails";
function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar stays on top */}
        <ScrollToTop /> {/* <- Add here */}
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/services" element={<Service />} />
   <Route path="/rents" element={<RentMainPage />} />
<Route path="/rent/:carId" element={<RentPage />} />
 <Route path="/contact" element={<ContactPage />} />
 <Route path="/Login" element={<LoginPage/> } />
  <Route path="/signup" element={<LogoutPage/> } />
     <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail/>} />
</Routes>

       
     
    </Router>
  );
}

export default App;
