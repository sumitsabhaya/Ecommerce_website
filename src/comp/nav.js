import React, { useEffect, useState } from 'react';
import { MdLocalShipping } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { BiLogIn, BiLogOut, BiUser } from "react-icons/bi";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import { auth, provider } from './config';
import { signInWithPopup } from 'firebase/auth';
import './nav.css';

const Nav = ({ search, setSearch, searchproduct }) => {
    const [value, setValue] = useState('');
    const { isAuthenticated, user } = useAuth0(); 
    console.log("======== user ======",user);
    console.log("======== isAuthenticated ======",isAuthenticated);

    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email);
            localStorage.setItem("email", data.user.email);
        });
    };

    useEffect(() => {
        setValue(localStorage.getItem('email'));
    }, []); 

    const logout = () => {
        localStorage.clear()
        window.location.reload()
    }
console.log("=============>",value);
    return (
        <>
            <div className='header'>
                <div className='top_header'>
                    <div className='icon'>
                        <MdLocalShipping />
                    </div>
                    <div className='info'>
                        <p>Free Shipping When Shopping upto $1000</p>
                    </div>
                </div>
                <div className='mid_header'>
                    <div className='logo'>
                        <img src='image/logo.png' alt='logo'/>
                    </div>
                    <div className='search_box'>
                        <input type='text' value={search} placeholder='search' onChange={(e) => setSearch(e.target.value)}></input>
                        <button onClick={searchproduct}><AiOutlineSearch /></button>
                    </div>
                    {
                        value ?
                            <div className='user'>
                                <div className='icon'>
                                    <BiLogOut />
                                </div>
                                <div className='btn'>
                                    <button onClick={logout}>LogOut</button>
                                </div>
                            </div>
                            :
                            <div className='user'>
                                <div className='icon'>
                                    <BiLogIn />
                                </div>
                                <div className='btn'>

                                     <button onClick={handleClick}>Login</button> 
                                       
                                </div>
                            </div>
                    }
                </div>
                <div className='last_header'>
                    <div className='user_profile'>
                        {
                            value ?
                                <>
                                    <div className='icon'>
                                        <BiUser />
                                    </div>
                                    <div className='info'>
                                        <p>{value}</p>
                                    </div>
                                </>
                                :
                                <>
                                    <div className='icon'>
                                        <BiUser />
                                    </div>
                                    <div className='info'>
                                        <p>Please Login</p>
                                    </div>
                                </>
                        }
                    </div>
                    <div className='nav'>
                        <ul>
                            <li><Link to='/' className='link'>Home</Link></li>
                            <li><Link to='/shop' className='link'>Shop</Link></li>
                            <li><Link to='/cart' className='link'>Cart</Link></li>
                            <li><Link to='/about' className='link'>About</Link></li>
                            <li><Link to='/contact' className='link'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className='offer'>
                        <p>flat 10% over all iphone</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;
