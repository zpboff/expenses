import React, { Component } from "react";
import OperationList from "./OperationList";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Landing from "./Landing";

class Home extends Component {
    render(){
        return this.props.isAuthenticated ? <OperationList/> : <Landing/>
    }
}

Home.propTypes = {
	isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => ({
	isAuthenticated : state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Home);