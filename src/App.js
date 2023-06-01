import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar"
import PageContainer from "./containers/PageContainer";

function App() {
  return (
    <div className="App">
      <PageContainer>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </Router>
      </PageContainer>
    </div>
  );
} 

export default App;
