import React, { Component } from 'react'

export default class Profiles extends Component {

  renderProfileLis = () => {
    return this.props.data.profiles.map(profile => {
      return (
        <li>
          <div className='external-link'>
            <a href={profile.url}>
              <figure><img src='#'></img></figure>
              <p>{profile.label}</p>
            </a>
          </div>
        </li>
      )
    })
  }
  render(){
    return (
      <section className='profiles'>
        <h3>Profiles</h3>
        <ul>
          {this.renderProfileLis}
        </ul>
      </section>
    )
  }
}