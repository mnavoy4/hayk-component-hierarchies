import React, { Component } from 'react'

export default class DeepLinks extends Component {

  createDeepLinks = (props) => {
    return props.deepLinks.map(deepLink => {
      return (
        <li>
          <div className='deep-link'>
            <h3><a href={deepLink.url}>{deepLink.label}</a></h3>
            <p>{deepLink.description}</p>
          </div>
        </li>
      )
    })
  }
  render(){
    return (
      <div className='deep-links'>
        <ul>{this.createDeepLinks(this.props.data)}</ul>
        <p className="more-links"><a href="https://www.google.com?q=+site:https://flatironschool.com+Flatiron+School">More results from https://flatironschool.com »</a></p>
      </div>
    )
  }
}