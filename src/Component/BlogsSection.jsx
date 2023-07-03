import React, { Component } from 'react'
import Meat from './img/Meat.png';
import vegetable from './img/vegetable.png';
import cake from './img/cake.png';


export default class BlogsSection extends Component {
  render() {
    return (
      <div id='Blogs'>
        <div className='Title'>
            <h3>Blogs</h3>
            <p>words from our food lovers</p>
        </div>
        <div className='main-meal'>
            <div className='meal'>
                <img src={Meat} alt="" />
                <h4>Cooking Dining Experience</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin </p>
                <button>Read More</button>
            </div>
            <div className='meal'>
                <h4>Cooking Dining Experience</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin </p>
                <button>Read More</button>
                <img id='vegetable' src={vegetable} alt="" />
            </div>
            <div className='meal'>
                <img src={cake} alt="" />
                <h4>Cooking Dining Experience</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin </p>
                <button>Read More</button>
            </div>
            
        </div>
      </div>
    )
  }
}
