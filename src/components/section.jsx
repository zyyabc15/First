import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Item from './item';
import actions_ from '../actions/action';
import { bindActionCreators } from 'redux';

class Section extends Component {
    constructor(props) {
        super(props);

    }

    toggleAll = (e) => {
        this.props.actions.toggleAll(!e.target.checked);
    }
    render() {
        let isShow = !(this.props.state_p.todoItems.length === 0)
        let isChecked = !this.props.state_p.count > 0
        return (
            <section>
                {isShow &&
                    <div>
                        <input className="toggleAll" type="checkbox" id="togg" checked={isShow && isChecked} onChange={this.toggleAll} />
                        <label htmlFor="togg"><span></span></label>
                    </div>
                }
                <ul>
                    {
                        this.props.state_p.todoItems.map((item, index) => {
                            if (this.props.state_p.showType === 'All') {
                                return <Item index={index} key={index} toggle={this.props.actions.toggleItem} active={item.isActive} editItem={this.props.actions.editItem} delItem={this.props.actions.delItem} value={item.value} ></Item>;
                            } else if (this.props.state_p.showType === 'Active') {
                                return item.isActive &&
                                    <Item index={index} key={index} toggle={this.props.actions.toggleItem} active={item.isActive} editItem={this.props.actions.editItem} delItem={this.props.actions.delItem} value={item.value} ></Item>;
                            } else {
                                return !item.isActive &&
                                    <Item index={index} key={index} toggle={this.props.actions.toggleItem} active={item.isActive} editItem={this.props.actions.editItem} delItem={this.props.actions.delItem} value={item.value} ></Item>;
                            }
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