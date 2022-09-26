import React, { useState, useEffect } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import './app-select.css';
import Products from './components/products/Products';
import Cart from './components/cart/Cart';
import companyLogo from './logo.png';
import cartLogo from './cart.jpg';

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

    dataPromise
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const products = data.products;

      setProducts(products);
    });
  }, []);

  return (
    <div className="App">
      <div class="header">
      <img class="alledrogo" src={companyLogo}/>
        <div class="category">
          <select>
            <option value="0">Wybierz kategorie produktu:</option>
            <option value="1">Telefony</option>
            <option value="2">Laptopy</option>
          </select>
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
      {!!cart.length && <Cart cart={cart} />}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>
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
