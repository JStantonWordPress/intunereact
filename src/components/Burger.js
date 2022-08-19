import React from 'react';
import { push as Menu } from 'react-burger-menu';
import {Link} from 'react-router-dom';


class Hamburger extends React.Component {

    render () {
        // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
        return (
            <Menu right pageWrapId={ "pageWrap" } outerContainerId={ "root" }>
                <Link onClick={() => {document.getElementById("react-burger-cross-btn").click()}} to="/">Frontpage Deals</Link>
                <a href="https://community.intunedeals.com/">Community</a>
                <Link onClick={() => {document.getElementById("react-burger-cross-btn").click()}} to="/about/">About</Link>
            </Menu>
        );
    }
}

export default Hamburger