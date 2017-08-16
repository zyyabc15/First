let exports = {};
exports.insertItem = function(state = defaultTodo, action) {
  const type = action.type;

  if(type === TODO_INSERT_ITEM) {
    let { count, items, filter, showedItems } = state;
    let item = generateItem(action.value);

    items = {
      ...items,
      [item.id] : item 
    }

    count = count + 1;
    
    state = {
      ...state,
      items,
      count,
      showedItems: filter !== "COMPLETED" ? getShowedItems(items, filter) : showedItems
    }

    local.set(JSON.stringify(state));
  }

  return state;
}
export default exports;