import React from "react";
import Button from "../Components/Button.js";
import Header from "./Header.js";
import styled from "styled-components";

const MicList = ({items, addToBasketClickity}) => {

    const ItemList = styled.h2`
    display: flex;
    
    margin: 0;
    `

    function handlerBasket(evt) {
        const index = evt.target.value; 
        addToBasketClickity(items[index])
    }

    const Items = items.map((item, index) => {
        return (
            <div>
            <ItemList key={index}>{item.name}</ItemList>
            <Button text="Add to Basket" value={index} clickHandler={handlerBasket}/>
            </div>
        )
    })

    return ( 
        <>
            <Header text="Microphone List:"/>
            {Items}
            
        </>
     );
}
 
export default MicList;