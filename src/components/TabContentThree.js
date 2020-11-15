import React from 'react'
import styled from 'styled-components'
import { Icon } from 'react-icons-kit'
import {ic_close} from 'react-icons-kit/md/ic_close';
import {ic_check} from 'react-icons-kit/md/ic_check'

function TabContentThree() {
    return (
        <TabContainer>
            <div className='tab-content'>
                <div className='tab-top-content'>
                    <span>Choose one plan and everything on Netflix.</span>
                    <button className='btn'>try it now</button>
                </div>
                <div className='tab-bottom-content'>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Basic</th>
                                <th>Standart</th>
                                <th>Premium</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Monthly price</td>
                                <td>$9.99</td>
                                <td>$13.99</td>
                                <td>$16.99</td>
                            </tr>
                            <tr>
                                <td>HD available</td>
                                <td>
                                    <Icon icon={ic_close} size={20}/>
                                </td>
                                <td>
                                    <Icon icon={ic_check} size={20} />
                                </td>
                                <td>
                                    <Icon icon={ic_check} size={20} />
                                </td>
                            </tr>
                            <tr>
                                <td>Ultra HD available</td>
                                <td>
                                    <Icon icon={ic_close} size={20} />
                                </td>
                                <td>
                                    <Icon icon={ic_close} size={20} />
                                </td>
                                <td>
                                    <Icon icon={ic_check} size={20} />
                                </td>
                            </tr>
                            <tr>
                                <td>Screens you can watch on at the same time</td>
                                <td>1</td>
                                <td>2</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>Watch on your laptop, TV, phone and tablet</td>
                                <td>
                                    <Icon icon={ic_check} size={20} />
                                </td>
                                <td>
                                    <Icon icon={ic_check} size={20} />
                                </td>
                                <td>
                                    <Icon icon={ic_check} size={20} />
                                </td>
                            </tr>
                            <tr>
                                <td>Cancel anytime</td>
                                <td>
                                    <Icon icon={ic_check} size={20} />
                                </td>
                                <td>
                                    <Icon icon={ic_check} size={20} />
                                </td>
                                <td>
                                    <Icon icon={ic_check} size={20} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </TabContainer>
    )
}



export default TabContentThree;


const TabContainer = styled.div`
    background: var(--main-dark);


    .tab-content {
        margin-left: 11%
    }

    .tab-top-content {
        display: inline-block;
    }

    span {
        font-size: 29px;
        float: left;
        margin-top: 60px;
    }


    .btn {
        background: var(--main-red);
        padding: 10px 20px;
        font-size: 20px;
        text-transform: uppercase;
        border-radius: 3px;
        color: #FFF;
        cursor: pointer;
        border: none;
        margin-top: 60px;
        margin-left: 120px;

        &:hover {
            background: var(--main-red-hover)
        }

        &:focus {
            outline: none
        }
    }


    /* Tab Bottom Content */
    .tab-bottom-content {
        margin: 32px auto;
    }


    table {
        width: 90%;
        margin-top: 32px;
        border-collapse: collapse;
    }

    table thead th {
        text-transform: uppercase;
        padding-top: 22px;
        padding-bottom: 22px;
        text-align: center;

    }

    table tbody tr td {
        color: #999;
        padding-top: 22px;
        padding-bottom: 22px;
        text-align: center
    }

    table tbody tr td:first-child {
        text-align: left;
        padding-left: 5px
    }

    table tbody tr:nth-child(even) {
        background: #222;

    }


`;