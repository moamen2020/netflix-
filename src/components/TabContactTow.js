import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

// Images
import ImgTv from '../images/tab-tv.png';
import ImgTablet from '../images/tab-tablet.png';
import ImgMac from '../images/tab-macbook.png';

function TabContactTow() {
    return (
        <TabContainer>
            <div className='tab-content'>
                <div className='tab-top-content'>
                    <span>
                        Watch TV shows and movies anywhere - Personalized for you.
                    </span>
                    <Link to='/choose-plan'>
                        <button>try it now</button>
                    </Link>
                </div>
                {/* Tab Bottom Content */}
                <div className='tab-bottom-content'>
                    <div className='box'>
                        <img src={ImgTv} alt='image-Tv' />
                        <h3>Watch on your TV</h3>
                        <p>Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more</p>
                    </div>
                    <div className='box'>
                        <img src={ImgTablet} alt='image-Tablet' />
                        <h3>Watch instantly or download for later</h3>
                        <p>Availble on phone and tablet, Wherever you go. </p>
                    </div>
                    <div className='box'>
                        <img src={ImgMac} alt='image-MackBook' />
                        <h3>Use any computer</h3>
                        <p>Watch right on Netflix.com.</p>
                    </div>
                </div>
            </div>
        </TabContainer>
    )
}


export default TabContactTow;



const TabContainer = styled.div`
    background: var(--main-dark);
    padding-bottom: 20rem;


    .tab-content {
        margin-left: 11%;

        .tab-top-content {
            margin-bottom: 70px;
            display: inline-block;

            span {
                font-size: 29px;
                float: left;
                width: 70%;
                margin-top: 60px;
            }

            button {
                background: var(--main-red);
                padding: 10px 20px;
                font-size: 20px;
                text-transform: uppercase;
                border-radius: 3px;
                color: #FFF;
                cursor: pointer;
                border: none;
                margin-top: 70px;

                &:hover {
                    background: var(--main-red-hover)
                }

                &:focus {
                    outline: none
                }
            }
        }


        .tab-bottom-content {

            .box {
                width: 30%;
                float: left;
                text-align: center;
                margin-right: 20px;
                margin-bottom: 50px;

                img {
                    width: 320px;
                    height: 210px
                }

                h3 {
                    margin-top: 30px;
                    margin-bottom: 20px;
                }

                p {
                    color: #bebdbd;
                }
            }
        }

    }
`;