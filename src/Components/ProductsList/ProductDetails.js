import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FETCH_SINGLE_PRODUCTS } from '../Constants/Constants';
import { addToCart, getTotal } from '../../Slices/CartSlice';
import { useDispatch } from 'react-redux';

const ProductDetails = () => {
  const {id} = useParams();
  const [product,setProduct]=useState();
  const dispatch=useDispatch();

  const addProductToCart=(product)=>{
    dispatch(addToCart(product));
    dispatch(getTotal());
  }
  useEffect(() => {
    fetch(FETCH_SINGLE_PRODUCTS+id)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.log("Error:", error));
  }, []);

  return (
 <div className=" py-2 px-1 border border-[white] shadow-sm flex text-center items-center w-[30rem] m-auto  mb-20 ">
      <div className="flex flex-col justify-center items-center gap-3 w-[16rem]">
        <img
          className="h-[250px] w-[100%] object-contain"
          src={product?.category?.image}
          alt=""
        />
        <h2 className="line-clamp-1 text-[0.8rem] text-center">
          {product?.title}
        </h2>
        <h1>$:{product?.price}</h1>
        <button
          className="p-2 flex items-center justify-center bg-blue-500 rounded-md text-xs text-white"
          onClick={()=>addProductToCart(product)}
                   
        >
          {" "}
          🛒 Add TO Cart
        </button>
      </div>
      <h1 className="w-52">Description:{product?.description}</h1>
    </div>
  )
}

export default ProductDetails