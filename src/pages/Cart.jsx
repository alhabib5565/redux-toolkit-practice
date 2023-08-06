import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart } from '../fetatures/ProductSlice';

const Cart = () => {
    const cartItems = useSelector(state => state.catrProduct.carts)
    console.log(cartItems)
    const dispatch  = useDispatch()
    const handleDelete =(id) => {
        dispatch(deleteFromCart(id))
    }
    return (
        <div className='max-w-7xl mx-auto mt-10'>
            all cart product

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {
                    cartItems.map(cartItem => <div key={cartItem.title} className="card w-full max-w-xl mx-auto bg-base-200 shadow-xl">
                        <figure><img className='w-full px-3 pt-3 h-[300px]' src={cartItem.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{cartItem.title}</h2>
                            <p>Price: ${cartItem.price}</p>
                            <div className="card-actions ">
                                <button onClick={() => handleDelete(cartItem.id)} className="btn w-full btn-primary">Remove Form Cart</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Cart;