import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductSearch = createAsyncThunk('searchPro',async ({searchText})=>{
    // const {searchValue}=searchText;
    const response = await axios.get(`http://localhost:8080/api.myservice.com/v1/products/search?search=${searchText}`);
    return response.data;
})
const productSlice = createSlice({
    name:"products",
    initialState:{
        products:[],
        loading:true
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getProductSearch.pending,(state)=>{
            state.loading = true
        })
        .addCase(getProductSearch.fulfilled,(state,action)=>{
            state.loading = false;
            state.products = action.payload.data;
        })
        .addCase(getProductSearch.rejected,(state,action)=>{
            state.loading = true;
            console.log(action.error);
        })
    }
});
export default productSlice.reducer;