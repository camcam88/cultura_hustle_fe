import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Nav from './Nav';

const SiteBoarderStyles = styled.div`
    background-color: #353535;
    height: 100%;
    width: 100vw;
    @media (max-width: 1100px) {
        margin-laft: 1.5rem;
        margin-right: 1.5rem;
    }
    `;

const ContentStyles = styled.div`
    color: #d4d4d4;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: flex;
    justify-content: center;
    text-align: center;
` 


export default function Layout({ children }) {
return (
    <>
    <SiteBoarderStyles>
            <Nav />
            <ContentStyles>
                {children}
            </ContentStyles>
            <Footer />
    </SiteBoarderStyles>
    </>
);
}