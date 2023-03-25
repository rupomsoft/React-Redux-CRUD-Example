import {configureStore} from "@reduxjs/toolkit";

import productStateSlice from "../state/product-state-slice"
import settingsStateSlice from "../state/settings-slice"
export  default  configureStore({
    reducer:{
        product:productStateSlice,
        settings:settingsStateSlice
    }
})