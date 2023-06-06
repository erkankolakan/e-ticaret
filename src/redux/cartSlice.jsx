import { createSlice } from "@reduxjs/toolkit";


//burası benmim için verileri çağırdığım yer
const fetchFromLocalStorage = () => {
    //burası benim localStorage ile ilgili işlemlerimi yapmak istediğim alan 

    let cart = localStorage.getItem("cart") //Local Storage deki cart keyine ait verileri çağır demiş oluyoruz
    if (cart) {
        return JSON.parse(localStorage.getItem("cart"))
//JSON formatındaki bir veriyi JavaScript nesnelerine veya dizilere dönüştürmek için kullanılı
    }else{
        return []
    }
}

//dışarıdan gelen data ları cart adında localStorage kaydediyoruz
const storeInLocalStorage = (data) => {
    localStorage.setItem("cart" , JSON.stringify(data))
// Bir JavaScript nesnesini veya dizisini JSON formatına dönüştürmek için kullanılır. setItem diyerek cart keyi ile gelen data verilerini localStorage kaydetmiş oluyoruz.
}
 

const initialState = {
    carts:fetchFromLocalStorage(), 
    itemCount : 0, //Ürün sayım
    totalAmount: 0 , //Total Ürün Miktarım
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers :{
        addToCart: (state, action) => {
            const isItemCart =  state.carts.find(item => item.id === action.payload.id)


//Bu fonksiyonda şunu söyler state içindeki carts üzerinden find ed yani bul neyi find ediceksin  her bir elemanı gezeceksin her bir gezdiğin elemanın id değeri kontorl et yani sana dışarıdan gelen id değeriyle aynı olup olmadığını kontorl et bunları find et bul.

if(isItemCart){
    //tarama sonucunda isItemCart böyle birşey bulduysan state içindeki kartları maple ve bu fonksiyonu onlara uygula
    const tempCart = state.cart.map( item => {
        if(item.id === action.payload.id){
            //item şuan üzerinde olduğumuz karttır biz item.id diyerek şuan üzerinde olduğumuz kartın id değerini almış oluruz.

            let temQty = item.quantity + action.payload.quantity;
            let tempTotalPrice = tempQty + item.price;
        return{
            ...item, quantity: tempQty, totalPrice : tempTotalPrice //önemli bir kullanım tarzı tek spread operatörü ile iki değişkene aynı anda değer ataya biliyoruz.

// ...item: Bu ifade, "item" adlı bir değişkenin değerini kopyalamak veya başka bir nesneye genişletmek için kullanılan bir spread operatörüdür.
//quantity: tempQty: Bu ifade, yeni oluşturulan nesnenin quantity özelliğine tempQty değerini atar. tempQty değişkeninin değeri bu özelliğe atanır.
//totalPrice: tempTotalPrice: Bu ifade, yeni oluşturulan nesnenin totalPrice özelliğine tempTotalPrice değerini atar. tempTotalPrice değişkeninin değeri bu özelliğe atanır.
//Özetlemek gerekirse, bu kod, mevcut bir item nesnesinin tüm özelliklerini kopyalayarak yeni bir nesne oluşturur. Bu yeni nesnenin quantity ve totalPrice özellikleri, belirli tempQty ve tempTotalPrice değerlerine atanır. Yani, item nesnesiyle aynı özellikleri içeren bir kopya nesne oluşturulurken, quantity ve totalPrice özelliklerinin değerleri değiştirilmiş olur.

        }
        }
        else{
            return item
        }

        state.carts = tempCart;
        storeInLocalStorage(state.carts)

    })
}else{
    state.carts.push(action.payload)
    storeInLocalStorage(state.carts)
}

//Bu fonksiyon iki parametre alır: state ve action. state, mevcut uygulama durumunu temsil eden bir nesnedir ve action, bu eylem oluşturucu fonksiyonuna sağlanan eylem nesnesini temsil eder.

//Yani, action parametresi, bu eylem oluşturucu fonksiyonun çağrıldığı yerden sağlanır. Bu eylem nesnesi, addToCart eyleminin türünü (type) ve gerekli verileri (payload) içerir.

//state.carts: Bu ifade, bir "state" nesnesi içinde bulunan "carts" özelliğine erişim sağlar. State zaten yukarıdaki initila içindeki verilerdir. "state" genellikle bir uygulama durumunu temsil eden bir nesnedir

//find(): Bu, JavaScript dizilerinde bulunan bir dizi yöntemidir. Bir dizi içinde belirli bir koşulu sağlayan ilk öğeyi bulur ve bu öğeyi döndürür.

//(item => item.id === action.payload.id): Bu fonksiyon, her bir sepet öğesi için kontrol edilen bir koşul belirtir. Bu koşul, sepet öğesinin id özelliğinin action.payload.id ile eşleşip eşleşmediğini kontrol eder. Eğer eşleşirse, find() yöntemi bu öğeyi döndürecektir.

//Özetlemek gerekirse, bu kod, bir alışveriş sepetinde belirli bir öğenin (action.payload.id) bulunup bulunmadığını kontrol eder ve sonucu isItemCart değişkenine atar.

        }
    },
    //burada api üzerinde bir işlem yapmayacağım için reducers kısmını kullanarak fonksiyonlar oluşturup başka sayfalardan erişebiliriz.

    //bu herhangi bir cartta bulunan ürünü silmek için oluşturmuş oluşturmuş olduğumuz bir fonkisiyondur.
    removeFromCart:(state,action) => {
        const tempCart = state.carts.filter(item => item.id !== action.payload)
        state.carts = tempCart
        storeInLocalStorage(state.carts)
// bu fonksiyon ile dışardan bir id göndericem gönderidğim bu id üzerinde de filtreleme işlemi yapıcam farklı olanları flitrele aynı olanları sil çünkü bu fonksiyonu biz silme butonunda kullanacağız. 

//filter() yöntemi, bir dizi içinde belirli bir koşulu sağlayan öğeleri filtrelemek için kullanılır ve bu öğelerden yeni bir dizi oluşturur. Orijinal diziyi değiştirmez, sadece filtrelenmiş bir kopya döndürür.
    },
            
//kartımın içindeki tüm ürünleri silmek isteiğim zaman kullancağım fonksiyon 
    clearCart : (state) => {
        state.carts = []
        storeInLocalStorage(state.carts)
    },

    //karta kaç tane ürün var, toplam karttaki ürün ne kadar bunu hesaplayacağız
    getCartTotal: (state) => {
            state.totalAmount = state.carts.reduce((cartTotal , cartItem) => {
                return cartTotal += cartItem.totalPrice
            },0)
    //reduce() yöntemi, bir dizi öğesini tek bir değere dönüştürmek için kullanılır. Bu yöntem, dizinin her öğesini dolaşırken belirli bir işlemi uygular ve sonuç olarak tek bir değer döndürür.
    state.itemCount = state.carts.lenght //kartımın içinde kaç tane ürün var onu tespit edebiliyoruz.
    }

}
)


export const {addToCart,removeFromCart,clearCart,getCartTotal} = cartSlice.actions


export default cartSlice.reducer