import React from "react"
import "./Overview.css"

export default function Overview({ title, subTitle }){
    return (
        <section className="overview">
            <div>
                <h2>{title}</h2>
                <p>{subTitle}</p>
            </div>
            <a href="#"><i className="fa fa-share-alt"></i></a>
        </section>
    )
}
