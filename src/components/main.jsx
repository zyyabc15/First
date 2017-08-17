import React, {Component} from 'react';
import Section from './section';
import Header from './header';
import '.././style.css';

export default class extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <Header/>
                <Section/>
            </div>
        )
    }
}
