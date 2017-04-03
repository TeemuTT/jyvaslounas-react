import {combineReducers} from 'redux'
import {SELECT_MENU, REQUEST_MENU, RECEIVE_MENU, ERROR_FETCH_MENU} from './actions'

function selectedMenu(state = "none", action) {
    switch (action.type) {
        case SELECT_MENU:
            return action.menu
        default:
            return state
    }
}

function coursesByMenu(state = {}, action) {
    switch (action.type) {
        case ERROR_FETCH_MENU:
        case REQUEST_MENU:
        case RECEIVE_MENU:
            return Object.assign({}, state, {
                [action.menu]: courses(state[action.menu], action)
            })
        default:
            return state
    }
}

function errorMessage(state = "", action) {
    switch (action.type) {
        case ERROR_FETCH_MENU:
            return action.error
        case REQUEST_MENU:
        case RECEIVE_MENU:
            return ""
        default:
            return state
    }
}

const initialCoursesState = {
    courses: [],
    isFetching: false,
    invalidated: false
}

function courses(state = initialCoursesState, action) {
    switch (action.type) {
        case ERROR_FETCH_MENU:
            return Object.assign({}, state, {
                isFetching: false,
                invalidated: true
            })
        case REQUEST_MENU:
            return Object.assign({}, state, {
                isFetching: true,
                invalidated: false
            })
        case RECEIVE_MENU:
            return Object.assign({}, state, {
                courses: action.courses,
                isFetching: false,
                invalidated: false
            })
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    coursesByMenu,
    selectedMenu,
    errorMessage
})
