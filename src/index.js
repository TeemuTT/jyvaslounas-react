
import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'

import {rootReducer} from './reducers'

import App from './containers/App'

import './index.css'

const loggerMiddleware = createLogger();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

function createRestaurantStore() {
    return createStore(
        rootReducer,
        composeEnhancers(
            applyMiddleware(
                thunkMiddleware,
                loggerMiddleware
            )
        )
    )
}

const jamkStore = createRestaurantStore();
const seminaarinmakiStore = createRestaurantStore();
const mattilanniemiStore = createRestaurantStore();

render(
    <App store={jamkStore} area={"JAMK"} restaurants={['Bittipannu', 'Radis', 'Fuuga', 'Rajacafé']} />,
    document.getElementById('jamkRoot')
)

render(
    <App store={seminaarinmakiStore} area={"Seminaarinmäki"} restaurants={['Lozzi', 'Libri', 'Syke', 'Tilia']} />,
    document.getElementById('seminaarinmakiRoot')
)

render(
    <App store={mattilanniemiStore} area={"Mattilanniemi"} restaurants={['Piato', 'Wilhelmiina']} />,
    document.getElementById('mattilanniemiRoot')
)
