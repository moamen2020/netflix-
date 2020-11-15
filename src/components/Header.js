import React, { Component } from 'react';
import logo from '../svg/logo.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import {ic_chevron_right} from 'react-icons-kit/md/ic_chevron_right'



class Header extends Component {
    render() {
        return (
            <HeaderComponent className="header-container">
                <div className='header-top'>
                    <Logo src={logo} alt='logo' />
                    <Link to='/login' className="signIn-btn">Sign In</Link>
                </div>
                {/* Header Content */}
                <div className='header-content'>
                    <h1>See what's next.</h1>
                    <h2>watch anywhere. cancel anytime.</h2>
                    <Link to='/choose-plan'>
                        <botton className='main-offer-btn'>
                            try it now 
                            <Icon className='Icon' icon={ic_chevron_right} size={40}/>
                        </botton>
                    </Link>
                </div>
            </HeaderComponent>
        )
    }
}

export default Header;


// Logo
const Logo = styled.img`
    width: 160px;
    height: 56px;
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);

    /* Media Query */

    @media (max-width: 960px) {
    left: 15%
    }
    @media (max-width: 740px) {
    left: 15%
    }
`;

// Header Container
const HeaderComponent = styled.div `

    // Header top
    .header-top {
    position:relative;
    height: 160px;
    z-index: 2;

        .signIn-btn {
            position: absolute;
            right: 0;
            margin: 20px 3%;
            background: var(--main-red);
            padding: 10px 20px;
            border-radius: 5px;
            &:hover {
                background: var(--main-red-hover);
            }

            @media (max-width: 740px) {
            margin-top: 1.25rem;
            right: 5%
            }
        }

    }



    // Header Content
    .header-content {
        position: relative;
        z-index: 2;
        margin: 10px auto;
        text-align: center;

        h1 {
            font-size: 65px;
            margin: 0;

            @media (max-width: 740px) {
                font-size: 50px
            }
            
        }

        h2 {
            text-transform: uppercase;
            margin-bottom: 40px;

            @media (max-width: 740px) {
                font-size: 25px
            }
        }

        .main-offer-btn {
            background: var(--main-red);
            padding: 10px 35px;
            font-size: 32px;
            text-transform: uppercase;
            border-radius: 5px;
            cursor: pointer;

            .Icon svg {
                vertical-align: bottom !important; 

                @media (max-width: 740px) {
                    vertical-align: middle !important;
                }

            }

            &:hover {
                background: var(--main-red-hover)
            }

            @media (max-width: 740px) {
            font-size: 23px;
            padding: 10px 18px;
            }

        }
        
    }

`;




