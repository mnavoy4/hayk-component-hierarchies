import React from "react"
import "./AppCard.css"

export default function AppCard({ content, url, recency, app }){
    return (
        <div className="app-card">
            <a href={url}>
                <p>{content}</p>
                <p className="details">
                    <span className="app">{app}</span>
                    <time>{recency} ago</time>
                </p>
            </a>
        </div>
    )
}
