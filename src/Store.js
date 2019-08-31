import {createStore} from "redux";
import AppReducer from "./reducers/AppReducer"

function configureStore(state = {
    showStudentButton: true,
    showTeacherButton: true
}) {
    return createStore(AppReducer, state);
}

export default configureStore;