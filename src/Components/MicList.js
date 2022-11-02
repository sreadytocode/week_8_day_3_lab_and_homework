import React from "react";
import Button from "../Components/Button.js";
import Header from "./Header.js";

const MicList = ({items, addToBasketClickity}) => {

    function handlerBasket(evt) {
        const index = evt.target.value; 
        addToBasketClickity(items[index])
    }

    const Items = items.map((item, index) => {
        return (
            <>
            <h2 key={index}>{item.name}</h2>
            <Button text="Add to Basket" value={index} clickHandler={handlerBasket}/>
            </>
        )
    })

    return ( 
        <div>
            <Header text="All Microphones"/>
            {Items}
            
        </div>
     );
}
 
export default MicList;