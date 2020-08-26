import React, { Component } from 'react'


export default class QuestionAnswers extends Component {
  
  renderQuestionAnswer = (props) => {
    return props.questions.map(question => {
      return (
        <div className='question-answer'>
          <header>
            <h3>{question.summary}</h3>
            <i className='fa fa-angle-up'></i>
          </header>
        </div>
      )
    })
  }
  render(){
    return (
      <ul>
        <li>
          <div className='question-answers'>
            <h3>People also ask</h3>
            {this.renderQuestionAnswer(this.props.data)}
          </div>
        </li>
      </ul>
    )
  }
}