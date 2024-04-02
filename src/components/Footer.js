import React from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
import image5 from '../images/image5.png';

const Footer = () => {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate('/add-post');
    };

  return (
    <footer className="footer">
      <button className="add-post-btn"><img src={image1} alt="Image 1" style={{ width: '2rem' }} /></button>
      <button className="add-post-btn"><img src={image2} alt="Image 2" style={{ width: '2rem' }} /></button>
      <button className="add-post-btn" onClick={handleClick}><img src={image3} alt="Image 3" style={{ width: '2rem' }}/></button>
      <button className="add-post-btn"><img src={image4} alt="Image 4" style={{ width: '2rem' }}/></button>
      <button className="add-post-btn"><img src={image5} alt="Image 5" style={{ width: '2rem' }} /></button>
    </footer>
  );
}

export default Footer;
