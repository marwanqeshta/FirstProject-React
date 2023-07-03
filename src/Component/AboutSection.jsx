import React, { Component } from 'react'
import Food from './img/food.png';

export default class AboutSection extends Component {
  render() {
    return (
      <div className='container1' id='About'>
        <div className="About-section">
        <div className="contact">
        <h1>About Us</h1>
        <h2>Discover the taste of world class vegan dishes from the kitchen of Go Green Dine</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer consectetur. Imperdiet aliquam quam mauris semper suscipit. Molestie maecenas interdum pharetra id velit sed nec.tetur sit sagittis pretium eget vitae semper pellentesque pellentesque.</p>
        <button>Read more</button>
      </div>
      <div className="contact-img"> <img src={Food} alt="" /></div>
    </div>
      </div>
    )
  }
}
