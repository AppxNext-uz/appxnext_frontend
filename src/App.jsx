import Navbar from "./components/navbar/navbar"
import Footer from "./components/footer/footer"
import { Route, Routes } from "react-router-dom"
import Main from "./pages/main"
import Portfolio from "./pages/portfolio"

const App = () => {
    return (
        <div className="bg-[#161616] w-full app min-h-screen">

            <Navbar/>

            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/portfolio" element={<Portfolio/>} />
            </Routes>

            <Footer/>

        </div>
    )
}

export default App
