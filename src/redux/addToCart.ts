import { Update } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";
import { Action } from "history";
import { nanoid } from "nanoid";



interface Currencys {
    toPay: number,
    symbol:String,
    getValue: number | null,
    fromRate:string,
    id: string | null
    crypto:boolean,
    iGet:number|null
    rate: number 
    
}


export const addToCartSlice = createSlice({

    name: "addToCart",
    initialState:{
       currencys:<Currencys[] > [{fromRate:'USD', getValue: null, symbol:'Your Cart', toPay:0, id: null, crypto:true, iGet:null, rate:0}]
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
        },
        updateAmount:(state, action)=>{
            state.currencys = state.currencys.map((item)=>{
                if(item.id === action.payload.id ){
                    return {...item, iGet: action.payload.amount }
                }
                else return item
            })
            console.log(state.currencys, 'tetetteet')
        }
  

    }
})

export const {addCurrency, removeCurrency, removeAll,updateAmount} = addToCartSlice.actions
export default addToCartSlice.reducer