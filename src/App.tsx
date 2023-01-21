import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/home-page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
    
        <Routes >
         <Route index element={<HomePage />} />
        </Routes>
    

      <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
