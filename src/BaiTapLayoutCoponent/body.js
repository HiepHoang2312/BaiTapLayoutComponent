import React, { Component } from 'react';
import Banner from './banner';
import Item from './item';
class Body extends Component {
    render() {
        return (
            <div>
               <Banner></Banner> 
               <section className="pt-4">
                    <div className="container px-lg-5">
                        <div className="row gx-lg-5">
                         <Item></Item>
                        <Item></Item>
                        <Item></Item>
                        <Item></Item>
                        <Item></Item>
                        <Item></Item>
                        </div>
               </div>
                </section>

            </div>
        );
    }
}

export default Body;