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
        }
    }

})




export const {setProductList}=productStateSlice.actions
export default  productStateSlice.reducer;

