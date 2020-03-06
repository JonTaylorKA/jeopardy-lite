import React, { Component } from "react"
import JeopardyService from "../../jeopardyService"

class Jeopardy extends Component {
    constructor(props) {
        super(props)
        this.client = new JeopardyService()
        this.state = {
            data: null,
            score: 0,
            answerSubmitted: false,
            formData: {
                answer: ""
            }
        }
    }

    updateScore(value) {
        let currentScore = this.state.score
        this.setState({
            score: currentScore + value
        })
    }

    getNewQuestion(count=1) {
        return this.client.getQuestion(count).then(result => {
            this.setState({
                data: result.data
            })
        })
    }

    componentDidMount() {
        this.getNewQuestion()
    }

    handleAnswerChange = event => {
        let formData = this.state.formData
        formData[event.target.name] = event.target.value
        this.setState({ formData })
    }

    handleAnswerSubmit = event => {
        event.preventDefault()
        if (
            this.state.formData.answer.toLowerCase() ===
            this.state.data[0].answer.toLowerCase()
        ) {
            this.updateScore(parseInt(this.state.data[0].value || 0))
        } else {
            this.updateScore(0 - parseInt(this.state.data[0].value || 0))
        }
        this.setState({
            formData: { answer: "" }
        })
        this.getNewQuestion()
    }

    render() {
        return (
            <div className="gameContainer">
                <div className="score">
                    <h3>Score: {this.state.score}</h3>
                </div>
                {this.state.data && (
                    <div>
                        {this.state.data.map(function(element, index) {
                            return (
                                <div key={index} className="category">
                                    <h3>{element.category.title}</h3>
                                    <h4>$ {element.value}</h4>
                                    <div className="question">
                                        {element.question}
                                    </div>
                                    <br />
                                    <br />
                                </div>
                            )
                        })}
                        <div>
                            <form onSubmit={this.handleAnswerSubmit}>
                                <label>Your Answer: </label>
                                <input
                                    onChange={this.handleAnswerChange}
                                    type="text"
                                    name="answer"
                                    value={this.state.formData.answer}
                                />
                                <br />
                                <button>Submit</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}
export default Jeopardy
