import React, { useEffect } from "react";
import { FetchProducts } from "../../Slices/ProductSlice";
import { useSelector, useDispatch } from "react-redux";
import { addToCart} from "../../Slices/CartSlice";
import { ImSpinner3 } from "react-icons/im";
const ProductList = () => {
  const dispatch = useDispatch();
  const {products,loading,error} = useSelector((state) => state.Product);
console.log(products);
  useEffect(() => {
    dispatch(FetchProducts());
  }, []);

  const addProductToCart=(product)=>{
    dispatch(addToCart(product));
  }
  return loading ? <h1><ImSpinner3 className="animate-spin m-auto text-9xl text-blue-600"/></h1> :(
      <div className="flex flex-wrap justify-around ">
        {products?.map((item, index) => (
          <div key={index} className="w-80 text-center flex flex-col items-center gap-2 justify-center bg-slate-50 p-4  h-[30rem] rounded-md my-7">
            <h1 className="text-2xl">{item.category.name}</h1>
              <img className="h-[20rem] w-56" src={item?.category?.image} />
            <h1>{item?.title}</h1>
            <h2>Price:₹{item?.price}</h2>
            <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 rounded-3xl text-white text-sm" onClick={()=>addProductToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    
  );
};

export default ProductList;
