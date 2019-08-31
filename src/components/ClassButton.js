import React from "react";
import {Button} from "react-bootstrap";
import "../styles/ClassButton.css";

export default class ClassButton extends React.Component {
    constructor(props) {
        super(props);
    };
}

render() {
    return (

        <div className="ClassButton">
            <Button
                className="ClassButtonSizing"
                variant="primary"
                size="lg"
                block
                onClick={this.props.onClick}
                href={this.props.href}>
                2nd Period
            </Button>
        </div>

    )
}