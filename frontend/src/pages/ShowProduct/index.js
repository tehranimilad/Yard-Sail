import { useState } from "react"
import { useParams } from "react-router-dom"
import { showOneProduct } from "../../utils/api"
import Card from 'react-bootstrap/Card';



const ShowProduct = () => {

    const [showProductData, setShowProductData] = useState({})

    const {id} = useParams()
    showOneProduct(id).then(data => {setShowProductData(data)})
    
  

    return(
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={showProductData.image} />
        <Card.Body>
          <Card.Title>{showProductData.title}</Card.Title>
          <Card.Text>
          <p>{showProductData.description}</p>
          <p>{showProductData.location}</p>
          <p>{showProductData.price}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    );
}
export default ShowProduct
