import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../fetatures/ProductSlice';
import { fetchData } from "../fetatures/FetchDataSlice";

const Product = () => {
    // const [products, setProduct] = useState([])
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products.products)
    console.log(products)
    /*    useEffect(() => {
           axios.get(`https://fakestoreapi.com/products`)
               .then(res => {
                   setProduct(res.data)
               })
       }, []) */

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])

    const handleCart = (product) => {
        dispatch(addCart(product))
    }

    return (
        <div className='max-w-7xl mx-auto mt-10'>
            <h2 className='text-2xl'>All Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {
                    products.map(prod => <div key={prod.title} className="card  bg-base-200 shadow-xl">
                        <figure><img className='w-full px-3 pt-3 h-[200px]' src={prod.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{prod.title}</h2>
                            <p>Price: ${prod.price}</p>
                            <div className="card-actions ">
                                <button onClick={() => handleCart(prod)} className="btn w-full btn-primary">Add To Cart</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Product;