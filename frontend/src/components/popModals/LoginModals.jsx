import { useContext, useState } from "react"
import { loginUser } from "../../api/api";
import { AuthContext } from "../../content/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginModals({ handleLoginClose }) {
    const [loginData, setLoginData] = useState({ email: "", password: "" })
    const { login } = useContext(AuthContext);

    const navigate = useNavigate()
    const handleInputChange = e => {
        const { name, value } = e.target;
        setLoginData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleFormSubmit = async e => {
        e.preventDefault()
        try {
            const data = await loginUser(loginData)
            if (data.token) {

                login(data.token);
                console.log(login);

                handleLoginClose()
                setLoginData({ email: "", password: "" })
                navigate("/todo")
            }
            else {
                alert("Invalid Credentials")
                setLoginData({ email: "", password: "" })
            }


        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div className="absolute z-10 inset-0 bg-gray-50 grid place-content-center ">
            <div className="max-w-xl min-w-xl bg-blue-300 p-5 shadow-2xl">
                <h2 className="text-2xl mb-4">Login Form</h2>
                <div className="text-5xl absolute top-10 right-10 cursor-pointer" onClick={handleLoginClose}>&times;</div>
                <form onSubmit={handleFormSubmit}>
                    <div className="border border-gray-200 p-3 mb-1 bg-white flex flex-col">
                        <label htmlFor="email" className="mb-2">Enter your Email</label>
                        <input type="email" name="email" id="email" className="border border-gray-200 p-3" placeholder="abc@example.com" value={loginData.email} onChange={handleInputChange} />
                    </div>
                    <div className="border border-gray-200 p-3 mb-1 bg-white flex flex-col">
                        <label htmlFor="password" className="mb-2">Password</label>
                        <input type="password" name="password" id="password" className="border border-gray-200 p-3" placeholder="abc@example.com" value={loginData.password} onChange={handleInputChange} />
                    </div>
                    <div className="border border-gray-200 p-3 bg-white flex flex-col">
                        <button className="bg-green-600 text-white p-3 text-2xl cursor-pointer">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}