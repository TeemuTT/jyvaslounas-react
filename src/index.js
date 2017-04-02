
import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
// import {createLogger} from 'redux-logger'

import {rootReducer} from './reducers'

import App from './containers/App'

import './index.css'

// const loggerMiddleware = createLogger();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const jamkStore = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(
            thunkMiddleware
        )
    )
)

const seminaarinmakiStore = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(
            thunkMiddleware
        )
    )
)

const mattilanniemiStore = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(
            thunkMiddleware
        )
    )
)

// const store = createStore(
//     rootReducer,
//     applyMiddleware(
//         thunkMiddleware,
//         loggerMiddleware
//     ),
// )

render(
    <Provider store={jamkStore}>
        <App area={"JAMK"} restaurants={['Bittipannu', 'Radis', 'Fuuga', 'Rajacafé']} />
    </Provider>,
    document.getElementById('jamkRoot')
)

render(
    <Provider store={seminaarinmakiStore}>
        <App area={"Seminaarinmäki"} restaurants={['Lozzi', 'Libri', 'Syke', 'Tilia']} />
    </Provider>,
    document.getElementById('seminaarinmakiRoot')
)

render(
    <Provider store={mattilanniemiStore}>
        <App area={"Mattilanniemi"} restaurants={['Piato', 'Wilhelmiina']} />
    </Provider>,
    document.getElementById('mattilanniemiRoot')
)
