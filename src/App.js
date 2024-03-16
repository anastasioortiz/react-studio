import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = "./" + process.env.PUBLIC_URL + "/" + item.image;
});


/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
    const [cart, setCart] = useState([]);

    const getTotalPrice = () => {
      return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

    const addToCart = (item) => {
      const existingItemIndex = cart.findIndex(cartItem => cartItem.name === item.name);

      if (existingItemIndex !== -1) {
          const updatedCart = [...cart];
          updatedCart[existingItemIndex].quantity++;
          setCart(updatedCart);
      } else {
          setCart([...cart, {name: item.name, quantity:1, price: item.price}]);
      }
  };

  return (
    <div className="App">
      <h1>Tacho's Bakery</h1> 
      <div className="market">
        <div className = "goodsHolder">
          {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
            <BakeryItem key={index} name={item.name} description = {item.description} price = {item.price} image = {item.image} addToCart={addToCart}/>
          ))}
        </div>

        <div>
        <h2>Cart</h2>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        {item.name} - x {item.quantity}
                    </li>
                ))}
             </ul>
          <p>Total: $ {
            getTotalPrice()
          }</p> 
        </div>
      </div>
    </div>
  );
}

export default App;
