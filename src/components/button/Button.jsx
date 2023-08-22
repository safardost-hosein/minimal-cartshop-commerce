import React from "react";

function Button({ children,onClick, buttonStyle}){
    const STYLES = ['btn--primary', 'btn--sideNav','btn-cards','btn-footer'];
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
   


    return (
        <button className={`btn ${checkButtonStyle}`} onClick={onClick} >{children}</button>

    )
}
export default Button;

