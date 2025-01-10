import React from 'react';
import footerLogo from "../assets/news/footer-logo.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-10 px-4'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center gap-8'>
        <div className='md:w-1/2 w-full'>
          <img src={footerLogo} alt="Logo" className='mb-5 w-36' />
          <ul className='flex flex-col md:flex-row gap-4'>
            <li><a href="home" className='hover:text-primary' style={{ color: '#FFD700' }}>Home</a></li>
            <li><a href="services" className='hover:text-primary' style={{ color: '#FFD700' }}>Services</a></li>
            <li><a href="about" className='hover:text-primary' style={{ color: '#FFD700' }}>About Us</a></li>
            <li><a href="contact" className='hover:text-primary' style={{ color: '#FFD700' }}>Contact</a></li>
          </ul>
        </div>

        <div className='md:w-1/2 w-full'>
          <p className='mb-4'>
            Subscribe to our newsletter to receive the latest updates, news and offers!
          </p>
          <div className='flex'>
            <input
              type="email" 
              placeholder='Enter your email'
              className='w-full px-4 py-2 rounded-l-md text-black'
            />
            <button className='bg-[#FFD700] px-6 py-2 rounded-r-md hover:bg-primary-dark'>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-6'>
        <ul className='flex gap-6 mb-4 md:mb-0'>
          <li><a href="privacy" className='hover:text-primary' style={{ color: '#FFD700' }}>Privacy Policy</a></li>
          <li><a href="terms" className='hover:text-primary' style={{ color: '#FFD700' }}>Terms of Services</a></li>
        </ul>

        <div className='flex gap-6'>
          <a href="https://facebook.com" target='_blank' rel='noopener noreferrer' className='hover:text-primary' style={{ color: '#FFD700' }}>
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target='_blank' rel='noopener noreferrer' className='hover:text-primary' style={{ color: '#FFD700' }}>
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target='_blank' rel='noopener noreferrer' className='hover:text-primary' style={{ color: '#FFD700' }}>
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
