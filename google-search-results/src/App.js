import React, { Component } from 'react'
import data from './data'
import Header from './Components/Header.js'
import './Components/SearchResults.js'
import "./App.css"
import SearchResults from './Components/SearchResults'
import SearchHighlights from './Components/SearchHighlights'

export default class App extends Component {
    state = data
    render(){
        return (
             <div class="App">
               <Header />
               <main>
                  <SearchResults data={data} />
                  <SearchHighlights data={data.knowledgePanel} />
               </main>
            </div>           
        )
    }
}
