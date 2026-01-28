import { useContext } from "react"
import Todo from "../components/Todo/Todo"
import { AuthContext } from "../content/AuthContext"
import { useNavigate } from "react-router-dom"
export default function TodoPage() {

    const { logout } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleLogoutClick = () => {
        logout()
        navigate("/")
    }
    return <>
        <div className="flex justify-between">
            <h2 className="">Todo page</h2>
            <button onClick={handleLogoutClick} className="bg-green-700 p-3 px-5 text-white rounded-xl cursor-pointer ">Logout</button>
        </div>
        <Todo />
    </>
}