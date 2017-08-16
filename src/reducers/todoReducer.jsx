import { fromJS } from 'immutable'; 

let initialState = {
  showType:'All',
  count:2,
  newId:2,
  todoItems:[
    {
      id:0,
      isActive:true,
      value:'abc',
    },
    {
      id:1,
      isActive:true,
      value:'def',
    },

  ]
  
     
}
let insertItem = (state, action) => {
  const type = action.type;

  if(type === 'TODO_INSERT_ITEM') {
    let { count, todoItems, showType,newId} = state;
    
    let item = {
      id:newId,
      isActive:true,
      value:action.payload
    }

    return fromJS(state).update('todoItems', list => list.push(item))
                                .set('count', count + 1)
                                .set('newId', ++newId)
                                .toJS();
  
   
  }

  return state;
}

let delItem = (state, action) => {
  const type = action.type;
  let item = {
      id:action.payload,
      isActive:true,
      value:'abc'
    }
  if(type === 'TODO_DEL_ITEM') {
    let { count,newId} = state;
    let newstate = fromJS(state).deleteIn('apples', item)
                                .set('count', --count)
                                .set('newId', ++newId)
                                .toJS();
    return newstate ;
  
   
  }

  return state;
}

export default (state = initialState, action) => {

    let newState ;

    switch (action.type) {

        case 'TODO_INSERT_ITEM':

            /** 将isPicking设置true */
           return  insertItem(state,action);
           

        case 'TODO_DEL_ITEM':

            return delItem(state,action);
        case 'apple/FAIL_PICK_APPLE':

            /** 将isPicking设置false */
            return fromJS(state).set('isPicking', false).toJS();

        case 'apple/EAT_APPLE':

            /** 将id对应索引值的数组的isEaten设为true,表示已吃*/
            return fromJS(state).setIn(['apples', action.payload, 'isEaten'], true).toJS();

        default:
            return state;
    }

};