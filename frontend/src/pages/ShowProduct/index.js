import { useEffect, useState } from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import EditProduct from "../../components/EditProduct"
import { showOneProduct } from "../../utils/api"
import { deleteOneProduct } from "../../utils/api"
import { useNavigate } from "react-router-dom"
import {Card} from 'react-bootstrap'
const ShowProduct = ({currentUser}) => {
    const navigate = useNavigate()

    const [showProductData, setShowProductData] = useState({})
    const [formShow, setFormShow] = useState(false)
    const [canEdit, setCanEdit] = useState(true)
    const [userId, setUserID] = useState('')
    const [productUserId, setProductUserId] = useState('')
    
    

    const {id} = useParams()
    useEffect(() => {
        showOneProduct(id).then(data => {setShowProductData(data)})
    }, [])
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
        <div className="Card">
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={showProductData.image} />
        <Card.Body>
          <Card.Title>{showProductData.title}</Card.Title>
          <Card.Text>
          <p>{showProductData.description}</p>
          <p>{showProductData.location}</p>
          <p>${showProductData.price}</p>
          </Card.Text>
        </Card.Body>
      </Card>
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
