import React, {Component} from 'react';
import TodoList from './todoList';
import '.././style.css';
class TodoInput extends Component{
    state = {
        todoList:[],
        showDel:false
    }
    handleEnterPress = (event) => {
        if(event.which === 13 && this.refs.myTodo.value.trim() !== ""){
            var todo = this.state.todoList;
            todo.push(this.refs.myTodo.value);
            this.refs.myTodo.value="";
            this.setState({todoList:todo})
        }
    }
    
    render(){
        return (
            <div>
                <input type="text" ref="myTodo" onKeyPress = {this.handleEnterPress.bind(this)}/>
                <div>
                    
                        {
                            this.state.todoList.map((item,index)=>{
                                return <div className = "todoList_div" key={index}  >
                                    <TodoList>{item}</TodoList>
                                    </div>
                                
                            })
                        }
                </div>
            </div>
        )
    }
}

export default TodoInput;