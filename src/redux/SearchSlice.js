import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";



const initialState = {
    products:[],
    productsStatus:STATUS.IDLE,
    productDetail:[],
    productDetailStatus:STATUS.IDLE
};

export const getSearchProducts= createAsyncThunk("searchproducts" , async(keyword) => {
    const response = await fetch(`https://fakestoreapi.com/products`)
    const data = await response.json()
    return data // return etmezsek başka yerlerde bu dataya ulaşamayız
})





  
  const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
      // Reducer fonksiyonları burada tanımlayabilirsiniz.
    },
    extraReducers: (builder) => {
      builder
        .addCase(getProducts.pending, (state, action) => {
    // pending durumu verilerin ve sayfanın yüklenme esnasında yapacağı şeylerden bahseder
          state.productStatus = STATUS.LOADING;
    //productStatus ü biz IDLE olarak belirlemiştik onu değiştirdik
        })



        
    },
  });
      



export default searchSlice.reducer




