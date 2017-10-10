import React, { Component } from 'react';
import actions_ from '../actions/action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }
    handleChange = (e) => {
        this.setState({ value: e.target.value });
    }
    handleKeyDown = (e) => {
        if (e.which === 13 && this.state.value.trim() !== "") {
            this.props.actions.insertItem(this.state.value);
            this.setState({ value: "" });
        }


    }

    render() {
        let { state_p, actions } = this.props;
        let mockState = {
            showType: 'All',
            count: 0,
            id: 1,
            todoItems: [
                {
                    id: 0,
                    isActive: true,
                    value: 'abc',
                },
                {
                    id: 1,
                    isActive: true,
                    value: 'def',
                },

            ]


        };

        //是否开启模拟数据的开关，注释这行代码关闭模拟数据
        // state = mockState;

        return (

            <header>
                <div className="content">todos</div>
                <input className="inputStyle" type="text" value={this.state.value}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyDown}
                    placeholder="what will be done?"
                />

            </header>
        )
    }
}

const mapStateToProps = state => ({
    state_p: state.todoReducer
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions_, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);