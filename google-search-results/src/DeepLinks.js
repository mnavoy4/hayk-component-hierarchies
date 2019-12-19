import React from "react"
import "./DeepLinks.css"

import DeepLink from "./DeepLink"

export default function DeepLinks({ deepLinks, url, query }){
    const $deepLinks = deepLinks.map(deepLink => {
        return <li key={deepLink.id}>
            <DeepLink {...deepLink} />
        </li>
    })
    return (
        <div className="deep-links">
            <ul>{$deepLinks}</ul>
            <p className="more-links">
                <a href={`https://www.google.com?q=+site:${url}+${query}`}>More results from {url} »</a>
            </p>
        </div>
    )
}

