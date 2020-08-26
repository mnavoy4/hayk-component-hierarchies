import React, { Component } from 'react'
import PrimaryNavigation from './PrimaryNavigation.js'
import SecondaryNavigation from './SecondaryNavigation.js'

export default class Header extends Component {
  render(){
    return(
      <div className='header'>
        <PrimaryNavigation />
        <SecondaryNavigation />
      </div>
    )
  }
}