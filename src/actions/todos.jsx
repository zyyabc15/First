import { TODO_INSERT_ITEM, TODO_DELETE_ITEM, TODO_SWITCH_FILTER, TODO_TOGGLE_ACTIVE, TODO_TOGGLE_ALL, TODO_CHANGE_VALUE, TODO_CLEAR_COMPLETED } from '../types/todos';
export default toInsertItem = (value) => {
    return{
        type:TODO_INSERT_ITEM,
        value:value
    };

}