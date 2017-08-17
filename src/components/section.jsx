import React ,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import Item from './item';
import actions from '../actions/action';
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
                        return <Item key={index} delItem={actions.delItem} value={item.value} ></Item>
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
    actions: bindActionCreators(actions, dispatch)
});
 export default connect(mapStateToProps, mapDispatchToProps)(Section);