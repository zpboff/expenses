import React, { Component } from "react";
import OperationList from "./operations/OperationList";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Landing from "./Landing";
import GoalList from "./goals/GoalList";

class Home extends Component {

    render() {
        if (this.props.isAuthenticated) {
            return (
                <>
                    <OperationList />
                    <GoalList />
                </>
            )
        }
        return <Landing />
    }
}

Home.propTypes = {
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Home);