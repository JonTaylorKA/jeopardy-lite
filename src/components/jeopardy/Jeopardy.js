import React, { Component } from 'react'
import JeopardyService from '../../jeopardyService'

class Jeopardy extends Component {
    constructor(props){
        super(props)
        this.client = new JeopardyService()
        this.state = {
            data: {},
            score: 0
        }
    }
    getNewQuestion () {
        return this.client.getQuestion().then(result => {
            this.setState({
                data: result.data[0]
            })
        })
    }
    componentDidMount(){
        this.getNewQuestion()
    }
    render(){
        return(
            <div>
                {JSON.stringify(this.state.data)}
            </div>
        )
    }
}
export default Jeopardy