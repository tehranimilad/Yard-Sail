import { useState } from "react"
import { useParams } from "react-router-dom"
import { showOneProduct } from "../../utils/api"

const ShowProduct = () => {

    const [showProductData, setShowProductData] = useState({})

    const {id} = useParams()
    showOneProduct(id).then(data => {setShowProductData(data)})
    
  

    return(
        <>
        <div>
        <h1>{showProductData.title}</h1>
        <p>{showProductData.description}</p>
        </div>

        </>
    )
}
export default ShowProduct
