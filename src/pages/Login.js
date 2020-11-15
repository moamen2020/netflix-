import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../svg/logo.svg';
import LoginForm from '../components/Login/LoginForm';
import LoginFooter from '../components/Login/LoginFooter';

class Login extends Component {
    render() {
        return (
            <div className='main-login-container'>
                <div className='header-top'>
                    <Link to='/'>
                        <Logo src={logo} alt='logo' className='logo' />
                    </Link>
                </div>
                <LoginForm />
                < LoginFooter />
            </div>
        )
    }
}


export default Login;

// Logo
const Logo  = styled.img`
    width: 11rem;
    position: absolute;
    top: 25%;
    left: 11%;
    transform: translate(-50%, -50%);
    margin-left: 0
`;
