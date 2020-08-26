import React, { Component } from 'react'

export default class AppCard extends Component {

  renderAppCard = (props) => {
    return props.appCards.map(appCard => {
      return (
        <li>
          <div className='app-card'>
            <a href={appCard.url}>
              <p>{appCard.content}</p>
              <p className='details'><span className='app'>{appCard.app}</span><time>{appCard.recency}</time></p>
            </a>
          </div>
        </li>
      )
    })
  }
  render(){
    return (
      <ul className='app-cards'>
        {this.renderAppCard(this.props.data)}
      </ul>
    )
  }
}