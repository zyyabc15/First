let actions = {
    insertItem: value =>({
        type: 'TODO_INSERT_ITEM',
        payload: value
    }),
    delItem: id =>({
        type: 'TODO_DEL_ITEM',
        payload: id
    })
    
}
export default actions;