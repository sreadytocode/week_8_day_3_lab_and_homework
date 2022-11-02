import React from "react";

const Button = ({text, clickHandler, value, isDisabled=false}) => {
    return ( 
        <button disabled={isDisabled} value={value} onClick={clickHandler}>
            {text}
        </ button>
     );
}
 
export default Button;