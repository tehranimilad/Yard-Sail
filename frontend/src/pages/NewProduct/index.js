import { createProduct } from "../../utils/api"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './newProduct.css'

const NewProduct = () => {
    

    
    const [formData, setFormData] = useState({ 
        title: '', 
        description: '',
        image: '',
        location: '',
        price: ''
    })
    
    function handleChange(event) {
        setFormData({...formData, [event.target.name]: event.target.value })
    }

    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/');
    }


    function handleSubmit(event) {
        event.preventDefault()
        createProduct(formData)
        navigateHome()
    
    }


    return(
        <div className="row" id="NewProdDiv">
        <div className="col-md-8">
        <Form>
            <Form.Group className="mb-3">
                <Form.Label className="newProductLabel" htmlFor="title">Title</Form.Label>
                <Form.Control 
                name="title" 
                type="text" 
                value={formData.title} 
                onChange={handleChange} 
                required />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className="newProductLabel" htmlFor="description">Description</Form.Label>
                <Form.Control 
                name="description" 
                type="text" 
                value={formData.description} 
                onChange={handleChange} 
                required 
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className="newProductLabel" htmlFor="image">Image</Form.Label>
                <Form.Control 
                name="image" 
                type="text" 
                value={formData.image} 
                onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className="newProductLabel" htmlFor="location">Location</Form.Label>
                <Form.Control 
                name="location" 
                type="text" 
                value={formData.location} 
                onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className="newProductLabel" htmlFor="price">Price</Form.Label>
                <Form.Control 
                name="price" 
                type="number" 
                value={formData.price} 
                onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className="newProductLabel" htmlFor="contact">Contact Info</Form.Label>
                <Form.Control 
                name="contact" 
                type="text" 
                value={formData.contact} 
                onChange={handleChange}
                placeholder="Email/Phone Number"/>
            </Form.Group>
            
            <Button id="Newprod-But" variant="primary" type="submit" onClick={handleSubmit}>Create</Button>
        </Form> 
       </div>
       </div>
    )
}
export default NewProduct