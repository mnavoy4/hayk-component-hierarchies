import React from "react"
import "./UserNavigation.css"

export default function UserNavigation(){
    return (
        <nav className="user-navigation">
            <ul>
                <li className="apps">
                    <a href="#">
                        <i className="fa fa-th"></i>
                    </a>
                </li>
                <li className="profile">
                    <a href="#">
                        <img src="https://lh3.googleusercontent.com/-W85Kft4LxYk/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rfuaNPMpoEmUvu4WR_lx0wXeH32pg.CMID/s64-c/photo.jpg" alt="Profile" />
                    </a>
                </li>
            </ul>
        </nav>
    )
}
