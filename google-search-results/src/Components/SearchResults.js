import React, { Component } from 'react';
import SearchResult from './SearchResult';
import QuestionAnswers from './QuestionAnswers';


export default class SearchResults extends Component {


  render(){

    return (
      <section className='search-results'>
        <p className='totals'>About {this.props.data.resultCount} search results ({this.props.data.searchTime} seconds)</p>
        <ul>
          <SearchResult data={this.props.data.searchResults[0]} />
          <QuestionAnswers data={this.props.data} />
          <br/>
          <SearchResult data={this.props.data.searchResults[1]} />
        </ul>
      </section>
    )
  }
}