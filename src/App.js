import './App.css';
import HomeModule from './components/homeModule/mainModule/HomeModule';
import { Layout } from './components/layout/Layout';
import { Routes, Route } from 'react-router-dom'
import NotFound from './components/UI/notFound/NotFound';
import CategoriesModule from './components/categoriesModule/CategoriesModule';
import ProductsInCategories from './components/productsModule/productsInCategories/ProductsInCategories';
import AllProducts from './components/productsModule/allProducts/AllProducts';
import ProductsWithSale from './components/productsModule/productsWithSale/ProductsWithSale';
import ProductsModule from './components/productModule/ProductModule';
import BasketModule from './components/basketModule/BasketModule';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='' element={<HomeModule />} />
          <Route path='categories' element={<CategoriesModule />} />
          <Route path='allProducts' element={<AllProducts />} />
          <Route path='allSales' element={<ProductsWithSale />} />
          <Route path='spade' element={<ProductsModule />} />
          <Route path='cart' element={<BasketModule />} />
          <Route path='sale' element={<ProductsWithSale />} />
          <Route path='productsInCategories' element={<ProductsInCategories />} />
          <Route path='product' element={<ProductsModule />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div >
  );
}

export default App;
