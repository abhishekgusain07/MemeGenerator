import React from "react"

const LastNavbar = (props) => {
    return (
        <nav className= {props.theme ? "light" : "dark"} >
            <div className="logo_heading">
                <img
                    src = {require("../images/Group.png")}
                    className="nav--logo_icon"
                />
                <h3 className="nav--logo_text">ReactFacts</h3>
            </div>
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div
                    className="toggler--slider"
                    onClick={props.handleClick}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}
export default LastNavbar;