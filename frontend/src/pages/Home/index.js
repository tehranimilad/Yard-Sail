import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Home(props) {
    const navigate = useNavigate()

    useEffect(() => {
        if (props.isLoggedIn) {
            navigate('/feed')
        }
    }, [props.isLoggedIn])

    return (
      <div>
        <h1>Home</h1>
        <p>This is the Home page.</p>
        <button onClick={() => { props.setLogInStatus(true) }}>
            <h1>Log in</h1>
        </button>
      </div>
    );
}

export default Home;
