import React, { Component } from 'react'
import OperationCard from "./OperationCard";
import { connect } from 'react-redux'
import { setOpened } from '../../actions/modalActions';
import Modal from '../../constants/modals';
import { getAllOperations } from '../../actions/expenseActions';
import Components from '../../constants/components';
import Preloader from '../shared/Preloader'
import DatePicker from 'react-date-picker';

class OperationList extends Component {
    state = {
        startDate: new Date(),
        endDate: new Date()
    }

    componentDidMount() {
        const { startDate, endDate } = this.state; 
        this.props.getAllOperations(startDate, endDate);
    }

    handeDateChange = (field, date) => {
        if(this.state[field] !== date){
            const newState = {
                ...this.state,
                [field]: date
            }            
            this.props.getAllOperations(newState.startDate, newState.endDate);
            this.setState({ [field]: date })
        }
    }

    renderBody = () => {
        const { operations, isLoading, setOpened } = this.props;

        if (isLoading) {
            return (
                <div className="col s12 m6">
                    <Preloader />
                </div>
            )
        }

        return (
            <>
                <div>
                    От:&nbsp;<DatePicker
                        onChange={this.handeDateChange.bind(this, 'startDate')}
                        value={this.state.startDate}
                    />
                    До:&nbsp;<DatePicker
                        onChange={this.handeDateChange.bind(this, 'endDate')}
                        value={this.state.endDate}
                    />
                </div>
                {
                    !!operations.length && (
                        <div>
                            <ul className="collection">
                                {operations.map((x, i) => <OperationCard key={`operation-${i}`} operation={x} />)}
                            </ul>
                        </div>
                    )
                }
                {!operations.length && <div>Нет операций за выбранный период</div>}
                <span onClick={setOpened.bind(this, Modal.CreateOperation, true)}
                    className="btn-floating btn-medium waves-effect waves-light red m10px">
                    <i className="material-icons">add</i>
                </span>
            </>
        )
    }

    render() {
        return (
            <div className="col s12 m6">
                <div className="section">
                    <div>
                        <h5>Операции</h5>
                    </div>
                    {this.renderBody()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        operations: state.expenses.operations,
        isLoading: state.interface[Components.OperationList].isLoading
    }
}

export default connect(mapStateToProps, { setOpened, getAllOperations })(OperationList)