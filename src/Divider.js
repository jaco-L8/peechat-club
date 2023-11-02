import React from "react";
import "./variables.css";

function Divider({ marginTop, marginBottom, width, align = "inherit" }) {
    const alignmentStyles = {
        left: { marginLeft: 0, marginRight: 'auto' },
        right: { marginRight: 0, marginLeft: 'auto' },
        center: { marginLeft: "auto", marginRight: "auto" },
        inherit: {},
    };

    return (
        <div 
            className="divider" 
            style={{
                width: width || "100%",
                height: "1px",
                backgroundColor: "var(--secondary)",
                marginTop: marginTop || "0",
                marginBottom: marginBottom || "0",
                boxSizing: "border-box",
                ...alignmentStyles[align],
            }}
        ></div>
    );
}

export default Divider;