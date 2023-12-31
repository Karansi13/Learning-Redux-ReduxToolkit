import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import privacySlice from "./privacy";





const counterStore = configureStore({reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer

}});


export default counterStore;



/*

const INITIAL_VALUE = {
    counter:  0,
    privacy: false
}


const counterReducer = (store = INITIAL_VALUE, action) => {
    console.log("Action Recieved", action)
    if(action.type === 'INCREMENT') {
        // return {counter: store.counter + 1, privacy: store.privacy};
        return {...store, counter: store.counter + 1};
    }
    else if (action.type === 'DECREMENT') {
        return {...store, counter: store.counter - 1};
    }
    else if (action.type === 'ADD') {
        return {...store, counter: store.counter + Number(action.payload.num)};
    }
    else if (action.type === 'SUB') {
        return {...store, counter: store.counter - Number(action.payload.num)};
    }
    else if(action.type === 'PRIVACY_TOGGLE') {
        // return {privacy: !store.privacy, counter: store.counter + 1};
        return {...store, privacy: !store.privacy};
    }
    return store;
}
*/