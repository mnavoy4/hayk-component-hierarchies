import React, { Component } from 'react'

export default class ImageBar extends Component {

  renderLis = (data) => {
    return data.imageThumbnailUrls.map(url => {
      return (
        <li style={{backgroundImage: `url(${url})`}}></li>
      )
    })
  }
  render(){
    let data = this.props.data
    return(
      <div className='image-bar'>
        <img src={data.leadImageUrl} className="lead-image" alt="lead" />
        <div className='supporting-images'>
          {this.renderLis(data)}
        </div>
      </div>
    )
  }
}