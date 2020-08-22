import React from 'react';


function NavBar({ onRouteChange, isSignedIn }) {
    if (isSignedIn) {
        return (
            <nav style={{ display: "flex", justifyContent: "flex-end" }}>
                <p onClick={() => onRouteChange("signIn")} className="f4 link dim black underline pa2 pr4 pb0  mb0 bb0 pointer" style={{ color: "#ffff4d" }}>Sign Out </p>
            </nav>
        )
    } else {
        return (
            <nav style={{ display: "flex", justifyContent: "flex-end" }}>
                <p onClick={() => onRouteChange("signIn")} className="f4 link dim  underline pa2 pr4 pb0  mb0 bb0 pointer black" > Sign In</p>
                <p onClick={() => onRouteChange("register")} className="f4 link dim  underline pa2  pr4 pb0  mb0 bb0 pointer black" >Register</p>
            </nav>
        )

    }
}

export default NavBar;
