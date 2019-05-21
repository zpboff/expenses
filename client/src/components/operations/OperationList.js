import React, { Component } from 'react'
import OperationCard from "./OperationCard";
import { connect } from 'react-redux'

class OperationList extends Component {
    render() {
        const { operations } = this.props;
        return (
            <div className="col s12 m6">
                <div className="section">
                    <div>
                        <span className="btn-floating right btn-large waves-effect waves-light red"><i class="material-icons">add</i></span>
                        <h5>Операции</h5>
                    </div>
                    <p>
                        <ul class="collection">
                            {operations && operations.map((x, i) => <OperationCard key={`operation-${i}`} event={x} />)}
                        </ul>
                    </p>
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

export default connect(mapStateToProps)(OperationList)