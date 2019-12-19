import React from "react"
import "./RelatedSearches.css"

import ExternalLink from "./ExternalLink"

export default function RelatedSearches({ links }){
    const $links = links.map(({ id, label, linkUrl, imageUrl }) => {
        return (
            <li key={id}><ExternalLink
                label={label}
                linkUrl={linkUrl}
                imageUrl={imageUrl}
            /></li>
        )
    })
    return (
        <section className="related-searches">
            <h3>People also search for</h3>
            <ul>{$links}</ul>
        </section>
    )
}
