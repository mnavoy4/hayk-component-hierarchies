import React, { Component } from 'react'


export default class RelatedSearches extends Component {

  renderLi = (data) => {
    return data.map(result => {
      return (
        <li>
          <div class='external-link'>
            <a href={result.linkUrl}>
              <figure><img src={result.thumbnailUrl} alt={result.label}/></figure>
              <p>{result.label}</p>
            </a>
          </div>
        </li>
      )
    })
  }

  render(){
    let data = this.props.data
    console.log(data);
    return(
      <section className='search-highlights'>
        <h3>People also search for</h3>
        <ul>
          {this.renderLi(data.otherResults)}
        </ul>
      </section>
    )
  }
}