
import { getAllProducts } from "../../utils/api";


import { useEffect, useState } from "react";

import ProductCard from "../../components/ProductCard";


const Home = () => {
    
    const [productList, setProductList] = useState([])
    const [noProducts, setNoProducts] = useState(false)
    

    useEffect(() => {

      getAllProducts()
        .then(data => setProductList(data))
        .catch(err => setNoProducts(true))
      
      },[])

    

    return (
      <>
      <main>
      {noProducts ? 
      
        <div>No Products have been added yet!</div>
        
      : <div className="row">
          {productList.map((product, i) => {
            return(
              
              
              
              <ProductCard product={product} key={i} productList={productList} setProductList={setProductList} />
            
           
              
            )
          })}
        </div>}
      </main> 
      </>
    );
}

export default Home;
