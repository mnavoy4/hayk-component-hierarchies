import React, { Component } from "react"
import data from "./data"
import "./App.css"

import PrimaryNavigation from "./PrimaryNavigation"
import SecondaryNavigation from "./SecondaryNavigation"
import SearchResults from "./SearchResults"
import SearchHighlights from "./SearchHighlights"

export default class App extends Component {
    state = data
    render(){
        return (
            <div className="App">
                <header>
                    <PrimaryNavigation />
                    <SecondaryNavigation />
                </header>
                <main>
                    <SearchResults
                        searchResults={this.state.searchResults}
                        resultCount={this.state.resultCount}
                        searchTime={this.state.searchTime}
                        query={this.state.query}
                        questions={this.state.questions}
                    />
                    <SearchHighlights
                        {...this.state.knowledgePanel}
                    />
                </main>
            </div>
        )
    }
}
