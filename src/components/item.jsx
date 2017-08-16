import React,{Component} from 'react';
import '.././style.css';
import PropTypes from 'prop-types'

class Item extends Component{

    
    render(){
         
        return (
            <div >
                <div className="check_box"><input type="checkbox" name="todo"></input></div>
                <div className="todoItem"><label>{this.props.value}</label></div>
                <div><button onClick = {this.props.delItem}>删除</button></div>
            </div>
        )

    } 
}
Item.propTypes={
    value:PropTypes.string.isRequired,
    delItem:PropTypes.func.isRequired,
    id:PropTypes.number.isRequired

}
export default Item;