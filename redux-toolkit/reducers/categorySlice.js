import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategoriesThunk = createAsyncThunk("getCategories",async({page,size})=>{
    const api = `http://localhost:8080/api.myservice.com/v1/admin/categories?page=${page}&size=${size}`
    const response = await axios.get(api);
    console.log(response.page);
    return response.data.data;
})

const categorySlice = createSlice({
    name:"categories",
    initialState:{
        data:[],
        loading:false,
        currentPage:0,
        totalElement:0,
        size:2
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.
            addCase(getCategoriesThunk.pending,(state)=>{
                state.loading = true;
            })
            .addCase(getCategoriesThunk.fulfilled,(state,action)=>{
                state.loading = false;
                state.data = action.payload.content;
                state.currentPage = action.payload.currentPage;
                state.size = action.payload.pageSize;
                state.totalElement = action.payload.totalElement;
               

            }).addCase(getCategoriesThunk.rejected,(state)=>{
                state.loading = false;
                console.log('hihi');
            })
    }
});
export default categorySlice.reducer;