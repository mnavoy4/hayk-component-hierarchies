import React from "react"
import "./DeepLink.css"

export default function DeepLink({ label, url, description }){
    return (
        <div className="deep-link">
            <h3><a href={url}>{label}</a></h3>
            <p>{description}</p>
        </div>
    )
}


