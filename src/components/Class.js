import React from "react";
import {Button} from "react-bootstrap";
import "../styles/Classes.css";
import "../styles/Class.css";

export default class Class extends React.Component {

    constructor(props) {
        super(props);

    }

    handleStudentSubmit = event => {
        event.preventDefault();
        this
            .props
            .history
            .push('/students')

    }
    handleQuizSubmit = event => {
        event.preventDefault();
        this
            .props
            .history
            .push('/quizzes')

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
                        onClick={this.handleStudentSubmit}>
                        Manage or add students
                    </Button>
                    <Button
                        className="ButtonSizing"
                        variant="primary"
                        size="lg"
                        block
                        onClick={this.handleQuizSubmit}>
                        Manage or add quizzes
                    </Button>
                </div>
            </div>
        )
    }
}