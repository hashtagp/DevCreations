import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import Signup from './pages/Signup/Signup'
import Payment from "./pages/Payment/Payment";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function App() {

  return (
    <>
      <div className="app">
        <Navbar/>
        <div className="body">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signUp" element={<Signup/>} />
          <Route path="/payment" element={<Payment/>} />
        </Routes>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
