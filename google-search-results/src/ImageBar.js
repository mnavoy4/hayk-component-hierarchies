import React from "react"
import "./ImageBar.css"

export default function ImageBar({ leadImageUrl, supportingImages }){
    const $supportingImages = supportingImages.map((url, index) => {
        return <li key={index} style={{backgroundImage: `url(${url})`}}></li>
    })
    return (
        <div className="image-bar">
            <img src={leadImageUrl} className="lead-image" alt="lead" />
            <div className="supporting-images">
                {$supportingImages}
            </div>
        </div>
    )
}


