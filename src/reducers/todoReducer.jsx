import { fromJS } from 'immutable'; 

let initialState = {
  showType:'All',
  count:2,
  todoItems:[
    {
      isActive:true,
      value:'abc',
    },
    {
      isActive:true,
      value:'def',
    }

  ]
  
     
}
let insertItem = (state, action) => {
  const type = action.type;

  if(type === 'TODO_INSERT_ITEM') {
    let { count, todoItems, showType,newId} = state;
    
    let item = {
      isActive:true,
      value:action.payload
    }

    return fromJS(state).update('todoItems', list => list.push(item))
                                .set('count', count + 1)
                                .toJS();
  
   
  }

  return state;
}

let delItem = (state, action) => {
  const type = action.type;
  if(type === 'TODO_DEL_ITEM') {
    let newstate = fromJS(state).update('todoItems',list=>list.splice(action.payload,1))
                                .toJS();
    let {todoItems} = newstate;
    todoItems = todoItems.filter(v => v.isActive === true);
    let newstate1 = fromJS(newstate).set('count',todoItems.length).toJS();
    return newstate1 ;
  
   
  }

  return state;
}

let editItem = (state, action) => {
  const type = action.type;
  if(type === 'TODO_EDIT_ITEM') {
    
    let newstate = fromJS(state).setIn(['todoItems',action.index,'value'],action.value)
                                .toJS();
    return newstate ;
  
   
  }

  return state;
}
let toggleItem = (state, action) => {
  const type = action.type;
  if(type === 'TODO_TOGGLE_ITEM') {
    let { count} = state;
    let newstate = fromJS(state).setIn(['todoItems',action.index,'isActive'],action.value)
                                .toJS();

    let {todoItems} = newstate;
    todoItems = todoItems.filter(v => v.isActive === true);
    let newstate1 = fromJS(newstate).set('count',todoItems.length).toJS();
    return newstate1 ;
  
   
  }

  return state;
}
let changeShowType = (state,action) => {
  const type = action.type;
  if(type === 'TODO_CHANGE_SHOW_TYPE') {
    let newstate = fromJS(state).set('showType',action.showType)
                                .toJS();
    return newstate ;
  
   
  }

  return state;
}
let clearCompleted = (state,action) => {
  const type = action.type;
  let { count} = state;
  if(type === 'TODO_CLEAR_COMPLETED') {
     let list = state.todoItems;
     

    let newstate = fromJS(state).set('todoItems',list.filter((v, i) => v.isActive==true)).toJS();
    let newstate1 = fromJS(newstate).set('count',newstate.todoItems.length).toJS();
    return newstate1 ;
  
   
  }

  return state;
}
let toggleAll = (state,action) => {
  const type = action.type;
  if(type === 'TODO_TOGGLE_ALL') {
    let list = state.todoItems;
    list.map((item)=>{
      item.isActive = action.isActive;
    });
    let newstate = fromJS(state).set('todoItems',list).toJS();
    let newstate1 = fromJS(newstate).set("count",newstate.todoItems.filter(v => v.isActive == true).length).toJS();
    return newstate1 ;
}
}
export default (state = initialState, action) => {

    let newState ;

    switch (action.type) {

        case 'TODO_INSERT_ITEM':

           return  insertItem(state,action);
           

        case 'TODO_DEL_ITEM':

            return delItem(state,action);
        case 'TODO_EDIT_ITEM':

            return editItem(state,action);

        case 'TODO_TOGGLE_ITEM':

            return toggleItem(state,action);
        case 'TODO_CHANGE_SHOW_TYPE':

            return changeShowType(state,action);
        case 'TODO_CLEAR_COMPLETED':
            return clearCompleted(state,action);
        case 'TODO_TOGGLE_ALL':
            return toggleAll(state,action);
        default:
            return state;
    }

}