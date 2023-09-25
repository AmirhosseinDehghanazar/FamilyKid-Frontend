// import {
//   createEntityAdapter,
//   createSelector,
//   createSlice,
// } from "@reduxjs/toolkit";
// import { apiSlice } from "./apiSlice";

// const tabelAdaptore = createEntityAdapter();
// const initialState = tabelAdaptore.getInitialState();

// export const extendedApi = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     getData: builder.query({
//       query: () => "/",
//       transformResponse: (response) => {
//         return usersAdaptore.setAll(initialState, response);
//       },
//       transformResponse: (response) => {
//         return tabelAdaptore.setAll(initialState, response);
//       },
//     }),
//   }),
// });

// console.log(initialState);

// const tableSlice = createSlice({
//   name: "table",
//   initialState,
//   reducers: {
//     updateData: ( action) => {

//     }
//   },
// });

// const selectDataResult = extendedApi.endpoints.getData.select();
// const allData = createSelector(selectDataResult, (result) => result.data);

// export const {
//   selectAll: selectAllData,
//   selectById: selectDataById,
//   selectIds: selectAllDataId,
// } = tabelAdaptore.getSelectors((state) => allData(state) ?? initialState);

// export default tableSlice.reducer;
