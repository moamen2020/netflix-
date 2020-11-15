import React, { Component } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import TabComponents from '../components/TabComponents'

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <TabComponents />
                <Footer />
            </div>
        )
    }
}

export default Main;