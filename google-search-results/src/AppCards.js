import React from "react"
import "./AppCards.css"

import AppCard from "./AppCard"

export default function AppCards({ appCards }){
    const $appCards = appCards.map(appCard => {
        return <li key={appCard.id}>
            <AppCard {...appCard} />
        </li>
    })
    return (
        <ul className="app-cards">{$appCards}</ul>
    )
}

