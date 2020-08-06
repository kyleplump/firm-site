import React from "react"
import Navigation from '../components/Navigation';
import Masthead from '../components/Masthead';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import 'antd/dist/antd.css';
import './index.css';
import 'animate.css';

function Home() {

    return (
      <div className="app">
        <Navigation />
        <Masthead />
        <Services />
        <AboutUs />
        <ContactUs />
        <Footer />
      </div>
    );
}
export default Home;
