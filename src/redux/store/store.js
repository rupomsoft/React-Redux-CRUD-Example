import {configureStore} from "@reduxjs/toolkit";

import productStateSlice from "../state/product-state-slice"


export  default  configureStore({
    reducer:{
        product:productStateSlice
    }
})