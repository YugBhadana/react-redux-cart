import "./styles/app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
