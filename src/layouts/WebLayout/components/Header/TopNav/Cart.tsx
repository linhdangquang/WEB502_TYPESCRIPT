import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { getCartTotal } from '../../../../../features/Cart/cartSlice.js';
import { USDFormat } from '../../../../../utils/currencyFormat';

function Cart() {
  const { totalAmount, items } = useSelector((state: any) => state.cart);
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [items]);
  useEffect(() => {
    if (open === false) {
      document.querySelector('.dropdown-content').classList.add('hidden');
    }
    // document.querySelector('.dropdown-content').classList.add('hidden');
  }, [setOpen, open]);
  return (
    <div className="dropdown-end dropdown">
      <div tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="badge indicator-item badge-sm">{items.length}</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="border-base-400 card dropdown-content card-compact w-52 border-2 bg-base-200 shadow shadow-base-300"
      >
        <div className="card-body">
          <span className="text-lg font-bold">{items.length} Items</span>
          <span className="font-semibold text-gray-700">
            Subtotal: {USDFormat(totalAmount)}
          </span>
          <div className="card-actions">
            <Link to="/cart" className="w-full">
              <Button
                variant="contained"
                startIcon={<ShoppingBasketIcon />}
                className="btn w-full bg-orangeLight text-white"
                onClick={() => setOpen(false)}
              >
                View Cart
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
