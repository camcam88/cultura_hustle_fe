import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logo from '../images/logo.png'

const NavLinks = styled.nav`
        display: flex;
        flex-direction: row;
        background-color: #222121;
        width: 100vw;
        height: 10vh;
    ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 80vw;
        align-items: center;
    }
    li {
    }
    a {
    color: #eeeeee;
    font-size: 1.4rem;
    text-decoration: none;
    }
`
const Logo = styled.img`
    width: 190px;
    margin-top: 0;
    padding-top: 0;
`
export default function Nav() {
    return (
            <>
                <NavLinks>
                    <ul>
                        <li>
                            <Link to="/">
                                <Logo src={logo} alt=""/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact/">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/gallery/">Gallery</Link>
                        </li>
                        <li>
                            <Link to="/community/">Our Community</Link>
                        </li>
                    </ul>
                </NavLinks>
            </>
        );
    }