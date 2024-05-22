import { useState } from 'react'
import './App.css'
import Home from './pages/HomePage'
import Products from './pages/ProductsPage'
import Navbar from './components/navbar/Navbar'
import FilterProduct from './pages/FilterProductsPage'

function App() {

  const [page, setPage] = useState('home');

  return (
    <>
      <Navbar setPage={setPage}/>
      <div>
        {page == 'home' && <Home />}
        {page == 'products' && <Products />}
        {page == 'filter' && <FilterProduct />}
      </div>
    </>
  )
}

export default App
