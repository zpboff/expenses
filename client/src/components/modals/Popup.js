import React, { Component } from 'react'
import classnames from 'classnames'

class Popup extends Component {
    render() {
        const { isOpened } = this.props;
        return (
            <div className={classnames("modal", {
                "open": isOpened
            })}>
                <div className="modal-content">
                    <h4>Modal Header</h4>
                    <p>A bunch of text</p>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                </div>
            </div>
        )
    }
}

export default Popup