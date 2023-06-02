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


export const getDetailProduct= createAsyncThunk("getproducts" , async(id) => { //!!!!!!!!!!!!!!!!!!!!!!
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await response.json()
    return data
})


const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{

    },
    //reducers larım sadece kart kısmında kullancağım  
    extraReducers:(builder) => {
        builder
        .addCase(getProducts.pending, (state, action) => {
    // pending durumu verilerin ve sayfanın yüklenme esnasında yapacağı şeylerden bahseder
            state.productStatus = STATUS.LOADING
    //productStatus ü biz IDLE olarak belirlemiştik onu değiştirdik
    
        })
        .addCase(getProducts.fulfilled, (state, action) => {
    // eğer bu ürün pending olayından çıkıpğ fulfilled olursa ne olacak onu belirtiyoruz (fulfilled olursa yani veriler geldiyse)
            state.productsStatus = STATUS.SUCCESS;
            state.products = action.payload
        })
        .addCase(getProducts.rejected, (state, action) => {
    //rejected durunu hata olması durumunu belirtir
                state.productStatus = STATUS.FAIL;
            })


        //detail sayfası içinde yapıyoruz   
        .addCase(getDetailProduct.pending, (state, action) => {
            state.productDetailStatus = STATUS.LOADING
        })
        .addCase(getDetailProduct.fulfilled, (state, action) => {
            state.productDetailStatus = STATUS.SUCCESS;
            state.productDetail = action.payload
        })
        .addCase(getDetailProduct.rejected, (state, action) => {     
            state.productDetailStatus = STATUS.FAIL;
        })
    }
})           

export default productSlice.reducer

