import axios from 'axios'
import {menuIds} from './menuIds'

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
        meta: json.data.meta,
        courses: json.data.courses
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
        const menuId = menuIds[menu]
        const date = new Date()
        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()
        const url = `https://cors-anywhere.herokuapp.com/http://www.sodexo.fi/ruokalistat/output/daily_json/${menuId}/${year}/${month}/${day}/fi`
        return axios.get(url)
            .then(response => {
                dispatch(receiveMenu(menu, response))
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
