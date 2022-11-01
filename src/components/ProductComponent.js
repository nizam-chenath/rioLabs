import React , {useState} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'

const ProductComponent = ({category,searchFilter}) => {
    const products = useSelector((state) => state.allProducts.products)

    const [currentPage, setCurrentPage] = useState(1);
    const [nomberItems] = useState(6);

    const indexofLastPost = currentPage * nomberItems;
    const indexofFirstPost = indexofLastPost - nomberItems;
    const currentItems = products.slice(indexofFirstPost, indexofLastPost)
     
    //function that call when pagination nomber clicked
    // const gotopage = num => setCurrentPage(num)
  const gotopage = number =>  setCurrentPage(number);

    const renderList = currentItems.filter((val)=> {
        if(category===""){
            return val
        }else {
            return val.category === category

        }
    }).filter((val)=> {
        if(searchFilter === ""){
            return val
        }
        else {
            return val.title.toLowerCase().includes(searchFilter)
        }
    }).map((product)=>{
        const {id,title,image,price,category}= product
        return (
            <div className="product-component" key={id}>
                <Link to={`/product/${id}`}>
            <div className="card">
                <div className="image">
                    <img src={image} alt=""  />
                </div>
                <div className="content">
                    <div className="header">{title}</div>
                    <div className="price">${price}</div>

                </div>
            </div>
            </Link>
        </div>
        )
    })


 
  return (
      <div>

    <div className="product-cards">
       {renderList}
    </div>
    <div>
    <Pagination nomberofitems={nomberItems} totalitems={products.length} gotopage={gotopage} currentPage={currentPage}/>
    </div>
      </div>
  )
}

export default ProductComponent