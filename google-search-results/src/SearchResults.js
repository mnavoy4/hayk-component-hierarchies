import React from "react"
import "./SearchResults.css"

import { head, tail } from "lodash/fp"

import SearchResult from "./SearchResult"
import QuestionAnswers from "./QuestionAnswers"

export default function SearchResults({ query, searchResults, resultCount, searchTime, questions }){
    const firstResult = head(searchResults)
    const $firstResult = <li>
        <SearchResult {...firstResult} query={query} />
    </li>
    const $otherResults = tail(searchResults)
        .map(result => <li key={result.id}><SearchResult {...result} query={query} /></li>)
    return (
        <section className="search-results">
            <p className="totals">About {resultCount} search results ({searchTime} seconds)</p>
            <ul>
                {$firstResult}
                <li>
                    <QuestionAnswers
                        questions={questions}
                    />
                </li>
                {$otherResults}
            </ul>
        </section>
    )
}
