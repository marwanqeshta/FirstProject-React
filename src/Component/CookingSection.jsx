import React, { Component } from 'react'
import Rectangle from './img/Rectangle 34.png';

export default class CookingSection extends Component {
  render() {
    return (
      <div className='container1'>
        <div className="Cooking">
        <div className="contact">
        <h1>Cooking ingredients</h1>
        <h2>What goes in</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer nulla orci convallis sit. At libero lacus, eget fermentum sed turpis curabitur donec consectetur. Imperdiet aliquam quam mauris semper suscipit..</p>
        <button>Read more</button>
      </div>
      <div className="contact-img"> <img src={Rectangle} alt="" /></div>
    </div>
      </div>
    )
  }
}
