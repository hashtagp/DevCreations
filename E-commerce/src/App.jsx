import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Signup from './pages/Signup/Signup';
import Payment from "./pages/Payment/Payment";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Products from "./components/Products";
import Contact from "./pages/Contact/Contact";
import FAQ from "./pages/FAQ/FAQ";
import TermsAndConditions from "./pages/TnC/TnC";
import Package from "./pages/Package/package";
import Profile from "./pages/Profile/profile";
import AboutUs from "./pages/about us/aboutus";
import CartPage from "./pages/Cart/cart";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/package" element={<Package />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;