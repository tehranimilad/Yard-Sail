import { useEffect, useState } from "react"
import { userLogin } from "../../utils/api"

const LogIn = ({setShowProducts}) => {

    useEffect(() => {
        setShowProducts(false)
    }, [])

    const [formData, setFormData] = useState({ username: '', password: ''})

    function handleChange(event) {
        setFormData({...formData, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault()
        userLogin(formData)
            .then((data) => localStorage.token = data.token)
        // props.setLogInStatus
    }


    return(
        <>
        <h1>Log In</h1>
        
<form>
  <div className="form-group">
    <label htmlFor="username">Username</label>
    <input type="text" className="form-control" name="username" onChange={handleChange} value={formData.username}/>
  </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control" name="password" onChange={handleChange} value={formData.password}/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">I'm not a robot.</label>
  </div>
  <button className="btn btn-primary" onClick={handleSubmit}>Login</button>
</form>
        </>
    )
}
export default LogIn