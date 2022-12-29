
import { getAllProducts } from "../../utils/api";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { Container, Row, Col, Image } from "react-bootstrap"
import '../../../src/index.css'



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
              <Image src="https://wallpaperaccess.com/full/1302508.jpg" fluid />
              <Col lrg={4}>
              <h2> We host, you sell. Smooth Sailing. </h2>
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