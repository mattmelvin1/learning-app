import React, {Component} from "react";
import {Button} from "react-bootstrap";
import {createStore} from 'redux'

/* Routes */
import Routes from "./Routes";
import {withRouter} from "react-router-dom"

/* Components */
import Menubar from "./components/Menubar";

/* Styles */
import "./styles/App.css";
import "./styles/HomepageButton.css";

/* Reducers */
import Store from "./Store"

class App extends Component {
    constructor(props, context) {
        super(props, context);
        // Store.configureStore()
        this.state = {
            showStudentButton: true,
            showTeacherButton: true
        }

    }

    _onClickStudentButton() {
        this
            .props
            .history
            .push('/studentlogin')
        this.setState({
            showTeacherButton: !this.state.showTeacherButton
        })
        this.setState({
            showStudentButton: !this.state.showStudentButton
        })
    }

    _onClickTeacherButton() {
        this
            .props
            .history
            .push('/login')
        this.setState({
            showTeacherButton: !this.state.showTeacherButton
        })
        this.setState({
            showStudentButton: !this.state.showStudentButton
        })
    }

    render() {

        return (
            <div>
                <Menubar/>
                <Routes/>

                <div className="HomepageButton">
                    {this.state.showStudentButton && <Button
                        className="ButtonSizing"
                        variant="primary"
                        size="lg"
                        block
                        onClick={this
                        ._onClickStudentButton
                        .bind(this)}
                        type="button">I am a student</Button>}
                </div>

                <div className="HomepageButton">
                    {this.state.showTeacherButton && <Button
                        className="ButtonSizing"
                        variant="primary"
                        size="lg"
                        block
                        onClick={this
                        ._onClickTeacherButton
                        .bind(this)}
                        type="button">I am an instructor</Button>}
                </div>

            </div>
        );

    }

}
export default withRouter(App);