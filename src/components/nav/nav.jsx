import React from "react"
import { Link } from "react-router-dom";
import "./nav.css"
function Nav(params) {
    return(
        <nav className="nav">
        <ul>
            <li><Link to="/home" >Home</Link></li>
            <li><Link to="./projects">Projects</Link></li>
            <li><Link to="./blogs">Blogs</Link></li>
            <li><Link to="./more">More</Link></li>
        </ul>
    </nav>
    )
}
export default Nav;