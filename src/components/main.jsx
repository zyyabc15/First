import React, {Component} from 'react';
import Item from './item';
import '.././style.css';
import actions from '../actions/action'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
class Main extends Component{
    
    
    render(){
        console.log(this.props);
         let {state,actions} = this.props;
    let mockState = {
             showType:'All',
            count:0,
            id:1,
            todoItems:[
                {
                id:0,
                isActive:true,
                value:'abc',
                },
                {
                id:1,
                isActive:true,
                value:'def',
                },

            ]
            
                
        };
        
        //是否开启模拟数据的开关，注释这行代码关闭模拟数据
       // state = mockState;

       
        return (
            <div>
                <input type="text" ref="myTodo" onKeyPress = {actions.addItem}/>
                <div>
                    {
                        state.todoItems.map((item,index)=>{
                            return <Item key={index} delItem={actions.delItem} id={item.id} value={item.value}></Item>
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    state: state.todoReducer
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

 export default connect(mapStateToProps, mapDispatchToProps)(Main);