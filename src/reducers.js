import {combineReducers} from 'redux'
import {SELECT_MENU, REQUEST_MENU, RECEIVE_MENU} from './actions'

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
        case REQUEST_MENU:
        case RECEIVE_MENU:
            return Object.assign({}, state, {
                [action.menu]: courses(state[action.menu], action)
            })
        default:
            return state
    }
}

const initialCoursesState = {
    courses: [],
    isFetching: false
}

function courses(state = initialCoursesState, action) {
    switch (action.type) {
        case REQUEST_MENU:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECEIVE_MENU:
            return Object.assign({}, state, {
                courses: action.courses,
                isFetching: false
            })
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    coursesByMenu,
    selectedMenu
})
