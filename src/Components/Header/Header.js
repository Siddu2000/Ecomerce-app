import React ,{useState}from 'react'
import { NavLink } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import logo from "./logo.png"
import { setSearchTerm } from '../../Slices/SearchFilter';
import Search from './Search';

const Header = () => {
const {totalCartQuantity}=useSelector((state=>state.Cart));
const [searchFilter, setSearchFilter] = useState("");
const products = useSelector((state) => state?.Product.products);
const dispatch = useDispatch();
const filteredProducts = products?.filter((product) => {
  return product?.title?.toLowerCase().includes(searchFilter?.toLowerCase());
});

const handleChange = (e) => {
  setSearchFilter(e.target.value);
  dispatch(setSearchTerm(filteredProducts));
};
  return (
    <div className='flex p-1 justify-around items-center sticky top-0 z-10 bg-white' >
        <NavLink><img className='h-24 rounded-full' src={logo} alt='logo'/></NavLink>
 <div>
 <section className="search-item relative">
        <input
          className="p-1  border-2 border-black rounded-lg focus:outline-none focus:border-blue-500"
          type="search"
          name="search "
          value={searchFilter}
          onChange={handleChange}
          placeholder="search all products...🔍"
        />
        {
          searchFilter  && <Search className="absolute w-[100%] max-h-[150px] overflow-y-auto shadow-sm bg-white top-10" />
        }
      </section>
     </div>
      <CgProfile  className='text-4xl'/>
      <div>
      <NavLink to="/cart">
      <IoCartOutline className='text-4xl relative right-3' />
      <h1 className='absolute top-[1rem] text-xl'>{totalCartQuantity}</h1>
       </NavLink>
      </div>
      
    </div>
  )
}

export default Header