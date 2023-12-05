import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setSearchTerm } from "../../Slices/SearchFilter";

const Search = ({ className }) => {
  const searchResult = useSelector((state) => state.Search);
  const dispatch=useDispatch()
  const clearSearchItem=()=>{
    dispatch(setSearchTerm([]))
  }

  return (
    <section className={className}>
      <ul>
        {searchResult.map((prdItem) => (
          <Link to={`product-details/${prdItem.id}`} key={prdItem.id} onClick={clearSearchItem}> 
            <li className="flex" >
              <figure className="max-w-[30px]">
                <img src={prdItem?.category?.image} />
              </figure>
              <h1>{prdItem?.title}</h1>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default Search;
