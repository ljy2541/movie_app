import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(){
    return (
    <div className="nav">
        <div className="nav__button">
            <Link to="/">홈</Link>
            <Link to="/About">소개</Link>
        </div>
    </div>
    )
}
 
export default Navigation;