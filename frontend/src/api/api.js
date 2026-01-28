
import axios from "axios"

const API = axios.create({
    baseURL: 'http://localhost:5000/api/v1'
})

API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) req.headers.Authorization = `Bearer ${token}`
    return req;
})


const baseURL = 'http://localhost:5000/api/v1'


// //  Register User

export const registerUser = async (input) => {
    const response = await fetch(`${baseURL}/users/register`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(input)
    })
    const data = await response.json()
    console.log(data.token)
    return data;

}


// //Login User

export const loginUser = async (input) => {
    const response = await fetch(`${baseURL}/users/login`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(input)
    })
    const data = await response.json()
    console.log(data)
    return data;
}