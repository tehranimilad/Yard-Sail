import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { showOneProduct } from "../../utils/api"
import { deleteOneProduct } from "../../utils/api"
import { useNavigate } from "react-router-dom"

const ShowProduct = () => {
    const navigate = useNavigate()

    const [showProductData, setShowProductData] = useState({})
   
    
    

    const {id} = useParams()
    useEffect(() => {
        showOneProduct(id).then(data => {setShowProductData(data)})
    }, [])
    // const navigate = useNavigate()
  

    return(
        <>
        <div>
        <img src={showProductData.image} />
        <h1>{showProductData.title}</h1>
        <p>{showProductData.description}</p>
        </div>
       
        </>
    )
}
export default ShowProduct