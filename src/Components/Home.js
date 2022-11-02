import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <>
            <p>Welcome to the Homepage</p>
            <div>
                <Link to="/items"><img src="microphone.jpeg" alt="microphone" width="200"/></Link>
                <Link to="/basket"><img src="basket.webp" alt="basket" width="250" /></Link>
            </div>
        </>
     );
}
 
export default Home;