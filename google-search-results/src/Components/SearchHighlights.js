import React, { Component } from 'react';
import Overview from './Overview';
import ImageBar from './ImageBar';
import Details from './Details';
import Profiles from './Profiles';
import RelatedSearches from './RelatedSearches'

export default class SearchHighlights extends Component {
  render(){
    let data = this.props.data;
    return (
      <section class='search-highlights'>
        <header>
          <ImageBar data={data}/>
          <Overview data={data}/>
        </header>
        <main>
          <Details data={data}/>
          <Profiles data={data}/>
          <RelatedSearches data={data} />
        </main>
      </section>
    )
  }
}