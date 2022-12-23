
import { getAllProducts } from "../../utils/api";


import { useEffect, useState } from "react";

import ProductCard from "../../components/ProductCard";
import '../../index.css'



const Home = () => {
    
    const [productList, setProductList] = useState([])

    

    useEffect(() => {

      getAllProducts()
        .then(data => setProductList(data))
        .catch(err => alert("Could not load products"))
      
      },[])

     

    return (
      <main>
        
        <div className="row">
          {productList.map((product, i) => {
            return(
              
              
              
              <ProductCard product={product} key={i} productList={productList} setProductList={setProductList} />
            
           
              
            )
          })}
        </div>
      </main>
    );
}

export default Home;
