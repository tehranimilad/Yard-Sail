import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NewProduct (props) {
    const navigate = useNavigate()
    
    useEffect(() => {
    if (!props.isLoggedIn) {
        navigate('/')
        }
    }, [props.isLoggedIn])
    
    return(
        <h1>This is our New Product Page</h1>
    )
}

export default NewProduct