import { createProduct } from "../../utils/api"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
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
       
        <form>
            <div className="form-row">
            <div className="form-group col-md-6">
                <label htmlFor="title">Title</label>
                <input name="title" type="text" value={formData.title} onChange={handleChange} className="form-control" required />
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="description">Description</label>
                <input name="description" type="text" value={formData.description} onChange={handleChange} className="form-control" required />
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="image">Image</label>
                <input name="image" type="text" value={formData.image} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="location">Location</label>
                <input name="location" type="text" value={formData.location} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="price">Price</label>
                <input name="price" type="number" value={formData.price} onChange={handleChange} className="form-control"/>
            </div>
            <button className="btn btn-primary" onClick={handleSubmit}>Create</button>
            </div>
            
        </form> 
       
    )
}
export default NewProduct