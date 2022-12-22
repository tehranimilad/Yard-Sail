import { useState } from 'react';
import { userSignUp } from '../../utils/api';
import { useNavigate } from "react-router-dom"

const SignUp = (props) => {
    const [formData, setFormData] = useState({ username: '', password: ''})
    const navigate = useNavigate()

    function handleChange(event) {
        setFormData({...formData, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault()
        userSignUp(formData)
            .then((data) => localStorage.token = data.token)
            props.setIsLoggedIn(true)
            navigate('/')
    }

    return(
        <>
        <h1>Sign Up</h1>
        <form>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" className="form-control" value={formData.username} onChange={handleChange} required/>
                </div>
                 <div className="form-group col-md-6">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" className="form-control" value={formData.password} onChange={handleChange}/>
                </div>
            </div>
            <div className="form-group">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                    <label className="form-check-label" htmlFor="gridCheck">I'm not a robot.</label>
                </div>
            </div>
            <button className="btn btn-primary" onClick={handleSubmit}>Sign Up</button>
        </form>
</>
    )}
export default SignUp