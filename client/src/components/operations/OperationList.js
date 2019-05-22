import React, { Component } from 'react'
import OperationCard from "./OperationCard";
import { connect } from 'react-redux'
import { setOpened } from '../../actions/modalActions';
import Modal from '../../constants/modals';
import { getAllOperations } from '../../actions/expenseActions';

class OperationList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date()
        }
    }

    componentDidMount() {
        this.props.getAllOperations();
    }

    handeDateChange = e => {
        this.setState({ startDate: e })
    }

    render() {
        const { operations, setOpened } = this.props;
        return (
            <div className="col s12 m6">
                <div className="section">
                    <div>
                        <h5>Операции</h5>
                    </div>
                    <span>Тут должен был быть datepicker</span>
                    {
                        !!operations.length && (
                            <div>
                                <ul className="collection">
                                    {operations.map((x, i) => <OperationCard key={`operation-${i}`} operation={x} />)}
                                </ul>
                            </div>
                        )
                    }
                    {!operations.length && <span>Нет операций за выбранный период</span>}
                    <span onClick={setOpened.bind(this, Modal.CreateOperation, true)}
                        className="btn-floating btn-medium waves-effect waves-light red">
                        <i className="material-icons">add</i>
                    </span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        operations: state.expenses.operations
    }
}

export default connect(mapStateToProps, { setOpened, getAllOperations })(OperationList)