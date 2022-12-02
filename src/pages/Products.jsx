import React, { useEffect, useState } from 'react';
import { Col, ListGroup, Row, Carousel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { createCartThunk } from '../store/slices/cart.slice';
import { getProductThunk } from '../store/slices/products.slice';

const Products = () => {

  const { id } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductThunk)
  }, [])

  useEffect(() => {
    dispatch(getProductThunk())
  }, [])

  const productList = useSelector(state => state.product)

  const product = productList.find((productItem) => productItem.id === Number(id))
  const relateProduct = productList.filter(
    productItem =>
      productItem.category.id === product.category.id &&
      productItem.id !== product.id
  )

  console.log(relateProduct);

  const [quantity, setQuantity] = useState('')

  const addCart = () => {
    const productToCart = {
      id: product.id,
      quantity: quantity
    }
    console.log(productToCart);
    dispatch(createCartThunk(productToCart))
  }

  return (
    <div>
      
  
      <h1>{product?.title}</h1>
      
      <Carousel style={{width:900}}>
      
        {product?.productImgs?.map(img => (
          <Carousel.Item>
            <img src={img} style={{width: 500, height: 500}}/>
          </Carousel.Item> 
          
          
        ))}
  </Carousel>
<input type='Number' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      <button onClick={addCart} style={{borderRadius:3}}>add product</button>

      <p>By; {product?.price}</p>
      <p>{product?.description}</p>

     
      <Row>
        <Col>

          <h1>Relative Productos</h1>

          {relateProduct.map(productItem => (
            <li key={productItem.id}>
              <Link to={`/product/${productItem.id}`}>{productItem.title}</Link>
            </li>
            
          ))}
        </Col>
      </Row>

    
    </div>
  );
};

export default Products;