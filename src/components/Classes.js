import React from "react";
import {Button} from "react-bootstrap";
import "../styles/Classes.css";
import Home from "./Home";

export default class Classes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showStudentButton: true,
            showTeacherButton: true
        };
    }

    handleSubmit = event => {
        console.log("handle submit");
        event.preventDefault();
        this
            .props
            .history
            .push('/class')

    }
    render() {
        console.log("classes state: " + this.state)
        return (

            <div>
                <Home/>
                <div className="ClassButton">
                    <Button
                        className="ButtonSizing"
                        variant="primary"
                        size="lg"
                        block
                        onClick={this.handleSubmit}>
                        1st Period
                    </Button>

                </div>
                <div className="ClassButton">
                    <Button
                        className="ButtonSizing"
                        variant="primary"
                        size="lg"
                        block
                        onClick={this.handleSubmit}>
                        2nd Period
                    </Button>
                </div>
            </div>

        )
    }
}