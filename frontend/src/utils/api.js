import axios from 'axios'

const config = {
    headers: {
        'Authorization': localStorage.getItem('token')
    }
}


//USER AXIOS ROUTES 

// Log in to User Account
export async function userLogin(formData) {
    const { data } = await axios.post('http://localhost:8000/user/login', formData)
    return data
}

// Sign Up User Account 
export async function userSignUp(formData) {
    const { data } = await axios.post('http://localhost:8000/user/signup', formData)
    return data
}


// Show User / Posts (Account Page)

export async function getUserAccount(userId) {
    const { data } = await axios.get('http://localhost:8000/user/' + userId, config)
    return data
}

// Delete User and Associated Products

export async function deleteUserAccount(userId) {
    await axios.delete('http://localhost:8000/user/' + userId, config)
}

// PRODUCTS AXIOS ROUTES

// Create Product Route

export async function createProduct(formData) {
    const { data } = await axios.post('http://localhost:8000/product', formData, config)
    return data
}

// Get token data
export async function getToken() {
    const { data } = await axios.get('http://localhost:8000/user/token', config)
    return data
}

// Get all products

export async function getAllProducts() {
    const { data } = await axios.get('http://localhost:8000/product')
    return data
}

// Show One Product

export async function showOneProduct(itemId) {
    const { data } = await axios.get('http://localhost:8000/product/' + itemId)
    return data
}

// Update a Product

export async function updateOneProduct(itemId) {
    const { data } = await axios.put('http://localhost:8000/product/' + itemId, config)
    return data
}

// Delete a product

export async function deleteOneProduct(itemId) {
    await axios.delete('http://localhost:8000/product/' + itemId, config)
}

