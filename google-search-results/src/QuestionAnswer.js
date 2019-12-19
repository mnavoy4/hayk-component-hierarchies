import React, { Component } from "react"
import "./QuestionAnswer.css"

import dayjs from "dayjs"

export default class QuestionAnswers extends Component {
    state = {
        isOpen: false,
    }
    formattedDate = dayjs(this.props.date).format("MMM DD, YYYY")
    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render(){
        return (
            <div className="question-answer">
                <header onClick={this.toggleOpen}>
                    <h3>{this.props.summary}</h3>
                    {
                        this.state.isOpen
                           ? <i className="fa fa-angle-down"></i>
                           : <i className="fa fa-angle-up"></i>
                    }
                </header>
                {
                    this.state.isOpen
                        ? (
                            <main>
                                <p>{this.props.detail.answer}</p>
                                <time>{this.formattedDate}</time>
                                <a href={this.props.detail.link.url}>
                                    <h3>{this.props.detail.link.label}</h3>
                                    <p className="url">{this.props.detail.link.url}</p>
                                </a>
                                <p>Search for: <a href={this.props.detail.searchUrl}>{this.props.summary}</a></p>
                            </main>
                        )
                        : null
                }
            </div>
        )
    }
}

