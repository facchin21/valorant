import { Navbar } from "./components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Agents } from "./pages/Agents"
import { Footer } from "./components/Footer"
import { Maps } from "./pages/Maps"


function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/agentes" element={<Agents/>}/>
        <Route path="/mapas" element={<Maps/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  )
}

export default App
