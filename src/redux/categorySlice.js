import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//Bu bizim için başlangıç değerlerini tutacak
const initialState = {
    categories:[]
}


export const getCategories = createAsyncThunk("category" , async() => {
    const response = await fetch("https://fakestoreapi.com/products/categories") 
    const data = response.json(); // bir üst satırda gelen veriyi json() tipine çevirdik
    return data; // return ederek farklı yerlerde kullanmayı sağlarız
})




const  categorySlice = createSlice({
    name:"categories",
    initialState,
    reducers:{
        //reducer fonksiyon yazmak api kullanılmadan sayfa içerisinde statik olarka yapılan veriler için kullanılır. Biz api çekeceğimiz için reducers kısmını kullanmıyoruz, create async thunk adındaki yapıyı kullanacağız.
    },
    extraReducers:(builder) => {
        builder 
        .addCase(getCategories.fulfilled, (state , action) => { 
            //state: Bu parametre, slice'ın mevcut durumunu (state) temsil eder. İlk başta,nitialState olarak tanımladığınız kategoriler dizisini içerir
            state.categories = action.payload;
            //action: Bu parametre, Redux'ta gerçekleşen bir eylemi temsil eder. Redux Toolkit ile oluşturulan getCategories async thunk'ı, getCategories.fulfilled durumunda tetiklenecektir. Bu durumda, action parametresi, API çağrısından dönen veriyi içeren bir nesnedir.
            
            //.addCase(getCategories.fulfilled, (state, action) => { ... }) ifadesi, Redux  Toolkit'in createSlice fonksiyonuyla oluşturulan slice'ın reducer'ına yeni bir case (durum) ekler. Bu durum, getCategories async thunk'ı başarıyla tamamlandığında gerçekleşecek olan durumu temsil eder.
            
            //getCategories.fulfilled: Bu, createAsyncThunk ile oluşturulan async thunk'ın tamamlandığında tetiklenen durumu temsil eder. Redux Toolkit, async thunk'lardaki durumları otomatik olarak oluşturur ve bunların başında pending, fulfilled, rejected gibi ön ekler bulunur. Bu durumda, getCategories async thunk'ı başarıyla tamamlandığında tetiklenen durumu ifade eder.
        })
    }
}
)

export default categorySlice.reducer