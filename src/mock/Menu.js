import React, { Component } from 'react'

export default class Menu extends Component {
  render() {
    const {text1 , text2 , price  } = this.props;
    return (
      <div>
        <div className='paragraph'><h4>{text1}</h4>
                     <p>{text2}</p>
                </div>
                <div className='price'>{price}</div>
      </div>
    )
  }
}
