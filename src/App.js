import React, { useState, useEffect } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import './app-select.css';
import Products from './components/products/Products';
import Cart from './components/cart/Cart';
import companyLogo from './logo.png';
import cartLogo from './cart.jpg';
import correctpromocode from './components/cart/Cart';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const setCartDelegate = (item) => {
    setCart([...cart, item]);
  };



  useEffect(() => {
    const dataPromise = fetch('products.json');
    const categoryselect = document.getElementById('category');
    const promocode = document.getElementById("order-select");
    // totalAmount = {totalAmount}

    promocode.addEventListener('change', function (e) {
      if (e.target.value === "nodobra") {
        alert('dziala');
        correctpromocode = 1;
      }
    });

    categoryselect.addEventListener('change', function (e) {
      if (e.target.value === "1") {
        alert('Selected');
      }
    });

    dataPromise
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const products = data.products;

      setProducts(products);
    });
  }, []);
  
  
  
  const clearCart = () => {
    setCart([])
  }
  const deleteOneItem = (product) => {
    const tak = cart.findIndex((e) => e.id === product.id)
    cart.splice(tak,1)
    setCart([...cart])
  }
  return (
    <div className="App">
      <div class="header">
      <img class="alledrogo" src={companyLogo}/>
        <div class="category">
        <input type="text" class="promocode" id="order-select" name="promocode" placeholder="Wpisz swój kod promocyjny"></input>
          <select id="category">
            <option value="0">Wybierz kategorie</option>
            <option value="1">Telefony</option>
            <option value="2">Laptopy</option>
          </select>
          <input type="submit" class="submit" value="Zatwierdź"></input>
        </div>
        <div class="koszyk">
        <div class="cartbutton">
          <img variant="primary" onClick={handleShow} src={cartLogo}/>
        </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          {/* <Modal.Title>Koszyk</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
      {!!cart.length && <Cart deleteOneItem={deleteOneItem} clearCart={clearCart} cart={cart} />}
        </Modal.Body>
        <Modal.Footer>
          <Button class="closemodal" onClick={handleClose}>
            Zamknij
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
      </div>
      <Products products={products} setCart={setCartDelegate} />
    </div>
  );
}

export default App;
