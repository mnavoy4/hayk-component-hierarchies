import React from "react"
import "./SearchType.css"

export default function SecondaryNavigation(props){
    const { url, icon, label, isActive } = props
    return (
        <a className={`search-type ${isActive ? "active" : ""}`} href={`${url}`}>
            <i className={`fa fa-${icon}`}></i>
            <span>{label}</span>
        </a>
    )
}

