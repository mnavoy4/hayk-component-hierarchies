import React, { Component } from 'react'

export default class Details extends Component {
  render(){
    let data = this.props.data
    return (
      <section className='details'>
        <p className='description'>{data.description}</p>
        <ul>
          <li>
            <dt>Founder(s)</dt>
            <dd><a href={data.founders[0].url}>{data.founders[0].label}, </a><span>{data.founders[1].label}</span> </dd>
          </li>
          <li>
            <dt>Employees:</dt>
            <dd>{data.employees}</dd>
          </li>
          <li>
            <dt>Owner:</dt>
            <dd><a href={data.owner.url}>{data.owner.label}</a></dd>
          </li>
          <li>
            <dt>Headquarters location:</dt>
            <dd><a href={data.headquarters.url}>{data.headquarters.label}</a></dd>
          </li>
          <li>
            <dt>Founded:</dt>
            <dd>{data.yearFounded}</dd>
          </li>
        </ul>
      </section>
    )
  }
}