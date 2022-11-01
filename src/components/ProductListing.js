import React , {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/actions/productActions'
import ProductComponent from './ProductComponent'
import axios from 'axios'


const ProductListing = () => {
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
        <ProductComponent/>
    </div>
  )
}

export default ProductListing