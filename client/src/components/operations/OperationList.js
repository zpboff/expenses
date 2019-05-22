import React, { Component } from 'react'
import OperationCard from "./OperationCard";
import { connect } from 'react-redux'
import { setOpened } from '../../actions/modalActions';
import Modal from '../../constants/modals';
import { getAllOperations } from '../../actions/expenseActions';

class OperationList extends Component {

    componentDidMount(){
        this.props.getAllOperations();
    }

    render() {
        const { operations, setOpened } = this.props;
        return (
            <div className="col s12 m6">
                <div className="section">
                    <div>
                        <span onClick={setOpened.bind(this, Modal.CreateOperation, true)}
                            className="btn-floating right btn-large waves-effect waves-light red">
                            <i className="material-icons">add</i>
                        </span>
                        <h5>Операции</h5>
                    </div>
                    <div>
                        <ul className="collection">
                            {operations && operations.map((x, i) => <OperationCard key={`operation-${i}`} operation={x} />)}
                        </ul>
                    </div>
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