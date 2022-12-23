
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
          <Row>
            <Col sm={2}>
              <Image src="https://i.postimg.cc/wvXyPfjH/sailboat.png" fluid />
            </Col>
            <Col sm={4}>
              <h1>YardSail</h1>
            </Col>
          </Row>
        </Container>

        
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
