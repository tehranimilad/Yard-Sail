import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import EditProduct from "../../components/EditProduct"
import { showOneProduct } from "../../utils/api"
import { deleteOneProduct } from "../../utils/api"
import { useNavigate } from "react-router-dom"

const ShowProduct = ({currentUser}) => {
    const navigate = useNavigate()

    const [showProductData, setShowProductData] = useState({})
    const [formShow, setFormShow] = useState(false)
    const [canEdit, setCanEdit] = useState(false)
    const [userId, setUserID] = useState('')
    
   
    

    const {id} = useParams()
   

    useEffect(() => {
        showOneProduct(id).then(data => {setShowProductData(data)})
        if (currentUser.user._id) {
            setUserID(currentUser.user._id)
        }
    },[])
    
   

    if (userId === showProductData.user._id) {
        setCanEdit(true)
    }

    
  
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
        {canEdit ? 
        <div>
        <button onClick={toggleEditForm}>Edit</button>
        <button onClick={deleteProduct}>Delete</button> 
        </div>
        : null}
        {formShow ? 
        <EditProduct showProductData={showProductData}/>
        : null}
        </>
    )
}
export default ShowProduct
