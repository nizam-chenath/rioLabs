import React from 'react'
import { useSelector } from 'react-redux'

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products)
    const renderList = products.map((product)=>{
        const {id,title,image,price,category}= product
        return (
            <div className="product-component" key={id}>
            <div className="card">
                <div className="image">
                    <img src={image} alt="" />
                </div>
                <div className="content">
                    <div className="header">{title}</div>
                    <div className="price">${price}</div>

                </div>
            </div>
        </div>
        )
    })
 
  return (
    <div>
       {renderList}
    </div>
  )
}

export default ProductComponent