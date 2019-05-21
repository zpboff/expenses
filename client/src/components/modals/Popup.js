import React, { Component } from 'react'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { setOpened } from '../../actions/modalActions'

class Popup extends Component {
    render() {
        const { isOpened } = this.props.popupData;
        const { setOpened, popupName, renderBody } = this.props;
        return (
            <div className={classnames("modal", {
                "open": isOpened
            })}>
                <div className="modal-footer">
                    <span onClick={setOpened.bind(this, popupName, false)}
                        className="modal-close waves-effect waves-green btn-small"
                    >
                        <i className="small material-icons">close</i>
                    </span>
                </div>
                <div className="modal-content">
                    {renderBody()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        popupData: state.modal[ownProps.popupName]
    }
}

export default connect(mapStateToProps, { setOpened })(Popup)