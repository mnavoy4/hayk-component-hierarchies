import React, { Component } from 'react'
import DeepLinks from './DeepLinks'
import AppCard from './AppCard'

export default class SearchResult extends Component {
  render(){
    const data = this.props.data
    return (
      <li>
        <div className='search-result'>
          <h3><a href={data.url}>{data.label}</a></h3>
          <p className='url'>{data.url}</p>
          <p className='description'>{data.description}</p>
          {data.lastVisit ? 
            <p className='last-visit'>You've visited this page many times. Last visit: {data.lastVisit}</p>
            : null}
          {data.deepLinks ? <DeepLinks data={data}/> : <AppCard data={data}/>}
        </div>
      </li>
    )
  }
}