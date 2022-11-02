import React from "react";
import Header from "./Header";
import Button from "./Button";

const Basket = ({user, basket, removeItem}) => {
    const basketItems = basket.map((items)=> {
        return (
            <>
            <p>{items.name}</p>
            <Button text="Delete from basket" clickHandler={removeItem}/>
            </>
        )
    })


    return ( 
        <>
            <Header text="Basket"/>
            <p>Hi {user.name} you have placed items into the basket:</p>
            {basketItems}
        </>
     );
}
 
export default Basket;