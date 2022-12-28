
import { getAllProducts } from "../../utils/api";


import { useEffect, useState } from "react";

import ProductCard from "../../components/ProductCard";
import '../../index.css'
import { Container, Row, Col, Image } from "react-bootstrap"

import Carousel from 'react-bootstrap/Carousel';



const Home = () => {
    
    const [productList, setProductList] = useState([])

    

    useEffect(() => {

      getAllProducts()
        .then(data => setProductList(data))
        .catch(err => alert("Could not load products"))
      
      },[])

    

    return (
      <main>
  
        <Container>
          <Carousel>
          {productList.map((product, i) => {
            return(
              
              <Carousel.Item key={i}>
                <img className="row-fluid pics" src={product.image} alt={product.title} 
                />
              </Carousel.Item>
            
            );
          }
          )
        }
       
        </Carousel>
        </Container>
        


        
        
        <div className="row">
          {productList.map((product, i) => {
            return(
              <ProductCard product={product} key={i} productList={productList} setProductList={setProductList} />
              
            
            );
          }
          )
        }
       </div>
      </main>
    );
}

export default Home;
