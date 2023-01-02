import React, { useState, useEffect } from 'react';
import { getCartItems } from '../utils/buyHelper';
import { ShoppingCartItem } from './ShoppingCartItem';
export const CartModal = () => {
    let shipping = 2.5;
    const [totals, setTotals] = useState({
        subtotal: 0,
        shippingTotal: 0,
        total: 0
    })
    const [cart, setCart] = useState(getCartItems())

    useEffect(() => {
        console.log(cart)
      getTotals()
    }, [cart])  

    const updateCart = () => {
        setCart(getCartItems())
    }
    const getTotals = () => {
        if (cart.length === 0 || !cart) {
            // setTotals to 0
            setTotals({
                subtotal: 0,
                shippingTotal: 0,
                total: 0
            })
        }
        cart.map((item, i) => {
            item.price = parseFloat(item.price)
            item.qnty = parseInt(item.qnty)
            // setTotals and round every value to 2 decimals
            setTotals({
                subtotal: (totals.subtotal + (item.price * item.qnty)),
                shippingTotal: shipping,
                total: (totals.subtotal + (item.price * item.qnty) + shipping)
            })
        }, this)
    }
    return (
        <>
            <input type="checkbox" id="cart-modal" className="modal-toggle" />
            <div className="modal">
                <div className="card flex-shrink-0 shadow-2xl bg-base-100 w-[600px] h-fit">
                    <div className="text-primary left-6 top-6 absolute font-bold text-xl">Shopping Cart</div>
                    <label htmlFor="cart-modal" className="btn btn-sm btn-circle absolute right-6 top-6">✕</label>
                    <div className="card-body mt-14 mx-0 p-6">
                        {cart.length === 0 || !cart ? <div className="w-full min-h-24 max-h-56 text-gray-400 flex flex-col align-middle scroll-auto overflow-scroll">
                            <div className="text-center text-lg">Cart is empty</div>
                        </div> :
                            <></>
                        }
                        {cart != [] ? cart.map((item, i) => {
                            return (
                                <ShoppingCartItem product={item} key={i} updateCart={updateCart}/>
                                )
                            }, this) : <></>
                        }
                        <div className='m-auto border rounded-lg py-2 flex flex-col w-full px-4'>
                            <div className="my-1 w-full flex flex-row justify-between">
                                <div className="text-lg text-secondary font-thin">Subtotal</div>
                                <div className="text-lg text-secondary font-thin">{totals.subtotal}€</div>
                            </div>
                            <div className="my-1 w-full flex flex-row justify-between">
                                <div className="text-lg text-secondary font-thin">Shipping</div>
                                <div className="text-lg text-secondary font-thin">{totals.shippingTotal}€</div>
                            </div>
                            <div className="mt-2 mb-1 w-full flex flex-row justify-between">
                                <div className="text-xl text-primary font-bold">Total</div>
                                <div className="text-xl text-primary font-bold">{totals.total}€</div>
                            </div>
                        </div>
                        <div className="w-full flex flex-row mt-4 mx-auto align-middle">
                            <button className="btn btn-primary btn-outline w-1/2">Edit shipping/payment information</button>
                            <label for="my-modal" className="btn btn-primary w-1/2">Checkout</label>
                        </div>
                    </div>
                </div>
            </div>
        </>);
}