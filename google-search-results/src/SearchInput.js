import React, { Component } from "react"
import "./SearchInput.css"

export default class SearchInput extends Component {
    render(){
        return (
            <form className="search-input">
                <input type="text" name="searchText" />
                <i className="fa fa-search"></i>
            </form>
        )
    }
}
