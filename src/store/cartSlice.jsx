import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers:{
        add(state, action){
            state.push(action.payload);
        },
        remove(state, action){
            return state.filter((item) =>item.id !== action.payload)     //btw filter methods returns a array by performing the action you told i.e: Exclude the id and return all the other value ofc in array due to filter (basically removing the item)
        }
    },
})

export const {add, remove} = cartSlice.actions          //Here we are exporting actions in particular
export default cartSlice.reducer;                           //Here we are returning the reducer  