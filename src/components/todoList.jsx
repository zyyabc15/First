import React,{Component} from 'react';
import '.././style.css';

class TodoList extends Component{
    /*static defaultProps = {
        showDel: true
      }*/
    
    state = {
        content:this.props.children,
        showDel:false
    }
    /*
     componentWillReceiveProps(props){
         if(props.showDel != undefined){
             this.setState({
                 showDel:props.showDel
             })
         }
     }
     */
     handleMouseEnter = (event) =>{
        event.preventDefault();
        this.setState({
            showDel:true
        })
    }
    handleMouseLeave = (event) =>{
        event.preventDefault();
        this.setState({
            showDel:false
        })
    }
    render(){
         
        const showDel = this.state.showDel;
        return (
            <div className="todoItemContainer" onMouseEnter = {this.handleMouseEnter.bind(this)}
            onMouseLeave = {this.handleMouseLeave.bind(this)}>
                <div className="check_box"><input type="checkbox" name="todo"></input></div>
                <div className="todoItem"><label>{this.state.content}</label></div>
                {showDel && <div ><i>X</i></div>}
            </div>
        )

    } 
}
export default TodoList;