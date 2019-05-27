import React, { Component } from 'react'
import Components from '../../constants/components';
import Preloader from '../shared/Preloader';
import { connect } from 'react-redux'
import Modal from '../../constants/modals';
import { getAllGoals } from '../../actions/expenseActions';
import { setOpened } from '../../actions/modalActions'
import GoalCard from './GoalCard';
class GoalList extends Component {

    componentDidMount() {
        this.props.getAllGoals();
    }

    renderBody = () => {
        const { isLoading, goals, setOpened } = this.props;

        if (isLoading) {
            return (
                <Preloader />
            )
        }

        return (
            <div className="list-group">
                {
                    !!goals.length && goals.map((x, i) => (
                        <GoalCard key={`goal-${i}`} goal={x}/>
                    ))
                }
                {!goals.length && <span>Нет операций за выбранный период</span>}
                <span onClick={setOpened.bind(this, Modal.CreateGoal, true)}
                    className="btn-floating btn-medium waves-effect waves-light red m10px">
                    <i className="material-icons">add</i>
                </span>
            </div>
        )
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

const mapStateToProps = state => ({
    isLoading: state.interface[Components.GoalList].isLoading,
    goals: state.expenses.goals
})

export default connect(mapStateToProps, { setOpened, getAllGoals })(GoalList)