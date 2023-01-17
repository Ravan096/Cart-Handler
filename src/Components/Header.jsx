import React from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

const Header = () => {

  const {cartitems}=useSelector((state=>state.cart))
  return (
    <nav>
        <h2>Logo Here</h2>
        <div>
            <Link to={'/'}>Home</Link>
            <Link to={'/cart'}><FaShoppingCart/><p>{cartitems.length}</p></Link>
        </div>
    </nav>
  )
}

export default Header