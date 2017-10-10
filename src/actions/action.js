let actions = {
    insertItem: value =>({
        type: 'TODO_INSERT_ITEM',
        payload: value
    }),
    delItem: index =>({
        type: 'TODO_DEL_ITEM',
        payload: index
    }),
    editItem: (index,value) =>({
        type: 'TODO_EDIT_ITEM',
        index: index,
        value:value
    }),
    toggleItem: (index,value) =>({
        type: 'TODO_TOGGLE_ITEM',
        index: index,
        value:value
    }),
    changeShowType: (showType) =>({
        type: 'TODO_CHANGE_SHOW_TYPE',
        showType:showType
    }),
    clearCompleted: () =>({
        type: 'TODO_CLEAR_COMPLETED',
    }),
    toggleAll: (isActive) => ({
        type: 'TODO_TOGGLE_ALL',
        isActive
    })


    
}
export default actions;