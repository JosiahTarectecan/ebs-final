import React, { useState, useEffect } from 'react';
import { commerce } from './lib/Commerce';
import {Products, Navbar, Cart, Checkout, About, Home, Contact, Login, Account} from './components';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { set } from 'react-hook-form';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [about] = useState({});
  const [home] = useState({});
  const [contact] = useState({});
  const [account] = useState({});
  const [login] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');



  const fetchVariants = async (productId) => {
    try {
      const { data } = await commerce.products.getVariants(productId);
      return data;
    } catch (error) {
      console.log("Error fetching variants", error);
      return [];
    }
  };
  

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    const productsWithVariants = await Promise.all(
      data.map(async (product) => {
        const variants = await fetchVariants(product.id);
        return {
          ...product,
          variants,
        };
      })
    );
    setProducts(productsWithVariants);
  };

  
  

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
    
  }

  const handleAddToCart = async (variantId, quantity) => {
  try {
    const variantData = { type: 'variant', id: variantId };
    const item = await commerce.cart.add(quantity, variantData);
    setCart(item);
    console.log('Item added to cart:', item);
  } catch (error) {
    console.error('Failed to add item to cart:', error);
  }
};

  


  
    
    const handleUpdateCartQty = async (productId, quantity) => {
    const item = await commerce.cart.update(productId, { quantity });
    setCart(item);
    };
    const handleRemoveFromCart = async (productId) => {
    const item = await commerce.cart.remove(productId);
    setCart(item);
    };
    const handleEmptyCart = async () => {
    const item = await commerce.cart.empty();
    setCart(item);
    };

    const refreshCart = async () => {
      const newCart = await commerce.cart.refresh();
      setCart(newCart);
    }

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
      try {
        const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
        setOrder(incomingOrder);
        refreshCart();
      } catch (error) {
        setErrorMessage(error.data.error.message)
      }
    }


  useEffect(() => {
fetchProducts();
fetchCart();
  }, []);

  console.log(cart);
  console.log(products);
  return (
    <Router>
      <div>
      <Navbar totalItems={cart && cart.total_items} />

      <Routes>
      <Route path='/' element={<Home home={home} />} />
      <Route path='/products' element={<Products products = {products} onAddToCart = {handleAddToCart}/>} /> 
      <Route path='/cart' element={<Cart cart={cart} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart} />} />
      <Route path="/checkout" element={
      <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage}/>} />
      <Route path="/about" element={<About about={about}/>} />
      <Route path="/contact" element={<Contact contact={contact}/>} />
      <Route path="/login" element={<Login login={login}/>} />
      <Route path="/account" element={<Account account={account} /> } />




        </Routes>
      </div>
    </Router>
    
  )
}

export default App;