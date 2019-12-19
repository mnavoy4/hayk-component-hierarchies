import React from "react"
import "./SecondaryNavigation.css"

import SearchType from "./SearchType.js"

export default function SecondaryNavigation(){
    const searchTypes = [{
        id: 1,
        url: "#",
        icon: "search",
        label: "All",
        isActive: true,
    },{
        id: 2,
        url: "#",
        icon: "newspaper",
        label: "News",
    },{
        id: 3,
        url: "#",
        icon: "map-marked",
        label: "Maps",
    },{
        id: 4,
        url: "#",
        icon: "video",
        label: "Videos",
    },{
        id: 5,
        url: "#",
        icon: "images",
        label: "Images",
    },{
        id: 6,
        url: "#",
        icon: "ellipsis-v",
        label: "More",
    }]
    const $SearchTypes = searchTypes.map(searchType => {
        const { id, icon, label, url, isActive } = searchType
        return <li key={id}>
            <SearchType
                icon={icon}
                label={label}
                url={url}
                isActive={isActive}
            />
        </li>
    })
    return (
        <nav className="secondary-navigation">
            <ul className="search-types">
                {$SearchTypes}
            </ul>
            <ul className="configuration">
                <li>
                    <a href="#">Settings</a>
                </li>
                <li>
                    <a href="#">Tools</a>
                </li>
            </ul>
        </nav>
    )
}
