import React, { Component } from 'react'
import dish from './img/dish 1.png';
import chefs from './img/chefs 1.png';
import team from './img/team 1.png';
import Chef from '../mock/Chef';



export default class ChefSection extends Component {
  render() {
    return (
      <div >
        <div className='main-div'>
            <div className='secondary-div'>
                <div><img src={dish} alt="" /></div>
                <div>
                    <Chef  price='250+' title='Delicacy'/>
                </div>
            </div>
            <div className='secondary-div' >
                <div><img src={chefs} alt="" /></div>
                <div>
                    <Chef  price='10+' title='Renowed chefs'/>
                </div>
            </div>
            <div className='secondary-div'>
                <div><img src={team} alt="" /></div>
                <div>
                    <Chef  price='30+' title='Members'/>
                </div>
            </div>
        </div>

      </div>
    )
  }
}
