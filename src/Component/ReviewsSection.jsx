import React, { Component } from 'react'
import girl from './img/girl.png';
import man from './img/man.png';
import group from './img/Group 19.png';

export default class ReviewsSection extends Component {
  render() {
    return (
      <div>
        <div className='Title'>
            <h2>Reviews</h2>
            <p>words from our food lovers</p>
        </div>
        <div className='comments'>
        <div className='comment-1'>
            <div className='section-comment1'>
                <div><img src={girl} alt="" /></div>
                <div className='section-comment2'>
                    <span>Alex andrina</span>
                    <img src={group} alt="" />
                </div>
            </div>
            <div><p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “</p></div>
        </div>
        <div className='comment-2'>
            <div className='section-comment1'>
                <div><img src={man} alt="" /></div>
                <div className='section-comment2'>
                    <span>Alex andrina</span>
                    <img src={group} alt="" />
                </div>
            </div>
            <div><p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “</p></div>
        </div>
        <div className='comment-3'>
            <div className='section-comment1'>
                <div><img src={girl} alt="" /></div>
                <div className='section-comment2'>
                    <span>Alex andrina</span>
                    <img src={group} alt="" />
                </div>
            </div>
            <div><p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “</p></div>
        </div>
        </div>

      </div>
    )
  }
}
