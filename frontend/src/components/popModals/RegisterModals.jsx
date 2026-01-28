import { useState } from "react"
import { registerUser } from "../../api/api";

export default function RegisterModals({ handleRegisterClose }) {
    const [registerData, setRegisterData] = useState({ name: '', email: "", password: "" })

    const handleInputChange = e => {
        const { name, value } = e.target;
        setRegisterData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleFormSubmit = async e => {
        e.preventDefault()
        await registerUser(registerData)
        console.log(registerData)
        setRegisterData({ name: '', email: "", password: "" })
    }
    return (
        <div className="absolute z-10 inset-0 bg-gray-50 grid place-content-center ">
            <div className="max-w-xl min-w-xl bg-blue-300 p-5 shadow-2xl">
                <h2 className="text-2xl mb-4">Registration Form</h2>
                <div className="text-5xl absolute top-10 right-10 cursor-pointer" onClick={handleRegisterClose}>&times;</div>
                <form onSubmit={handleFormSubmit}>
                    <div className="border border-gray-200 p-3 mb-1 bg-white flex flex-col">
                        <label htmlFor="name" className="mb-2">Enter your Name</label>
                        <input type="text" name="name" id="name" className="border border-gray-200 p-3" placeholder="John" value={registerData.name} onChange={handleInputChange} />
                    </div>
                    <div className="border border-gray-200 p-3 mb-1 bg-white flex flex-col">
                        <label htmlFor="email" className="mb-2">Enter your email</label>
                        <input type="email" name="email" id="email" className="border border-gray-200 p-3" placeholder="abc@example.com" value={registerData.email} onChange={handleInputChange} />
                    </div>
                    <div className="border border-gray-200 p-3 mb-1 bg-white flex flex-col">
                        <label htmlFor="password" className="mb-2">Password</label>
                        <input type="password" name="password" id="password" className="border border-gray-200 p-3" placeholder="abc@example.com" value={registerData.password} onChange={handleInputChange} />
                    </div>
                    <div className="border border-gray-200 p-3 bg-white flex flex-col">
                        <button className="bg-green-600 text-white p-3 text-2xl cursor-pointer">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}