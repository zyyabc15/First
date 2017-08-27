import React,{Component} from 'react';
import '../css/style.css';
import PropTypes from 'prop-types'

class Item extends Component{
    constructor(props) {
        super(props);
        this.state = {
            editing:false,
            value:""
        }
    }
    handleClick =  (e) => {
       
        let index = this.props.index;
        this.props.delItem(index);
    
    }
    
    handleDoubleClick = (e) => {
        this.setState({
            editing:true,
            value:e.target.innerText
        })
    }
    handleBlur = (e) => {
        this.setState({
            editing:false
        })
        this.props.editItem(this.props.index,this.state.value);
    }
    handleChange = (e) => {
        this.setState({
            value:e.target.value
        })
    }
    handleKeyPress = (e) => {
        if(e.which === 13 && this.state.value.trim() !== ""){
            this.handleBlur(e);
        }
        
    }
    toggleItem = (e) => {

        this.props.toggle(this.props.index,!e.target.checked);
    }
    render(){
       
        return (
            <li className="itemContainer">
                {this.state.editing ||
                (<div className="lableContainer">
                    <input type="checkbox" className="toggle" checked={!this.props.active} onChange = {this.toggleItem}></input>
                    <label onDoubleClick={this.handleDoubleClick}>{this.props.value}</label>
                    <button onClick = {this.handleClick} className="animBtn themeB">删除</button>
                </div>)
                }
                {this.state.editing && <input type="text" className="editInput"
                 autoFocus="autofocus" 
                 value = {this.state.value} 
                 onBlur={this.handleBlur} 
                 onChange={this.handleChange}
                 onKeyPress={this.handleKeyPress}
                  />}
                
            </li>
        )

    } 
}
Item.propTypes={
    value:PropTypes.string.isRequired,
    delItem:PropTypes.func.isRequired,
    index:PropTypes.number.isRequired,
    editItem:PropTypes.func.isRequired,
    active:PropTypes.bool.isRequired,
    toggle:PropTypes.func.isRequired
}
export default Item;