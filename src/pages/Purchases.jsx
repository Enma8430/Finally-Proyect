import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPurchasesThunk } from '../store/slices/purchases.slice';

const Purchases = () => {

    const dispatch = useDispatch()

    const purchases = useSelector(state => state.purchases)
    useEffect(() => {
        dispatch(getPurchasesThunk())
    }, [])

    console.log(purchases);

    return (
        <div>
            <h1>Purchases</h1>
            <ul>

                {
                    purchases.map(purchases => (
                        <li key={purchases?.id}>
                            {purchases.cart.products.map(product => (
                                <li key={product.id}>
                                    <Link key={product.id} to={`/products/${product.id}`} >
                                        <h3><b>Product: </b> {product.title}</h3>
                                    </Link >

                                    <h3><b>Price: </b>$ {product.price} </h3>
                                    <h3><b>Purchse Date: </b>{product.createdAt}</h3>
                                </li>
                            ))}
                        </li>
                    ))
                }

            </ul>
        </div>
    );
};

export default Purchases;