import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    const { name, text } = this.props;

    return (
      <div className='main-cards'>
        <h3>{name}</h3>
        <p>{text}</p>
      </div>
    )
  }
}
