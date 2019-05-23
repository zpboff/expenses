import React, { Component } from 'react'
import Components from '../../constants/components';
import Preloader from '../shared/Preloader';
import { connect } from 'react-redux'

class GoalList extends Component {

    renderBody = () => {
        const { isLoading } = this.props;

        if (isLoading) {
            return (
                <Preloader />
            )
        }
        return 'Нет текущих целей';
    }

    render() {
        return (
            <div className="col s12 m6">
                <div className="section">
                    <div>
                        <h5>Цели</h5>
                        {this.renderBody()}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.interface[Components.GoalList].isLoading
    }
}

export default connect(mapStateToProps)(GoalList)