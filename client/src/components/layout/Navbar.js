import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">Logo</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <NavLink href="/">First</NavLink>
                        </li>
                        <li>
                            <NavLink href="/">Second</NavLink>
                        </li>
                        <li>
                            <NavLink href="/">Third</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className="btn btn-floating">PZ</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar