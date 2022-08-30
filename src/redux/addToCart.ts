import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";



interface Currencys {
    toPay: number,
    symbol:String,
    getValue: number | null,
    fromRate:string,
    id: string | null
    crypto:boolean,
    iGet:number|null
    
}


export const addToCartSlice = createSlice({

    name: "addToCart",
    initialState:{
       currencys:<Currencys[] > [{fromRate:'USD', getValue: null, symbol:'Your Cart', toPay:0, id: null, crypto:true, iGet:null}]
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