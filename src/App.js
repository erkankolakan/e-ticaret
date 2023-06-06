import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar"
import PageContainer from "./containers/PageContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from "./pages/Detail";
import { DenemeProvider } from "./Deneme";
import Cart from "./pages/Cart";


function App() {
  return (
    //DenememProvider tagları arasına almalıyız ki diğer tüm sayfalar arasında kullanabilelim.
    <DenemeProvider> 
    <div className="App">
      <PageContainer>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products/:id" element={<Detail/>}/> 
            <Route path="/cart" element={<Cart />}/> 
          </Routes>
        </Router>
      </PageContainer>
    </div>
    </DenemeProvider>
  );
} 

export default App;
