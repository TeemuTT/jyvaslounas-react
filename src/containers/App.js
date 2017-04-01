import React from 'react'
import {connect} from 'react-redux'

import {fetchCoursesIfNeeded, selectMenu} from '../actions'

import MenuTitle from '../components/MenuTitle'
import Menu from '../components/Menu'

class App extends React.Component {

    componentDidMount() {
        const {dispatch, selectedMenu} = this.props
        dispatch(fetchCoursesIfNeeded(selectedMenu))
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedMenu !== this.props.selectedMenu) {
            const {dispatch, selectedMenu} = nextProps
            dispatch(fetchCoursesIfNeeded(selectedMenu))
        }
    }

    handleClick = nextMenu => {
        this.props.dispatch(selectMenu(nextMenu))
    }

    render() {
        const {courses, selectedMenu, isFetching} = this.props
        const empty = courses.length === 0
        return (
            <div>
                <MenuTitle options={['Bittipannu', 'Radis', 'Fuuga']} active={selectedMenu} onClick={this.handleClick} />
                {empty ?
                (isFetching ? <h2>Ladataan...</h2> : <h2>Ei ruokalistaa</h2>) 
                : <Menu courses={courses} />}
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {selectedMenu, coursesByMenu} = state

    const {meta, courses, isFetching} = coursesByMenu[selectedMenu] || {
        meta: {},
        courses: [],
        isFetching: false
    }

    return {
        selectedMenu,
        courses,
        isFetching,
        meta
    }
}

export default connect(mapStateToProps)(App)
