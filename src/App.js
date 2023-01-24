import React, { useState, useEffect } from 'react';
import { commerce } from './lib/Commerce';
import {Products, Navbar, Cart} from './components';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const {data} = await commerce.products.list();
    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
    
  }

  const handleAddToCart = async (product_id, quantity) => {
    const {cart} = await commerce.cart.add(product_id, quantity);

    setCart(cart);
}

const handleUpdateCartQty = async (product_id, quantity) => {
  const {cart} = await commerce.cart.update(product_id, {quantity});

  setCart(cart);
}


const handleRemoveFromCart = async (product_id) => {
  const {cart} = await commerce.cart.remove(product_id);
  setCart(cart);
}

const handleEmptyCart = async () => {
  const {cart} = await commerce.cart.empty();
  setCart(cart);
}


  useEffect(() => {
fetchProducts();
fetchCart();
  }, []);

  console.log(cart);

  return (
    <Router>
      <div>
      <Navbar totalItems={cart && cart.total_items} />

          <Routes>
          <Route path='/' element={<Products products = {products} onAddToCart = {handleAddToCart}/>} /> 
          <Route path='/cart' element={<Cart cart={cart} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart} />} />
        </Routes>
      </div>
    </Router>
    
  )
}

export default App;