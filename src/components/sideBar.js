import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


const SideBar = (props) => {
    return (<div style={{backgroundColor:'#fafafa',borderRight:'solid 1px #bdbdbd'}} className={(props.menuClose == true ? "col-md-1" : "col-sm-3 ")} >

        <ul className={"main-menu " + (props.menuClose == true ? 'menu-closed' : '')}>
            <li onClick={props.toggleMenu} >
                <Link to="/">
                    <FontAwesomeIcon icon="arrow-alt-circle-left" />
                    <span>Close</span>
                </Link>
            </li>
            <li>
                <Link to="/">
                    <FontAwesomeIcon icon="home" />
                    <span>Home</span>
                </Link>
            </li>
            <li>
                <Link to="/aboutUs">
                    <FontAwesomeIcon icon="key" />
                    <span>About Us</span>
                </Link>
            </li>
            <li>
                <Link to="/contactUs">
                    <FontAwesomeIcon icon="envelope" />
                    <span>Contact Us</span>
                </Link>
            </li>
        </ul>
    </div>);
}
export default SideBar;