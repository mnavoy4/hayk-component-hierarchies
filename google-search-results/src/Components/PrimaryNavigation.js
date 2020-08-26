import React, { Component } from 'react'
import UserNavigation from './UserNavigation.js'

export default class PrimaryNavigation extends Component {
  render(){
    return (
      <div className='primary-navigation'>
        <span id="logo"><a href="https://google.com"><img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google logo" /></a></span>
        <form className="search-input"><input type="text" name="searchText" /><i className="fa fa-search"></i></form>
        <UserNavigation />
      </div>
    )
  }
}