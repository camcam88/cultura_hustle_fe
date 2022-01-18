import React, {useState} from 'react';
import { Link } from 'gatsby';
import Media from 'react-media';
import styled from 'styled-components';
import logo from '../images/logo.png'
import icon from '../images/menuIcon.png'
import closeBtn from '../images/closeBtn.png'


const NavLinks = styled.nav`
        display: flex;
        flex-direction: row;
        background-color: #222121;
        width: 100vw;
        height: 10vh;
        align-items: flex-end;
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
    .icon {
        justify-self: center;
        align-self: center;
        padding-right: 0.8rem;
    }
`
const Logo = styled.img`
    width: 190px;
    margin-top: 0;
    padding-top: 0;
`
const Icon = styled.img`
    width: 70px;
    height: 40px;
`
const Menu = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-color: #e2dfda;
    top: 0;
    border: #0f0f0f solid 1px;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
        text-align: center;
    ul {
        margin: 0;
        padding: 0;
        height: 50%;
        display: flex;
        align-items: stretch;
        flex-direction: column;
        a {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            text-align: center;
            color: #222121;
            font-weight: 500;
            font-size: 2rem;
        }
    }

`
const CloseBtnImg = styled.img`
    width: 8vw;
    position: absolute;
    top: 1rem;
    right: 1rem;
`
export default function Nav() {

    const [toggled, setToggled] =useState(false)
    const handleCLick = ()=>{
        setToggled(!toggled)
    }

    return (
            <>
            <Media queries={{ small: { maxWidth: 1000 } }}>

                        {matches =>
                            matches.small? (
                                <NavLinks>
                                    <ul>
                                        <li>
                                            <Link to="/">
                                                <Logo src={logo} alt=""/>
                                            </Link>
                                        </li>
                                    </ul>
                                    <Icon className="icon" src={icon} alt="icon" onClick={()=>{handleCLick()}}/>
                                    {
                                        toggled? <Menu>
                                    <>
                                        <ul>
                                            <li>
                                                <Link to="/contact/" onClick={()=>{handleCLick()}}>Contact Us</Link>
                                            </li>
                                            <li>
                                                <Link to="/gallery/" onClick={()=>{handleCLick()}}>Gallery</Link>
                                            </li>
                                            <li>
                                                <Link to="/community/" onClick={()=>{handleCLick()}}>Our Community</Link>
                                            </li>                                                            
                                        </ul>
                                        <CloseBtnImg src={closeBtn} alt="close button" onClick={()=>{handleCLick()}}/>
                                    </>    
                                    </Menu>  :
                                    ''
                                    }                                                             
                                </NavLinks>
                            ): (
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
                            )

                        }

            </Media>
            </>
        );
    }