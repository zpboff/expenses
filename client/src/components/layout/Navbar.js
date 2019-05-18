import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <NavLink to="/" className="brand-logo home-button">
                        <i className="medium material-icons">home</i>
                    </NavLink>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <SignOutLinks />
                        <SignInLinks/>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar