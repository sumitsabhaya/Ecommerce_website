import React, { useState } from 'react';
import './cart.css';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { toast } from 'react-toastify';
import Modal from './Model';
import { collection, addDoc } from 'firebase/firestore';

const Cart = ({ cart, setCart }) => {
  // Increase Quantity of cart product
  const incqty = (product) => {
    setCart(cart.map((curElm) => (curElm.id === product.id ? { ...curElm, qty: curElm.qty + 1 } : curElm)));
  };

  // Decrease Quantity of cart product
  const decqty = (product) => {
    setCart(cart.map((curElm) => (curElm.id === product.id ? { ...curElm, qty: curElm.qty - 1 } : curElm)));
  };

  // Removing cart product
  const removeproduct = (product) => {
    setCart(cart.filter((curElm) => curElm.id !== product.id));
  };

  // Total Price
  const total = cart.reduce((price, item) => {
    const itemPrice = parseFloat(item.price.replace(',', ''));
    return price + item.qty * itemPrice;
  }, 0);

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const buyNow = async () => {
    if (name === '' || address === '' || pincode === '' || phoneNumber === '') {
      return toast.error('All fields are required', {
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }

    // Assuming the following variables are defined elsewhere: collection, fireDB
    const orderRef = collection(firebase, 'order');

    // Assuming localStorage is defined
    const email = JSON.parse(localStorage.getItem('user')).user.email;
    const userid = JSON.parse(localStorage.getItem('user')).user.uid;

    const addressInfo = {
      name,
      address,
      pincode,
      phoneNumber,
      date: new Date().toLocaleString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
      }),
    };

    const options = {
      key: '',
      key_secret: '',
      amount: parseInt(total * 100),
      currency: 'INR',
      order_receipt: 'order_rcptid_' + name,
      name: 'E-Bharat',
      description: 'for testing purpose',
      handler: function (response) {
        console.log(response);
        toast.success('Payment Successful');

        const paymentId = response.razorpay_payment_id;

        const orderInfo = {
          cart,
          addressInfo,
          date: new Date().toLocaleString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
          }),
          email, // Assuming these are defined
          userid,
          paymentId,
        };

        try {
          // Perform your action with orderInfo
          // orderRef.add(orderInfo);
        } catch (error) {
          console.log(error);
        }
      },

      theme: {
        color: '#3399cc',
      },
    };

    const pay = new window.Razorpay(options);
    pay.open();
  };

  return (
    <>
      <div className="cart">
        <h3>#cart</h3>
        {cart.length === 0 && (
          <div className="empty_cart">
            <h2>Your Shopping cart is empty</h2>
            <Link to="/shop">
              <button>Shop Now</button>
            </Link>
          </div>
        )}
        <div className="container">
          {cart.map((curElm) => (
            <div className="box" key={curElm.id}>
              <div className="img_box">
                <img src={curElm.image} alt="" />
              </div>
              <div className="detail">
                <div className="info">
                  <h4>{curElm.cat}</h4>
                  <h3>{curElm.Name}</h3>
                  <p>Price: ${curElm.price}</p>
                  <p>Total: ${curElm.qty * parseFloat(curElm.price.replace(',', ''))}</p>
                </div>
                <div className="quantity">
                  <button onClick={() => incqty(curElm)}>+</button>
                  <input type="number" value={curElm.qty} readOnly />
                  <button onClick={() => decqty(curElm)}>-</button>
                </div>
                <div className="icon">
                  <li onClick={() => removeproduct(curElm)}>
                    <AiOutlineClose />
                  </li>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bottom">
          {cart.length > 0 && (
            <>
              <div className="Total">
                <h4>Sub Total: ${total}</h4>
              </div>
              <button onClick={buyNow}>Buy Now</button>
            </>
          )}
        </div>
        <Modal
          name={name}
          address={address}
          pincode={pincode}
          phoneNumber={phoneNumber}
          setName={setName}
          setAddress={setAddress}
          setPincode={setPincode}
          setPhoneNumber={setPhoneNumber}
          buyNow={buyNow}
        />
      </div>
    </>
  );
};

export default Cart;
