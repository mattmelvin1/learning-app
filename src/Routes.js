import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import AppliedRoute from "./components/AppliedRoute";
import Class from "./components/Class";
import StudentLogin from "./components/StudentInput";
import Login from "./components/Login";
import Classes from "./components/Classes";
import ClassTrends from "./components/ClassTrends";
import Quizzes from "./components/Quizzes";
import Quiz from "./components/Quiz";
import StudentTrends from "./components/StudentTrends";
import Students from "./components/Students";

export default({childProps}) => <Switch >
    <AppliedRoute path="/class" exact component={Class} props={childProps}/>
    <AppliedRoute path="/" exact component={Home} props={childProps}/>
    <AppliedRoute
        path="/studentlogin"
        exact
        component={StudentLogin}
        props={childProps}/>
    <AppliedRoute path="/login" exact component={Login} props={childProps}/>
    <AppliedRoute path="/classes" exact component={Classes} props={childProps}/>
    <AppliedRoute
        path="/classtrends"
        exact
        component={ClassTrends}
        props={childProps}/>
    <AppliedRoute path="/quizzes" exact component={Quizzes} props={childProps}/>
    <AppliedRoute path="/quiz" exact component={Quiz} props={childProps}/>
    <AppliedRoute
        path="/studenttrends"
        exact
        component={StudentTrends}
        props={childProps}/>
    <AppliedRoute path="/students" exact component={Students} props={childProps}/> {/* Finally, catch all unmatched routes */}
    <Route component={NotFound}/>
</Switch>;