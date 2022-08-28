import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";



interface Currencys {
    toPay: number,
    symbol:String,
    getValue: number,
    fromRate:string,
    id: any
}
const currId = nanoid()

export const addToCartSlice = createSlice({

    name: "addToCart",
    initialState:{
       currencys:<Currencys[]> [{fromRate:'USD', getValue: 0, symbol:'Your Cart', toPay:0, id: currId}]
    },
    reducers:{
        addCurrency: (state, action)=>{
            state.currencys = [...state.currencys, action.payload]
        },
        removeCurrency: (state, action )=>{
            state.currencys = state.currencys.filter((item)=>item.id !== action.payload )
        },
        removeAll:(state)=>{
            console.log('hej')
            state.currencys = []
        }
    }
})

export const {addCurrency, removeCurrency, removeAll} = addToCartSlice.actions
export default addToCartSlice.reducer