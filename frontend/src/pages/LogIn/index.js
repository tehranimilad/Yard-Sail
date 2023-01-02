import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { userLogin } from "../../utils/api"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Image } from "react-bootstrap"
import "./login-signup.css"


const LogIn = (props) => {
  const navigate = useNavigate()
    // Log in form values are empty initially 
    const [formData, setFormData] = useState({ username: '', password: ''})
    // Set the form data state to the key of your event target (username or password), and the value of what is typed
    function handleChange(event) {
        setFormData({...formData, [event.target.name]: event.target.value })
    }

    // 
    function handleSubmit(event) {
      // Prevent page from reloading
        event.preventDefault()
        // Deconstructing data to set the local storage token equal to the token we created in our login route
        userLogin(formData)
            .then((data) => localStorage.token = data.token)
        // Sets our loggedin state (passed down in props to true)
        props.setIsLoggedIn(true)
        navigate('/')
    }


    return(
        <>
        <div className="signup-image" />
        <div className="Login-Signup-Div">    
        <Image src="https://i.postimg.cc/wvXyPfjH/sailboat.png" width="15%" fluid />  
        <h1>Log In</h1>
<Form>
  <Form.Group className="mb-4" controlId="formBasicUsername" >
    <Form.Label>Username</Form.Label>
    <Form.Control 
    input type="text" 
    className="form-control" 
    name="username" 
    onChange={handleChange} 
    value={formData.username}
    placeholder="Enter Username"/>
  </Form.Group>

  <Form.Group className="mb-4" controlId="formBasicPassword" >
    <Form.Label>Password</Form.Label>
    <Form.Control 
    input type="password" 
    className="form-control" 
    name="password" 
    onChange={handleChange} 
    value={formData.password}
    placeholder="Enter Password"/>
      <Form.Text className="text-muted"> 
    We'll never share your information with anyone.
    </Form.Text>
  </Form.Group>
  <Button id="Login-Signup-But" variant="primary" type="submit" onClick={handleSubmit}>
    Login
  </Button>
  <Form.Group className="mb-4">
    <br />
             or
  </Form.Group>
  
  <Form.Group className="mb-4">
  <Button href="/signup" id="Signup-But">Sign Up</Button>
  </Form.Group>

</Form>
</div>

        </>
    )
}
export default LogIn