// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { fetchLoggedInUserOrders, fetchCount } from "./UserAPI";

// const initialState = {
//     userOrders: [],
//     status: 'idle',
// };

// export const fetchLoggedInUser = createAsyncThunk{
//     'user/fetchLoggedInUser',
//     async (id) => {
//         const response = await fetchLoggedInUserOrders (id);
//         //The value we return becomes the 'fullfilled' action payload 
//         return response.data;
//     }
// };

// export const UserSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         increment: (state) => {
//             state.value +=1;
//         },
//     },
//     extraReducers: (builder => {
//         builder
//             .addCase(fetchLoggedInUserOrdersAsync.pending, (state) => {
//                 state.status = 'loading';
//             })
//             .addCase(fetchLoggeInUserOrdersAsync.fulfilled, (state,action) => {
//                 state.status = 'idle';
//                 // this info can be different or more from logged-in User Info
//                 state.userInfo = action.payload;
//             });
//     },)
// });

// export const selectUserOrders = (state)=>state.user.userOrders;

// export const { increment } = UserSlice.actions;

// export default UserSlice.reducer;


