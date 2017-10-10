import React, { Component } from 'react';
import Section from './section';
import Header from './header';
import Footer from './footer';
import '../css/style.css';
import '../css/inputStyle.css';
import '../css/title.css';
import '../css/button.css';

export default class extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container" >
                <div className="opacity4">
                    <Header />
                    <Section />
                    <Footer />
                </div>
            </div>
        )
    }
}
