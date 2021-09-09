import React, {useState} from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    const [isTabbed,SetIsTabbed] = useState("A");
    
    return(
        <div className="nav">
            <h1 className="logoTitle">JH.Mael</h1>
            <div className="nav-li">
                <Link to="/" className={isTabbed === "A" ? "on" : ""} onClick={()=>{SetIsTabbed("A")}}>Project</Link>
                <Link to="/Profile" className={isTabbed === "B" ? "on" : ""} onClick={()=>{SetIsTabbed("B")}}>Profile</Link>
            </div>
        </div>
    )
}

export default Nav;