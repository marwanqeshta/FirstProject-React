import React, { Component } from 'react'
import logos from './img/logo.png';
import Instagram from './img/Instagram.png';
import Twitter from './img/Twitter.png';
import YouTube from './img/YouTube.png';
import email from './img/email.png';
import location from './img/location.png';
import phone from './img/phone.png';


export default class ContactSection extends Component {
  render() {
    return (
      <div>
        <div className='Contact'> 
            <div className='Contact-1'>
                <div><img src={logos} alt="" /><h4>Golden View Dine</h4> </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin </p>
                <div className='icon'><div><img src={Instagram} alt="" /></div>
                 <div><img src={Twitter} alt="" /> </div>
                 <div> <img src={YouTube } alt="" /></div></div>
            </div>
            <div className='Contact-2'>
                <h3>Other Links</h3>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms & conditions</li>
                    <li>Blogs</li>
                    <li>our team</li>
                    <li>Our kitchen</li>
                </ul>
            </div>
            <div className='Contact-3'>
                <h3>Contact Us</h3>
                <div><img src={email} alt="" />Gogreendineservice@gmail.com</div>
                <div><img src={location} alt="" /><p>AZ complex bylane3 Mandari Rd Mumbai 1100867</p> </div>
                <div><img src={phone} alt="" />+1800 287 256</div>
            </div>
        </div>
      </div>
    )
  }
}
