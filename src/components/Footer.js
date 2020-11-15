import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


class Footer extends Component {
    render() {
        return (
            <FooterContainer>
                <span style={{marginLeft: '19%', fontSize: '1.125rem'}}>Question? Call <Link>1-877-742-1335</Link></span>
                <div className='footer-colums'>
                    <ul>
                        <li>
                            <Link>FAQ</Link>
                        </li>
                        <li>
                            <Link>Investor Relations</Link>
                        </li>
                        <li>
                            <Link>Privacy</Link>
                        </li>
                        <li>
                            <Link>Speed Test</Link>
                        </li>
                        <li>
                            <Link>Help Center</Link>
                        </li>
                        <li>
                            <Link>Jobs</Link>
                        </li>
                        <li>
                            <Link>Cookie Preferences</Link>
                        </li>
                        <li>
                            <Link>Legal Notices</Link>
                        </li>
                        <li>
                            <Link>Account</Link>
                        </li>
                        <li>
                            <Link>Ways to Watch</Link>
                        </li>
                        <li>
                            <Link>Corporate Information</Link>
                        </li>
                        <li>
                            <Link>Netflix Originals</Link>
                        </li>
                        <li>
                            <Link>Media Center</Link>
                        </li>
                        <li>
                            <Link>Terms of Use</Link>
                        </li>
                        <li>
                            <Link>Contact Us</Link>
                        </li>
                    </ul>
                    {/* Language Button */}
                    <select className='lang-btn'>
                        <option>English</option>
                        <option>العربية</option>
                    </select>
                </div>
                <span style={{marginLeft: '19%'}}>Netflix Egypt</span>
            </FooterContainer>
        )
    }
}


export default Footer;


const FooterContainer = styled.div`
    background: var(--main-dark);
    padding-top: 10rem;
    padding-bottom: 3rem;
    color: #999;

    .footer-colums {
        width: 70%;
        margin: 2rem auto 0;
        font-size: 0.9rem;
        overflow: auto;
    }

    ul {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

    ul li {
        list-style: none;
        line-height: 2.5;
        width: auto;
        margin-left: 45px;
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
        margin-left: 40px;
        color: #FFF;
        outline: none;
        margin-bottom: 20px
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