import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
    display: flex;
    flex-direction: column;
`

const CopyRightStyle = styled.p`
    color: whitesmoke;
    text-align: center;
    margin-top: 1.4rem;
    margin-bottom: 0;
    padding-bottom: 1rem;
`

export default function Footer() {
    return (
        <FooterStyle>
            <CopyRightStyle>&copy; Premier Construction {new Date().getFullYear()}</CopyRightStyle>
        </FooterStyle>
    );
}