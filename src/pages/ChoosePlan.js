import React from 'react'
import styled from 'styled-components'
import logo from '../svg/logo.svg'
import { Link, NavLink } from 'react-router-dom'
import CheckmarkLogo from '../images/Checkmark.png'
import FooterChoosePlan from '../components/chooseplan/FooterChoosePlan';


const ChoosePlan = () => {
    return (
        <MainContainer>
            {/* Header top */}
            <div className='header-top'>
                <Link to='/'>
                    <Logo src={logo} alt='logo' />
                </Link>
                <NavLink to='/login' className='signIn-btn'>
                    Sign In
                </NavLink>
            </div>
            {/* Header Content */}
            <div className='header-content'>
                <img className='checkmark-logo' src={CheckmarkLogo} alt='Chechmark img' />
                <p>Step <strong>1</strong> of <strong>3</strong></p>
                <h2>Choose your plan.</h2>
                <div className='checked-list'>
                    <div className='bullet'>No commitments, cancel anytime.</div>
                    <div className='bullet'>Everything on Netflix for one low price.</div>
                    <div className='bullet'>Unlimited viewing on all your devices.</div>
                </div>
                <button className='checkmark-btn'>See the plans</button>
            </div>
            <FooterChoosePlan />
        </MainContainer>
    )
}

export default ChoosePlan;


// Main Container
const MainContainer = styled.div`
background: #fff;
    // Header top
    .header-top {
        background: #fff;
        height: 6rem;
        border-bottom: 1px solid #e6e6e6;
    }

    .signIn-btn {
        margin: 1.5625rem 3% 0;
        padding: 0.4375rem  1.0625rem;
        font-weight: 700;
        line-height: normal;
        color: var(--main-dark);
        position: absolute;
        cursor: pointer;
        font-size: 1.25rem;
        right: 0;

        &:hover {
            text-decoration: underline;
        }
    }

    // header content
    .header-content {
        display: grid;
        justify-content: center;
        background: #fff;
        color: var(--main-dark);
        margin-bottom: 6rem;
        width: 65%;
        position: relative;
        margin: auto;
        margin-top: 4.5rem;
        text-align: center;
        /* flex-derection: column; */
        z-index: 2;
    }


    // Checkmark logo
    .checkmark-logo {
        width: 3rem;
        margin-top: 3.125rem;
        margin-bottom: 2rem;
    }

    .header-content img {
        margin: 6.25rem auto 1.875rem;
    }


    // checked list
    .checked-list {
        text-align: left;
        margin: 1rem auto 3rem;
        padding-left: 1.5625rem;
        width: 90%;
        font-size: 17px;
        padding: auto
    }

    // Bullets
    .bullet {
        margin-top: 1rem;
        margin-left: 1rem;
        text-indent: -1rem;
        line-height: 1.2;
    }

    .checked-list .bullet::before {
        content: '';
        color: transparent;
        display: inline-block;
        position: relative;
        height: 0.3rem;
        width: 0.8rem;
        left: -0.9375rem;
        bottom: 0.1875rem;
        border-bottom: 1px solid #e50914;
        border-left: 1px solid #e50914;
        transform: rotate(-45deg);
    }




    // Button 
    .checkmark-btn {
    background: var(--main-red);
    color: #FFF;
    border: none;
    border-radius: 4px;
    font-size: 1.1rem;
    padding: 10px;
    cursor: pointer;

    &:hover {
        background: var(--main-red-hover);
        }
    }

`;

const Logo = styled.img`
    width: 10.5rem;
    height: 3.5rem;
    position: absolute;
    top: 49%;
    left: 8%;
    transform: translate(50%, -50%);
    margin-left: 0;

`;
