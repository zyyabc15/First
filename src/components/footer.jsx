import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import actions_ from '../actions/action';
import PropTypes from 'prop-types';

class Footer extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            showClearCom:""
        }
    }
    handleClickAll = () => {
        this.props.actions.changeShowType('All');
        
    }
    handleClickActive = () => {
        this.props.actions.changeShowType('Active');
    }
    handleClickCompleted = () => {
        this.props.actions.changeShowType('Completed');
    }
    handleClickCC = () => {
        this.props.actions.clearCompleted();
    }
    render(){
        let list = this.props.state_p.todoItems;
        let showClearCom = false;
        list.map(item=>{
            if(item.isActive === false){
                showClearCom = true;
                return;
            }
        })
        return (
            <footer>
                <label>{this.props.state_p.count} items left</label>
                <button onClick={this.handleClickAll}>All</button>
                <button onClick={this.handleClickActive}>Active</button>
                <button onClick={this.handleClickCompleted}>completed</button>
                <button className={showClearCom? "showClear clearCom":"clearCom"} onClick={this.handleClickCC}>Clear Completed</button>
            </footer>
        )
    }
}

const mapStateToProps = state => ({
    state_p: state.todoReducer
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions_, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(Footer);