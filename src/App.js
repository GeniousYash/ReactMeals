import "./App.css";
import React,{useState} from "react";
import Header from './componants/Layout/Header';
import Meals from './componants/Meals/Meals';
import Cart from "./componants/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
  const [cartIsShown,setCartIsShown]=useState(false)

  const showCartHandler=()=>{
    setCartIsShown(true);
  }

  const hideCartHandler=()=>{
    setCartIsShown(false);
  }
  return (
    <div className="app">
        <CartProvider>
        { cartIsShown && <Cart onClose={hideCartHandler}/>}
        <Header onShowCart={showCartHandler}/>
        <main>
          <Meals/>
        </main>
        </CartProvider>
    </div>
  )
}

export default App;
