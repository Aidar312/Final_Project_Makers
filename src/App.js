import React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./contexts/authContext";
import ProductsContextProvider from "./contexts/productsContext";
import CartContextProvider from "./contexts/cartContext";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Routing from "./Routing";
import "antd/dist/antd.css";
import "./App.css";

const App = () => {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <ProductsContextProvider>
          <BrowserRouter>
            <Header />
            <Routing />
            <Footer />
          </BrowserRouter>
        </ProductsContextProvider>
      </CartContextProvider>
    </AuthContextProvider>
  );
};

export default App;

/*
CRUD
фильтрация
пагинация
поиск
корзина
роутинг
админка
*/
