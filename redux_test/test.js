const redux = require("redux");
const createStore = redux.createStore;
const initialState = {
    count:0
}

//reducer
const rootReducer= (state = initialState, action)=>{
    switch (action.type) {
        case "ADD_INC":
          return  {...state, count: state.count + 1};
         
          case "ADD":
              return {...state, count: state.count+ action.value}
    
        default:
          return state;
    }
}

//store 
const store = createStore(rootReducer);
console.log(store.getState())
console.log('object')

//subscription 
store.subscribe(()=>{
    console.log("subscription", store.getState())
})

//dispatching an action 
store.dispatch({type:"ADD_INC"});
console.log(store.getState());
store.dispatch({type:"ADD", value:10});
store.dispatch({type:"ADD", value:10});
console.log(store.getState());