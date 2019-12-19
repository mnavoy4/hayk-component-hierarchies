import React from "react"
import "./PrimaryNavigation.css"

import SearchInput from "./SearchInput"
import Logo from "./Logo"
import UserNavigation from "./UserNavigation"

export default function PrimaryNavigation() {
    return (
        <div className="primary-navigation">
            <Logo />
            <SearchInput />
            <UserNavigation />
        </div>
    )
}
