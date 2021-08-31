import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    Home
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/crypto" activeStyle>
                        Crypto
                    </NavLink>
                    <NavLink to="/message-board" activeStyle>
                        Message Board
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
};

export default Navbar;