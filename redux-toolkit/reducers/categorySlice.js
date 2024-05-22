import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategoriesThunk = createAsyncThunk("getCategories",async()=>{
    const response = await axios.get('http://localhost:8080/api.myservice.com/v1/admin/categories');
    // console.log(response);
    return response.data.duLieu;
})

const categorySlice = createSlice({
    name:"categories",
    initialState:{
        data:[],
        loading:false
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.
            addCase(getCategoriesThunk.pending,(state)=>{
                state.loading = true;
            })
            .addCase(getCategoriesThunk.fulfilled,(state,action)=>{
                state.loading = false;
                state.data = action.payload;
                

            }).addCase(getCategoriesThunk.rejected,(state)=>{
                state.loading = false;
                console.log('hihi');
            })
    }
});
export default categorySlice.reducer;