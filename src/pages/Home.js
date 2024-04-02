import React from 'react';
import Navbar from '../components/Navbar';
// import Header from './components/Header';
import Post from '../components/Post';
import Footer from '../components/Footer';
import '../styles.css';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Header /> */}
      <Post />
      <Footer /> 
    </div>
  );
}
