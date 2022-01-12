import React from 'react'
import styled from 'styled-components';


const CardStyle = styled.div`
    width: 90vw;
    height: 30vh;
    background-color: whitesmoke;
`

export default function PromoCard(){
    return(
        <CardStyle>
            <h1>Promo copy</h1>
        </CardStyle>
    );
}