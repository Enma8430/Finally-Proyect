import "bootswatch/dist/lux/bootstrap.min.css"
import axios from 'axios'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Products from './pages/Products'
import Home from './pages/Home'
import Login from './pages/Login'
import Purchases from './pages/Purchases'
import NavBar from './components/NavBar'
import LoadingScrren from "./components/LoadingScrren"
import './styles.css'
import { useSelector } from "react-redux";
import ProtectedRoutes from "./components/ProtectedRoutes"

function App() {

  const isLoading = useSelector(state => state.isLoading)

  return (
    <HashRouter className='navBar' >
      <NavBar />
      {isLoading && <LoadingScrren />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/products/:id' element={<Products />} />
        <Route path='/login' element={<Login />} />
        


        <Route element={<ProtectedRoutes />}>
          <Route path="/purchases" element={<Purchases />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
