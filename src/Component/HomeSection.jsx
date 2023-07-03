/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import img from './img/logo.png';
import './Style.css';
import search from './img/akar-icons_search.png';


export default class HomeSection extends Component {
  render() {
    return (
      <div id='Home' >
        <div className='bake-ground'></div>
        <div className='main-section' >
        <div className='HomeSection'>
       <header >
        <img src={img} alt="" />
        <nav>
            <ul>
            <li><a href="#Home" >Home</a></li>
            <li><a href="#About" >About</a></li>
            <li><a href="#Special" >Special</a></li>
            <li><a href="#Menu"  >Menu</a></li>
            <li><a href="#Blogs"  >Blogs</a></li>
            <li><img src={search} alt="" /></li>
            </ul>    
        </nav>
    </header>
    
    <div className='second-div'>
    <div className='lines'></div>
      <p>Book Now </p>
      <div className='lines'></div>
    </div>
        
      </div> 
    
        <div className='cover'>
            <h2>Welcome To</h2>
            <h2>Golden View Dine </h2>
            <p>Explore the authentic vegan dishes with your friends and family</p>
            <button>Read more</button>
        </div>
        </div>
      </div>
    )
  }
}
