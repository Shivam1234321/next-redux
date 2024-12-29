import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import resetReducer from "./slices/resetSlice";

const store = configureStore({
    reducer:{
        counter : counterReducer,
        reset: resetReducer
    }
});
export default store;