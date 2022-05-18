import React, { Component } from 'react';
import './BaiTapThucHanhLayOut.css'
import Header from './header';
import Body from './body';
import Footer from './footer';
class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Body></Body>
                <Footer></Footer>
            </div>
        );
    }
}

export default BaiTapThucHanhLayout;