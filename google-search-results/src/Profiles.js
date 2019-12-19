import React from "react"
import "./Profiles.css"

import ExternalLink from "./ExternalLink"

export default function Profiles({ profiles }){
    const $profiles = profiles.map(({ id, label, linkUrl, imageUrl }) => {
        return (
            <li key={id}>
                <ExternalLink
                    label={label}
                    linkUrl={linkUrl}
                    imageUrl={imageUrl}
                />
            </li>
        )
    })
    return (
        <section className="profiles">
            <h3>Profiles</h3>
            <ul>{$profiles}</ul>
        </section>
    )
}


