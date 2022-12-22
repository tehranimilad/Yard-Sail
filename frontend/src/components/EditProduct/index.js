import { useEffect, useState } from "react";
import { updateOneProduct } from "../../utils/api";
import { Form, Button } from 'react-bootstrap';

function EditProduct(props) {

    const [productState, setProductState] = useState({})
    const [editedState, setEditedState] = useState({})

    const handleChange = (event) => {
        setEditedState({ ...editedState, [event.target.id]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        updateOneProduct().then(data => {
            
            setProductState(data)
        })
        
    }


    return(
            <Form className="edit-form" onSubmit={handleSubmit}>
                <Form.Group className="m-0">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        id="title"
                        className="editForm" 
                        type="text"
                        placeholder="Enter Title"
                        value={editedState.title} 
                        onChange={handleChange} />
                </Form.Group> 
    
                <Form.Group className="m-0">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        id="description"
                        className="editForm" 
                        type="text"
                        placeholder="Enter Description"
                        value={editedState.description} 
                        onChange={handleChange} />
                </Form.Group> 
    
                <Form.Group className="m-0">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        id="image"
                        className="editForm" 
                        type="text"
                        placeholder="Enter Image Link/URL"
                        value={editedState.image} 
                        onChange={handleChange} />
                </Form.Group> 
    
                <Form.Group className="m-0">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                        id="location"
                        className="editForm" 
                        type="text"
                        placeholder="Enter Product Location"
                        value={editedState.location} 
                        onChange={handleChange} />
                </Form.Group> 
    
                <Form.Group className="m-0">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        id="price"
                        className="editForm" 
                        type="number"
                        placeholder="Enter Price"
                        value={editedState.price} 
                        onChange={handleChange} />
                </Form.Group> 
                <Button 
                    className="btnFormSend"
                    type="submit"
                >Submit Edit
                </Button>
            </Form>
        )
    }
export default EditProduct