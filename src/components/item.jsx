import React,{Component} from 'react';
import '.././style.css';
import PropTypes from 'prop-types'

class Item extends Component{
    constructor(props) {
        super(props);
        this.state = {
            editing:false
        }
    }
    handleClick =  (e) => {
       
        let index = this.props.index;
        this.props.delItem(index);
    
    }
    
    handleDoubleClick = (e) => {
        this.setState({
            editing:true
        })
    }
    render(){
       
        return (
            <div >
                <div className="check_box"><input type="checkbox" name="todo"></input></div>
                <div className="todoItem" onDoubleClick={this.handleDoubleClick}>
                    {!this.state.editing && <label>{this.props.value}</label>}
                    {this.state.editing && <input value = {this.props.value}></input>}
                </div>
                <button onClick = {this.handleClick}>删除</button>
            </div>
        )

    } 
}
Item.propTypes={
    value:PropTypes.string.isRequired,
    delItem:PropTypes.func.isRequired,
    index:PropTypes.number.isRequired
}
export default Item;