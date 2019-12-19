import React from "react"
import "./SearchResult.css"

import dayjs from "dayjs"

import AppCards from "./AppCards"
import DeepLinks from "./DeepLinks"

export default function SearchResult({ query, label, url, description, deepLinks, lastVisit, visitFrequency, appCards, appPlatform }){
    const formattedLastVisit = dayjs(lastVisit).format("MM/D/YY")
    const formattedFrequency = visitFrequency > 10 ? "many" : visitFrequency
    return (
        <div className="search-result">
            <h3><a href={url}>{label}</a></h3>
            <p className="url">
                {url}
                {
                    appPlatform
                        ? <img src={appPlatform.imageUrl} alt={appPlatform.label} />
                        : null
                }
            </p>
            <p className="description">{description}</p>
            {
                lastVisit
                    ? <p className="last-visit">You've visited this page {formattedFrequency} times. Last visit: {formattedLastVisit}</p>
                    : null
            }
            {
                deepLinks
                    ? <DeepLinks
                        deepLinks={deepLinks}
                        url={url}
                        query={query}
                    />
                    : null
            }
            {
                appCards
                    ? <AppCards appCards={appCards} />
                    : null
            }
        </div>
    )
}
