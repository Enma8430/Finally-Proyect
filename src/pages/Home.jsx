import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Row, Col, Form, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { filterItemThunk, filterProductThunk, getProductThunk } from '../store/slices/products.slice';
import { Link } from 'react-router-dom'

const Home = () => {
    const dispatch = useDispatch()
    const product = useSelector(state => state.product)
    const [sectionList, setSectionList] = useState([])
    const [inputSearch, setInputSearch] = useState('')

    useEffect(() => {

        dispatch(getProductThunk())

        axios.get('https://e-commerce-api.academlo.tech/api/v1/products/categories')
            .then(res => setSectionList(res.data.data.categories))
            .catch(error => console.error(error.response.data))

    }, [])

    console.log(sectionList);

    return (
        <div>
            <h1>Home</h1>
            <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={inputSearch}
          onChange= {e => setInputSearch(e.target.value)}
        />
        <Button 
        variant="outline-secondary"
        onClick={() => dispatch(filterItemThunk(inputSearch))}
        
        >
          Search
        </Button>
      </InputGroup>

            <Row>

            {sectionList.map(section =>
                <Col onClick={() => dispatch(filterProductThunk(section.id))} key={section.id}>
                    {section.name}
                </Col>)
            }
            </Row>
            {product.map(productItem => (
                <li key={productItem.id}>
                    <Link to={`/products/${productItem.id}`}>
                        {productItem.title}
                        <br />
                        <img src={productItem.productImgs[0]} alt=""style={{width: 500}} />
                    </Link>
                </li>
            ))}
        </div>
    );
};

export default Home;