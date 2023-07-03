import React, { Component } from 'react'
import Card from '../mock/Card'
import Orange from './img/orange-juice (1) 1.png';
import chef from './img/chef 2.png';
import foods from './img/restaurant 1.png';

export default class SpecialSection extends Component {
  render() {
    return (
      <div id='Special'>
        <div className='Title'>
            <h2>Special</h2>
            <p>What makes us special</p>
        </div>
        <div className='cards'>
        <div className='card-1'>
            <>
            <img src={Orange} alt='Orange'></img>
            <Card name="Fresh food" text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. '/>
            </>
        </div>
        <div className='card-1'>
            <>
            <img src={chef} alt='chef'></img>
            <Card name="skilled Chef" text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. '/>
            </>
        </div>
        <div className='card-1'>
            <>
            <img src={foods} alt='foods'></img>
            <Card name="Exotic dishes" text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. '/>
            </>
        </div>
        </div>
      </div>
    )
  }
}
