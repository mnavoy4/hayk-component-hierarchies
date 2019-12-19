import React from "react"
import "./ExternalLink.css"

export default function ExternalLink(props){
    const { label, imageUrl, linkUrl } = props
    return (
        <div className="external-link">
            <a href={linkUrl}>
                <figure>
                    <img src={imageUrl} alt={label} />
                </figure>
                <p>{label}</p>
            </a>
        </div>
    )
}


