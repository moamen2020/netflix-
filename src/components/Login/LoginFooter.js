import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


class Footer extends Component {
    render() {
        return (
            <FooterContainer>
                <span style={{marginLeft: '22%', fontSize: '1.125rem', color: '#999'}}>
                    Question? Call&nbsp; <Link>1-877-742-1335</Link>
                </span>
                <div className='footer-colums'>
                    <ul>
                        <li>
                            <Link to='/'>Gift Cart Terns</Link>
                        </li>
                        <li>
                            <Link to='/'> Terms of Use</Link>
                        </li>
                        <li>
                            <Link to='/'>Privacy Statement</Link>
                        </li>
                    </ul>
                    {/* Language Button */}
                    <select className='lang-btn'>
                        <option>English</option>
                        <option>العربية</option>
                    </select>
                </div>
            </FooterContainer>
        )
    }
}


export default Footer;


const FooterContainer = styled.div`
    background: rgba(0,0,0,0.8);
    padding-top: 3rem;
    padding-bottom: 3rem;
    margin-top: 6rem;
    position: relative;
    z-index: 5;

    .footer-colums {
        width: 80%;
        margin: 2rem auto 0;
        font-size: 0.9rem;
        overflow: auto;
        color: #999
    }

    ul {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    text-align: center;
    }

    ul li {
        list-style: none;
        line-height: 2.5;
        width: auto;
        margin-left: 70px;
    }

    a {
        color: #999
    }

    a:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    /* Language Button */
    .lang-btn {
        background: black;
        border: .9px solid #333;
        padding: 1rem;
        width: 8rem;
        margin-left: 15%;
        color: #FFF;
        outline: none;
        color: #999
    }

    /* @media (max-width: 1350px) {

    }

    @media (max-width: 1150px) {

    } */

    @media (max-width: 960px) {

        ul {
            grid-template-columns: repeat(2, 1fr)
        }

    }

    @media (max-width: 740px) {

         ul {
            grid-template-columns: repeat(2, 1fr)
        }

    }

`;