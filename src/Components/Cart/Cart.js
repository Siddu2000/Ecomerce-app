import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart,removeFromCart,increaseQuantity,decreaseQuantity, getTotal } from '../../Slices/CartSlice';
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
// import { AiOutlineDelete } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

const Cart = () => {
    const {cart,totalCartPrice}=useSelector((state)=>state.Cart);
    const dispatch=useDispatch();
    useEffect(()=>{
      dispatch(getTotal());
    },[cart,dispatch]);

  return cart.length===0 ? (<NavLink to="/"><img className='w-[30rem] m-auto h-72 mb-20'  src="https://wpmet.com/wp-content/uploads/2022/09/EmptyCart_3-Copy.png" alt='empty'/></NavLink>):( 
    <div>
        <h1 className='text-center text-3xl text-green-500 my-4'>Shopping 🛍️ Cart</h1>
        <table
        className='
        border-separate
        border-spacing-x-[10rem]
        border-spacing-y-[1rem] border-b-slate-900 border '
        >
          <thead className= 'border-b-slate-900 border' >
            <tr className= 'border-b-slate-900 border' >
              <th >PRODUCT</th>
              <th >PRICE</th>
              <th >QUANTITY</th>
              <th>REMOVE</th>
            </tr>
            </thead>
            <tbody>       
        {cart?.map((item, index) => (
          <tr key={index} >
           <td> 
              <img className='w-36' src={item?.category?.image} />
            <h1>{item?.title}</h1>
           </td>
           <td>{item?.totalAmount}</td> 
       
            <td className="flex justify-center gap-3 mt-[4.5rem]">
                <button
                  className="p-0 flex items-center justify-center bg-red-500 rounded-md"
                  onClick={() =>dispatch(decreaseQuantity(item)) }
                >
                  <AiOutlineMinus className="text-[2rem]" />
                </button>
                <h1>{item?.cartQuantity}</h1>
                <button
                  className="p-0 flex items-center justify-center bg-blue-500 rounded-md text"
                  onClick={() => dispatch(increaseQuantity(item))}
                >
                  <AiOutlinePlus className="text-[2rem]" />
                </button>
                </td> 
             
             
             <td> <button
                className="mt-2 bg-white p-2"
                onClick={() => dispatch(removeFromCart(item))}
              >
                Clear
                {/* Remove<AiOutlineDelete className="text-[2rem] bg-red-500" /> */}
              </button>
              </td>
          </tr>
        ))}
  
      </tbody>
        </table>
        <div className='flex justify-around m-[4rem -13rem] items-center'>
      <button className='bg-red-500 p-2 mt-4  rounded text-gray-100' onClick={()=>dispatch(clearCart())}>Clear All</button>
      <h1 className=''>SubTotal:  ₹{totalCartPrice}</h1>
        </div>
    </div>
  )
}

export default Cart