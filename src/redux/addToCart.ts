import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";



interface Currencys {
    symbol:String,
    value: number,
    id: any
}
const currId = nanoid()
export const addToCartSlice = createSlice({

    name: "addToCart",
    initialState:{
       currencys:<Currencys[]> [{symbol:'Your Cart', value:0, id: currId}]
    },
    reducers:{
        addCurrency: (state, action)=>{
            state.currencys = [...state.currencys, action.payload]
        },
        removeCurrency: (state, action )=>{
            state.currencys = state.currencys.filter((item)=>item.id !== action.payload )
        },
        removeAll:(state)=>{
            state.currencys = []
        }
    }
})

export const {addCurrency, removeCurrency, removeAll} = addToCartSlice.actions
export default addToCartSlice.reducer