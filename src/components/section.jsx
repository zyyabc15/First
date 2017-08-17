import React ,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import Item from './item';
import actions_ from '../actions/action';
import {bindActionCreators} from 'redux';

class Section extends Component {
    constructor(props){
        super(props);
    }


    render(){
        return(
        <section>
            <input type="checkbox"/>
            <ul>
                {
                    this.props.state_p.todoItems.map((item,index)=>{
                        return <Item index={index} key={index} insertItem={this.props.actions.insertItem} delItem={this.props.actions.delItem} value={item.value} ></Item>
                    })
                }
            </ul>
        </section>
        )
        

    }
}
const mapStateToProps = state => ({
    state_p: state.todoReducer
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions_, dispatch)
});
 export default connect(mapStateToProps, mapDispatchToProps)(Section);