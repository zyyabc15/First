import reducerFun from "./reducerFun";
export const reducerName = (state = [], action) => {
   return reducerFun[action.type](state,action);
};