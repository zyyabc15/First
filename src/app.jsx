import React,{Component} from 'react';
import todoInput from './components/todoInput';
import todoList from './components/todoList';

class App extends Component {
    state = {
        list:false,

    }

    render () {
        const {list} = this.state;
    }

    return (
        <div className = "app-container">
            <todoInput></todoInput>
            <todoList></todoList>
        </div>
    )
}