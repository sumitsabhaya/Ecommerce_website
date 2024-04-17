import React from 'react'
import './footer.css'
import { FaPiggyBank, FaShippingFast, FaHeadphonesAlt, FaWallet} from 'react-icons/fa' 

const Footer = () => {
    return (
        <>
        <div className='footer'>
            <div className='container'>
                <div className='left-box'>
                    <div className='box'>
                        <div className='icon_box'>
                            <FaPiggyBank />
                        </div>
                        <div className='detail'>
                            <h3>Great Saving</h3>
                            <p>The difference between something good and something great is attention to detail.</p>
                        </div>
                    </div>
                        <div className='box'>
                        <div className='icon_box'>
                            <FaShippingFast />
                        </div>
                        <div className='detail'>
                            <h3>free delivery</h3>
                            <p>During the Offer Period, customers placing their order on Amazon will be eligible for Free delivery.</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon_box'>
                            <FaHeadphonesAlt />
                        </div>
                        <div className='detail'>
                            <h3>24X7 support</h3>
                            <p>In today’s advanced world, 24/7 customer service is more of a necessity than a choice.</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon_box'>
                            <FaWallet />
                        </div>
                        <div className='detail'>
                            <h3>money back</h3>
                            <p>The money back policy, also commonly known as the child money back plan, is a life insurance product offering life.</p>
                        </div>
                    </div>
                </div>
                <div className='right_box'>
                    <div className='header'>
                        <img src='image/logo.png' alt=''></img>
                        <p>Empower your Amazon business with Starmax, your trusted OEM smartwatch manufacturer. Whether you’re an established e-commerce seller or just starting, this page equips you with vital tools and knowledge for successfully selling our smartwatch products on Amazon.</p>
                    </div>
                    <div className='bottom'>
                        <div className='box'>
                            <h3>Your Account</h3>
                            <ul>
                                <li>About us</li>
                                <li>Account</li>
                                <li>Payment</li>
                                <li>sales</li>
                            </ul>
                        </div>
                        <div className='box'>
                            <h3>products</h3>
                            <ul>
                                <li>Delivery</li>
                                <li>Track Oder</li>
                                <li>New product</li>
                                <li>old product</li>
                            </ul>
                        </div>
                        <div className='box'>
                            <h3>contact us</h3>
                            <ul>
                                <li>150,ring road RK prime A-512(Rajkot)</li>
                                <li>+91(888859999)</li>
                                <li>Patelinfa@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
      )
    }

export default Footer