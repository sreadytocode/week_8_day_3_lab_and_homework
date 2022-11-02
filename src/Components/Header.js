import React from "react";
import styled from "styled-components";

const Title = styled.h1`
    text-align: center;
`

const Header = ({text}) => {
    return ( 
        <Title>{text}</Title>
     );
}
 
export default Header;