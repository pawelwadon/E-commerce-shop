import { useState } from "react";

const Cart = ({cart})=>{

let totalSum = 0;
let total = cart.map((item) => totalSum += (Number(item.price.toFixed(2)) * item.quantity))

    return(
        <section className="w-[100vw] flex justify-center ">
            <div className="md:p-24 sm:p-8 w-full flex justify-center ">
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className='w-full lg:w-1/2 border rounded-xl px-4 py-4 my-2 grid grid-cols-3 shadow-[0px_2px_34px_-10px_rgba(66,68,90,1)]'>
                    <ul className='flex justify-between items-center px-5 col-span-3 py-4 uppercase font-medium'>
                        <li>Product</li>
                        <li>Count</li>
                        <li>Price</li>
                    </ul>
                {cart.map((item, index) => (
                    <div key={index} className="col-span-3 grid grid-cols-3 justify-items-center content-center py-5 px-5 my-4 border-b w-[100%] border rounded-md">
                        <div className="sm:flex items-center px-8">
                            <div className='w-[6rem] h-[6rem] content-center flex items-center justify-center mx-2'><img src={item.image} className='w-[100%] h-[100%] object-contain' /></div>
                            <p className='sm:px-4 sm:mx-2 text-center'>{item.productName}</p>
                        </div>
                            <div className='self-center'>
                                <p> {item.quantity}</p>
                            </div>
                        <div className='self-center justify-self-end'>
                            <p>${((item.price.toFixed(2)) * item.quantity).toFixed(2)}</p>
                        </div>
                    </div>
                ))}
                    <div className='py-2 px-4 col-span-3 flex justify-between text-center'>
                        <h1 className='font-semibold text-xl'>Total</h1>
                        <p className='text-xl font-semibold'>${totalSum.toFixed(2)}</p>
                    </div>
                </div>
            )}
        </div>
        </section>
    )
}

export default Cart;