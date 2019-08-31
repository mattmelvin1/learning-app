import React, {Component} from "react";
import "../styles/Home.css";

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="lander">
                    <h1>Welcome to Learning-app
                    </h1>
                    <p>The home of personalized games and study!</p>
                </div>
            </div>
        );
    }
}