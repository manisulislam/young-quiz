import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-container'>
            <div >
                <Link className='site-name' to='/'> YOUNG QUIZ</Link>
            </div>
            <div >
  
        <Link className='route-container' to='/'>Home</Link>
           
           <Link className='route-container' to='/statistics'>Statistics</Link>
           

           <Link className='route-container' to='/blog'>Blog</Link>

            </div>
            
        </div>
    );
};

export default Header;