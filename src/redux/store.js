import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './categorySlice'
import productSlice from './productSlice'
import cartSlice from './cartSlice'

export const store = configureStore({
  reducer: {
    categories:categorySlice,
    products:productSlice,
    carts:cartSlice
  },
})

//burası senin ana depon buraya yazdığın redux parçacıklarına tüm sayfalar erişebilir.