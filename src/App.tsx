import { Route, Routes } from "react-router-dom"
import Completed from "./pages/Completed"
import Home from "./pages/Home"
import Register from "./pages/Register"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/completed" element={<Completed />} />
    </Routes>
  )
}

export default App
