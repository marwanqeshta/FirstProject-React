import React, { Component } from 'react'
import img from './img/Component 4.png';

export default class DiscountSection extends Component {
  render() {
    return (
      <div className='Discount'>
        <div className='img1'><img src={img} alt="" /></div>
        <div className='content'>
            <p>Come join us for a lunch</p>
            <p>this weekend and enjoy</p>
            <h3>FLAT 10% OFF</h3>
            <button>Book Table</button>
        </div>
        <div className='img2'><img src={img} alt="" /></div>
      </div>
    )
  }
}
