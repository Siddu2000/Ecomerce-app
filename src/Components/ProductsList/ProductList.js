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
  return loading ? <h1><ImSpinner3 className="animate-spin m-auto mt-16 text-9xl text-blue-600"/></h1> :(
      <div className="flex flex-wrap gap-x-3 gap-y-5 justify-center  mt-14">
        {products?.map((item, index) => (
          <div key={index} className="max-w-[300px] w-[100%] py-2 px-1 border border-[white] shadow-sm flex flex-col justify-center items-center">
            <h1 className="text-2xl">{item.category.name}</h1>
              <img className="h-[250px] w-56 object-cover" src={item?.category?.image} />
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
