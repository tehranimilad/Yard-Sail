import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import EditProduct from "../../components/EditProduct"
import { deleteOneProduct, updateOneProduct, showOneProduct } from "../../utils/api"
import { useNavigate } from "react-router-dom"
import { Form, Button } from 'react-bootstrap';

const ShowProductEdit = () => {
    const navigate = useNavigate()

    const [showProductData, setShowProductData] = useState({title: '', description: '', image: '', location: '', price: ''})
    const [formShow, setFormShow] = useState(false)
    
    
    const {id} = useParams()
    useEffect(() => {
        showOneProduct(id).then(data => {setShowProductData(data)})
    }, [id])
    
    
    const [editedState, setEditedState] = useState(showProductData)

    const handleChange = (event) => {
        setEditedState({ ...editedState, [event.target.id]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        updateOneProduct(showProductData._id, editedState).then(data => {
            setShowProductData(data)
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
        <div>
        <img src={showProductData.image} />
        <h1>{showProductData.title}</h1>
        <p>{showProductData.description}</p>
        


        </div>
       
        <div>

        <button onClick={deleteProduct}>Delete</button> 
        </div>
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

        </>
    )
}
export default ShowProductEdit

