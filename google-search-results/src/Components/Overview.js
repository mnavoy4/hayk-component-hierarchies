import React, { Component } from 'react'

export default class Overview extends Component {
  render(){
    return (
      <section className='overview'>
        <div>
          <h2>{this.props.data.title}</h2>
          <p>{this.props.data.subTitle}</p>
        </div>
        <a href='#'><i className='fa fa-share-alt'></i></a>
      </section>
    )
  }
}