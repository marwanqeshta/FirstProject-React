import React, { Component } from 'react'

export default class Chef extends Component {
  render() {
    const {price, title} = this.props
    return (
      <div className='prices-div'>
        <h2>{price}</h2>
        <p>{title}</p>
      </div>
    )
  }
}
