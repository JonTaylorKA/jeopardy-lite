import React, { Component } from "react"
import "./App.css"
import Clock from "./components/clock/clock"
import Contact from "./components/contact/contact"
import Navigation from "./components/navigation/navigation"
import Welcome from "./components/welcome/welcome"
import Jeopardy from "./components/jeopardy/Jeopardy"
import { Route } from "react-router-dom"

class App extends Component {
    render() {
        return (
            <div className="App">
              <Navigation />
                <Route
                    exact
                    path="/"
                    render={props => <Welcome {...props} name="Eric" />}
                />
                <Route path="/clock" component={Clock} />
                <Route path="/contact" component={Contact} />
                <Route path="/jeopardy" component={Jeopardy} />
            </div>
        )
    }
}

export default App
