import React from "react"
import "./QuestionAnswers.css"

import QuestionAnswer from "./QuestionAnswer.js"

export default function QuestionAnswers({ questions }){
    const $questions = questions.map(question => {
        return <QuestionAnswer key={question.id} {...question} />
    })
    return (
        <div className="question-answers">
            <h3>People also ask</h3>
            {$questions}
        </div>
    )
}
