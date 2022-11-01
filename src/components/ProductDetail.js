import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { removeSelectedProduct, selectedProduct } from '../redux/actions/productActions'

const ProductDetail = () => {
    const product = useSelector((state) => state.product)
    const {productId} = useParams()
    const {image,title,price,category,description} = product;
    const dispatch = useDispatch()

    const fetchProductDetail = async () =>{
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) =>{
            console.log("error",err)
        })

        dispatch(selectedProduct(response.data));
    }
    useEffect(()=>{
         if(productId && productId !== ""){
             fetchProductDetail()
         }
         return ()=>{
             dispatch(removeSelectedProduct())
         }
    },[productId])
  return (
    <div className="detail-page">
        {Object.keys(product).length === 0 ?(
            <div>..loading</div>
        )  : (
            
            <div className="detail-container">
                   <div className="detail-image">
                       <img src={image} alt="" />
                   </div>
                   <div className="detail-details">
                       <h1>{title}</h1>
                       <h2>${price}</h2>
                       <h3>{category}</h3>
                       <p>{description}</p>
                       <div className="button">Add to Cart</div>
                   </div>
                   
            </div>
            
        
        )}
    </div>
  )
}

export default ProductDetail