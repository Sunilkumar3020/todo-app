import { useState } from "react"
import LoginModals from "../components/popModals/LoginModals"
import RegisterModals from "../components/popModals/RegisterModals"
 

export default function Home() {

    const [loginModalOpen, setLoginModalOpen] = useState(false)
    const [registerModalOpen, setRegisterModalOpen] = useState(false)
    const handleLoginClick = e => {

        setLoginModalOpen(prev => !prev)
    }
    const handleRegisterClick = e => {
        setRegisterModalOpen(prev => !prev)
    }
    const handleLoginClose = e => {
        setLoginModalOpen(false)
    }
    const handleRegisterClose = e => {
        setRegisterModalOpen(false)
    }
    return (
        <>
            <div className="flex justify-end">
                <button className="bg-green-700 p-3 px-5 text-white rounded-xl cursor-pointer mr-1 " onClick={handleLoginClick}>Login</button>
                <button className="bg-green-700 p-3 px-5 text-white rounded-xl cursor-pointer " onClick={handleRegisterClick} >Register</button>
            </div>

            {loginModalOpen && <LoginModals handleLoginClose={handleLoginClose} />}
            {registerModalOpen && <RegisterModals handleRegisterClose={handleRegisterClose} />}
 
        </>

    )
}