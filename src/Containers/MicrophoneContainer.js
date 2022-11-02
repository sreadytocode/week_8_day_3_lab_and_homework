import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Basket from "../Components/Basket.js";
import ErrorPage from "../Components/ErrorPage.js";
import Header from "../Components/Header.js";
import Home from "../Components/Home.js"
import MicList from "../Components/MicList.js";
import NavBar from "../Components/NavBar.js";




const MicrophoneContainer = () => {

    const [user, setUser] = useState({
        name: "James"
    })
    const [items, setItems] = useState([
        {name: "SM58"},
        {name: "P5"}
    ]);

    const [basket, setBasket] = useState([])

    function addToBasketClickity(mic) {
        const userBasket = [...basket, mic]    
        setBasket(userBasket);
    }; 

    function removeItem(item) {
        const userBasket = [...basket];
        const index = userBasket.indexOf(item);
        userBasket.splice(index, 1)
        setBasket(userBasket);
    }

    return ( 
        <>
            <Header text="Microphone Sales"/>
        <Router>
                <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route path="/items" element={<MicList items={items} basket={basket} addToBasketClickity={addToBasketClickity}/>}/>
                <Route path="/basket" element={<Basket basket={basket} items={items} user={user} removeItem={removeItem}/>}/>
                <Route path="*" element={<ErrorPage />}/>
            </Routes>
        </Router>
        </>
     );
}
 
export default MicrophoneContainer;