import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo home-button">
                        <i className="medium material-icons">home</i>
                    </a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <NavLink href="/">Расходы</NavLink>
                        </li>
                        <li>
                            <NavLink href="/">Графики</NavLink>
                        </li>
                        <li>
                            <NavLink href="/">Итоги</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className="btn btn-floating">ПЗ</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar