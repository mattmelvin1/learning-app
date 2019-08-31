import React from "react";

import {Button, Form, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import "../styles/StudentInput.css";
import Home from "./Home";

export default class StudentInput extends React.Component {

    render() {
        return (
            <div>
                <Home/>
                <div className="Login">

                    <Form>
                        <FormGroup controlId="formBasicEmail">
                            <ControlLabel>Email</ControlLabel>
                            <FormControl type="email" placeholder="Enter email"/>
                        </FormGroup>

                        <FormGroup controlId="formBasicPassword">
                            <ControlLabel>Quiz Number</ControlLabel>
                            <FormControl type="Quiz Number" placeholder="Enter quiz number"/>
                        </FormGroup>
                        <Button block bsSize="large" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
}