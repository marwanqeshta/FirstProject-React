import React, { Component } from 'react'
import email from './img/_mail.png';

export default class FormSection extends Component {
  render() {
    return (
      <div>
        <div className='Forms'>
          <div className='Emails'><img src={email} alt="" /><h3>Subscribe to our Newsletter</h3></div>
          <div>
            <form>
              <input placeholder='Your Email id'></input>
            </form>
          </div>
          <button  type='submit'>Subscribe</button>
        </div>
      </div>
    )
  }
}
