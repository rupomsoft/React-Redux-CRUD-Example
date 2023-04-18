import {createSlice} from "@reduxjs/toolkit";

export const productStateSlice=createSlice({
    name:"product",
    initialState:{
        List:[],
        FormValue:{
            Img:"",
            ProductCode:"",
            ProductName:"",
            Qty:"",
            TotalPrice:"",
            UnitPrice:""
        }
    },
    reducers:{
        setProductList:(state,action)=>{
            state.List=action.payload
        },
        OnChangeProductInput:(state,action)=>{
            state.FormValue[`${action.payload.Name}`]=action.payload.Value;
        },
        ResetProductFormValue:(state,action)=>{
            Object.keys(state.FormValue).forEach((i) => state.FormValue[i] = "");
        }
    }

})




export const {setProductList,OnChangeProductInput,ResetProductFormValue}=productStateSlice.actions
export default  productStateSlice.reducer;

