import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { AuthProvider } from "./content/AuthContext"
import ProtectedRoute from "./components/ProtectedRoute"
 
import TodoPage from "./pages/Todo"

function App() {


  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/todo" element={<ProtectedRoute>
              <TodoPage />
            </ProtectedRoute>} />
          </Routes>


        </BrowserRouter>


      </AuthProvider>


    </>
  )
}

export default App
