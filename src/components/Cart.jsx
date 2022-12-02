import React, { useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { chekCartThunk, getCartThunk } from '../store/slices/cart.slice';
import { useDispatch, useSelector } from 'react-redux';

const Cart = ({ show, handleClose }) => {

  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)

  useEffect(() => {
    dispatch(getCartThunk())
  }, [])

  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.map(product => (
            <li key={product.id}>{product.title}</li>
          ))}

          <button onClick={() => dispatch(chekCartThunk())}>Checkout</button>
        </Offcanvas.Body>

      </Offcanvas>

    </>
  );
};

export default Cart;