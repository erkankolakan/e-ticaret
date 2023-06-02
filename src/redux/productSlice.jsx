import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";



const initialState = {
    products:[],
    productsStatus:STATUS.IDLE,
    productDetail:[],
    productDetailStatus:STATUS.IDLE
};

export const getProducts= createAsyncThunk("getproducts" , async() => {
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    return data // return etmezsek başka yerlerde bu dataya ulaşamayız
})




export const getCategoryProducts = createAsyncThunk("getCategoryProducts", async (category) => {
  const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  const data = await response.json();
  return data;
// bu kısımda katagory sistemi kuruyoruz
});


export const getDetail = createAsyncThunk("getDetail", async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    return data;
  });
  
  const productSlice = createSlice({
    name: "products",
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

        .addCase(getProducts.fulfilled, (state, action) => {
    // eğer bu ürün pending olayından çıkıpğ fulfilled olursa ne olacak onu belirtiyoruz (fulfilled olursa yani veriler geldiyse)
          state.productsStatus = STATUS.SUCCESS;
          state.products = action.payload;
        })

        .addCase(getProducts.rejected, (state, action) => {
    //rejected durunu hata olması durumunu belirtir
          state.productStatus = STATUS.FAIL;
        })

    //detail sayfası içinde yapıyoruz   
        .addCase(getDetail.pending, (state, action) => {
          state.productDetailStatus = STATUS.LOADING;
        })
        .addCase(getDetail.fulfilled, (state, action) => {
          state.productDetailStatus = STATUS.SUCCESS;
          state.productDetail = action.payload;
        })
        .addCase(getDetail.rejected, (state, action) => {
          state.productDetailStatus = STATUS.FAIL;
        })

        //category sistemi kuruyoruz
        .addCase(getCategoryProducts.pending, (state, action) => {
          state.productStatus = STATUS.LOADING;
         })
        .addCase(getCategoryProducts.fulfilled, (state, action) => {
          state.productsStatus = STATUS.SUCCESS;
          state.products = action.payload;
        })
        .addCase(getCategoryProducts.rejected, (state, action) => {
          state.productStatus = STATUS.FAIL;
        })
        


        
    },
  });
      



export default productSlice.reducer




