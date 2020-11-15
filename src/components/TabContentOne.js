import React from 'react'
import Img from '../images/tab-1-pic.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function TabContentOne() {
    return (
        <TabContentContainer>
            <div className='container'>
                <div className='tab-content'>
                    <div className='left'>
                        <span>If you decide Netflix isn't for you - no problem. No commitment. Cancel <br /> online anytime.</span>
                        <Link to='/choose-plan'>
                            <button>try it now</button>
                        </Link>
                    </div>
                    <div className='right'>
                        <img src={Img} alt='img' />
                    </div>
                </div>
            </div>
        </TabContentContainer>
    )
}


export default TabContentOne;

// Main Content Container
const TabContentContainer = styled.div`
    background: var(--main-dark);


    .tab-content {
        display: inline-block;


        .left {
            width: 50%;
            float: left;
            span {
                font-size: 32px;
                display: block;
                margin-left: 70px;
                margin-top: 100px;
            }

            button {
                background: var(--main-red);
                padding: 10px 20px;
                font-size: 20px;
                text-transform: uppercase;
                border-radius: 3px;
                margin-top: 40px;
                color: #FFF;
                cursor: pointer;
                border: none;
                display: block;
                margin-left: 70px;

                &:hover {
                    background: var(--main-red-hover)
                }

                &:focus {
                    outline: none
                }
            }

        }

        .right {
            width: 50%;
            float: right;

            img {
            width: 510px;
            margin-left: 40px;
            }
        }
    }

`;