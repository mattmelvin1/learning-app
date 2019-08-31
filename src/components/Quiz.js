import React from "react";
import {Button} from "react-bootstrap";
import "../styles/Classes.css";

export default class Quiz extends React.Component {

    constructor(props) {
        super(props);

    }

    handleClassSubmit = event => {
        console.log("handle submit");
        event.preventDefault();
        this
            .props
            .history
            .push('/classtrends')

    }
    handleStudentSubmit = event => {
        console.log("handle submit");
        event.preventDefault();
        this
            .props
            .history
            .push('/studenttrends')

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
                        onClick={this.handleClassSubmit}>
                        See class results
                    </Button>
                    <Button
                        className="ButtonSizing"
                        variant="primary"
                        size="lg"
                        block
                        onClick={this.handleStudentSubmit}>
                        See student results
                    </Button>
                </div>
            </div>

        )
    }
}