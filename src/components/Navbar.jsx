import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const numberOfCartItem = useSelector(state => state.catrProduct.carts.length)

    return (
        <div className='h-20 w-full text-white bg-black'>
            <div className='max-w-7xl mx-auto h-full flex items-center gap-8'>
                <Link className='text-3xl' to='/'>Redux Toolkit</Link>
                <ul className='flex justify-between items-center gap-8'>
                    <li>
                        <Link to='/product'>product</Link>
                    </li>
                    <li>
                        <Link to='/cart'>cart<sup>{numberOfCartItem}</sup></Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;