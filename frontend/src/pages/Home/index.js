
import { getAllProducts } from "../../utils/api";


import { useEffect, useState } from "react";

import ProductCard from "../../components/ProductCard";
import '../../index.css'
import { Container, Row, Col, Image } from "react-bootstrap"



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
        <Container>
          <Row>
              <Image src="https://wallpaperaccess.com/full/1302508.jpg" fluid />
              <Col lrg={4}>
              <h2> We host, you sell. Smooth Sailing. </h2>
            </Col>
          </Row>
        </Container>
<<<<<<< HEAD
=======
        
>>>>>>> e9d7dba (added bootstrap styling to nav and homepage)
        
        
      <div className="row">
          {productList.map((product, i) => {
            return(
              
              
              
              <ProductCard product={product} key={i} productList={productList} setProductList={setProductList} />
            
           
              
            )
          })}
        </div>
      </main> 
      </>
    );
}

export default Home;
