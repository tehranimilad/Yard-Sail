
import { getAllProducts } from "../../utils/api";


import { useEffect, useState } from "react";

import ProductCard from "../../components/ProductCard";
import '../../index.css'
import { Container, Row, Col, Image } from "react-bootstrap"

import Carousel from 'react-bootstrap/Carousel';
import './home.css'



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
    <div className="col-md-8">

    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/d1Rh0ZP7/ab.jpg"
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/XJBZ61xg/ny.jpg"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/YqKrhCqk/sale.jpg"
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>



        {/* <Container>
          <Carousel>
          {productList.map((product, i) => {
            return(
              
              <Carousel.Item key={i}>
                <img className="pics" src={product.image} alt={product.title}
                />
              </Carousel.Item>
            
            );
          }
          )
        }
       
        </Carousel>
        </Container> */}
        </div>
        </div>

        <div class="row">
   
        <div class="card card-body h-100 py-2">    
        <div class="col-sm-4 align-items-stretch d-flex mx-auto justify-content-center card-deck card-block px-3 mt-3">



          {productList.map((product, i) => {
            return(
              
              <ProductCard product={product} key={i} productList={productList} setProductList={setProductList} />
              
              
            );
          }
          )
        }
       </div>
      </div>
</div>
  
      </main>
    );
}

export default Home;
