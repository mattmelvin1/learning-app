import React from "react";
import {Button} from "react-bootstrap";
import "../styles/Classes.css";

export default class Quizzes extends React.Component {

    constructor(props) {
        super(props);

    }

    handleQuizSubmit = event => {
        console.log("handle submit");
        event.preventDefault();
        this
            .props
            .history
            .push('/quiz')

    }
    handleStudentSubmit = event => {
        console.log("handle submit");
        event.preventDefault();
        this
            .props
            .history
            .push('/quiz')

    }
    render() {
        return (
            <div className="Class">
                <div className="lander">
                    <h1>1st Period</h1>
                    <p>Lets get teaching!</p>
                </div>
                <div className="ClassButton">
                    <Button
                        className="ButtonSizing"
                        variant="primary"
                        size="lg"
                        block
                        onClick={this.handleQuizSubmit}>
                        Quiz 1
                    </Button>
                    <Button
                        className="ButtonSizing"
                        variant="primary"
                        size="lg"
                        block
                        onClick={this.handleStudentSubmit}>
                        Quiz 2
                    </Button>
                </div>
            </div>

        )
    }
}