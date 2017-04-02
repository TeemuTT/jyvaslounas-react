import axios from 'axios'
import {generateURL} from './urls'
import {parseMenu} from './menuParser'

export const REQUEST_MENU = "REQUEST_MENU"

export function requestMenu(menu) {
    return {
        type: REQUEST_MENU,
        menu
    }
}

export const FETCH_MENU = "FETCH_MENU";

export function fetchMenu(menu) {
    return {
        type: FETCH_MENU,
        menu
    }
}

export const RECEIVE_MENU = "RECEIVE_MENU";

export function receiveMenu(menu, json) {
    return {
        type: RECEIVE_MENU,
        menu,
        courses: json.courses
    }
}

export const SELECT_MENU = "SELECT_MENU";

export function selectMenu(menu) {
    return {
        type: SELECT_MENU,
        menu
    }
}

function fetchCourses(menu) {
    return function (dispatch) {
        dispatch(requestMenu(menu))
        const url = generateURL(menu)
        return axios.get(url)
            .then(response => {
                const menuJson = parseMenu(response.data)
                dispatch(receiveMenu(menu, menuJson))
            })
    }
}

function shouldFetchCourses(state, menu) {
    const courses = state.coursesByMenu[menu]
    if (!courses) {
        return true
    }
    if (courses.isFetching) {
        return false
    }
    return false
}

export function fetchCoursesIfNeeded(menu) {
    return function (dispatch, getState) {
        if (shouldFetchCourses(getState(), menu)) {
            return dispatch(fetchCourses(menu))
        }
    }
}
