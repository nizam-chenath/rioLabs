import React , {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/actions/productActions'
import ProductComponent from './ProductComponent'
import axios from 'axios'


const ProductListing = () => {
   const [category, setcategory] = useState("");
   const [serchFilter,setSearchFilter] = useState("")

    const products= useSelector((state) => state)
    const dispatch = useDispatch()
    console.log(products)

    const fetchProducts = async () =>{
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) =>{
            console.log("Err",err)
        })
        dispatch(setProducts(response.data))
    };
    useEffect(()=>{
      fetchProducts();
    },[]);
    console.log("products:" ,products)
  return (
    <div >
        <div className="category-container">
            <div className="search-space">
                <input type="text" placeholder="Search..." onChange={(e)=>setSearchFilter(e.target.value)}/>
            </div>
            <div>

            <button onClick={()=>setcategory("men's clothing")}>Men</button>
            <button onClick={()=>setcategory("women's clothing")}>Women</button>
            <button onClick={()=>setcategory("jewelery")}>jewelery</button>
            <button onClick={()=>setcategory("electronics")}>electronics</button>
            <button onClick={()=>setcategory("")}>All</button>
            </div>
        </div>
        <ProductComponent category={category} searchFilter={serchFilter}/>
    </div>
  )
}

export default ProductListing