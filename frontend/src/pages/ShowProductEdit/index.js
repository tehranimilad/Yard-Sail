import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { deleteOneProduct, updateOneProduct, showOneProduct } from "../../utils/api"
import { useNavigate } from "react-router-dom"
import { Form, Button, Card } from 'react-bootstrap';
import './EditProduct.css'

const ShowProductEdit = () => {
    const navigate = useNavigate()

    const [showProductData, setShowProductData] = useState({})
    const [editedState, setEditedState] = useState({
        title: '', 
        description: '',
        image: '',
        location: '',
        price: ''
    })
    
    
    const {id} = useParams()
    useEffect(() => {
        showOneProduct(id).then(data => {
            setShowProductData(data)
            setEditedState(data)
        })
    }, [id])
    
    
   

    const handleChange = (event) => {
        setEditedState({ ...editedState, [event.target.id]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        updateOneProduct(showProductData._id, editedState).then(data => {
            setShowProductData(data)
            setEditedState(data)
        })
        
    }
    

    // Deletes then navigates to home page
    const deleteProduct = () => {
        const itemId = showProductData._id
        deleteOneProduct(itemId).then(alert("You deleted this product"))
        navigate('/')
    }

   
    return(
        <>
       <div className="row">
            <div className="col-md-6 mx-auto">
                <Card style={{width: "80%"}} className="mx-auto" >
                <Card.Img src={showProductData.image} variant="top" className="mx-auto" style={{height:"90%", width:"70%"}}/>
                <Card.Body>
                <Card.Title>{showProductData.title}</Card.Title>
                <Card.Text>{showProductData.description}</Card.Text>
                <Card.Text>Location: {showProductData.location}</Card.Text>
                <Card.Text>Price: $ {showProductData.price}</Card.Text>
                <Button variant="danger" id="Deleteprod-But" onClick={deleteProduct}>Delete</Button>
                </Card.Body>
                </Card>
            </div>

        
            <div className="col-md-6" id="EditProdDiv">
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label className="editProductLabel">Title</Form.Label>
                        <Form.Control
                            name="title"
                            type="text"
                            value={editedState.title} 
                            onChange={handleChange} 
                            required />
                    </Form.Group> 
        
                    <Form.Group className="mb-3">
                        <Form.Label className="editProductLabel">Description</Form.Label>
                        <Form.Control
                            name="description"
                            type="text"
                            value={editedState.description} 
                            onChange={handleChange} 
                            required />
                    </Form.Group> 
        
                    <Form.Group className="mb-3">
                        <Form.Label className="editProductLabel">Image</Form.Label>
                        <Form.Control
                            name="image"
                            type="text"
                            value={editedState.image} 
                            onChange={handleChange} />
                    </Form.Group> 
        
                    <Form.Group className="mb-3">
                        <Form.Label className="editProductLabel">Location</Form.Label>
                        <Form.Control
                            name="location"
                            type="text"
                            value={editedState.location} 
                            onChange={handleChange} />
                    </Form.Group> 
        
                    <Form.Group className="mb-3">
                        <Form.Label className="editProductLabel">Price</Form.Label>
                        <Form.Control
                            name="price"
                            type="number"
                            value={editedState.price} 
                            onChange={handleChange} />
                    </Form.Group> 
                    <Button id="Editprod-But" variant="primary" type="submit" onClick={handleSubmit}>
                    Submit Edit
                    </Button>
                </Form>
            </div>
            </div>
        </>
    )
}
export default ShowProductEdit