import React,{Component} from 'react';
import '.././style.css';
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
        console.log(e.target);
        this.setState({
            editing:true,
            //value:e.target.value
        })
    }
    handleBlur = (e) => {

        this.setState({
            editing:false
        })
        //this.props.insertItem(this.state.value);
    }
    handleChange = (e) => {

        this.setState({
            value:e.target.value
        })
    }
    render(){
       
        return (
            <div >
                {this.state.editing ||
                (<div>
                    <input type="checkbox" name="todo"></input>
                    <label onDoubleClick={this.handleDoubleClick}>{this.props.value}</label>
                    <button onClick = {this.handleClick}>删除</button>
                </div>)
                }
                {this.state.editing && <input type="text" value = {this.state.value} onBlur={this.handleBlur}  onChange={this.handleChange} />}
                
            </div>
        )

    } 
}
Item.propTypes={
    value:PropTypes.string.isRequired,
    delItem:PropTypes.func.isRequired,
    index:PropTypes.number.isRequired,
    insertItem:PropTypes.func.isRequired
}
export default Item;