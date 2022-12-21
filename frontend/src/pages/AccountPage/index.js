import { useEffect, useState } from "react"
import { getUserAccount } from "../../utils/api"

const AccountPage = () => {

    const [accountData, setAccountData] = useState({})
    const token = localStorage.token
    console.log(token)
    
    
   
    useEffect(() => {
        getUserAccount()
        .then(data => {
            setAccountData(data)
        })
    }, [])
    return(
        <h1>This is our Account Page</h1>
    )
}
export default AccountPage