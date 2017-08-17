let actions = {
    insertItem: value =>({
        type: 'TODO_INSERT_ITEM',
        payload: value
    }),
    delItem: index =>({
        type: 'TODO_DEL_ITEM',
        payload: index
    })
    
}
export default actions;