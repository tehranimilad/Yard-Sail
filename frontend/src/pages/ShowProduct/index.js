import { useState } from "react"
import { useParams } from "react-router-dom"
import EditProduct from "../../components/EditProduct"
import { showOneProduct } from "../../utils/api"
import { deleteOneProduct } from "../../utils/api"
import { useNavigate } from "react-router-dom"

const ShowProduct = () => {

    const [showProductData, setShowProductData] = useState({})
    const [formShow, setFormShow] = useState(false)
    

    const {id} = useParams()
    showOneProduct(id).then(data => {setShowProductData(data)})
    
    const navigate = useNavigate()
  
    const toggleEditForm = () => {
        setFormShow(!formShow)
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
        <h1>{showProductData.title}</h1>
        <p>{showProductData.description}</p>
        </div>
        <button onClick={toggleEditForm}>Edit</button>
        <button onClick={deleteProduct}>Delete</button>
        {formShow ? 
        <EditProduct showProductData={showProductData}/>
        : null}
        </>
    )
}
export default ShowProduct
