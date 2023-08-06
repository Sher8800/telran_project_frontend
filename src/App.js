import './App.css';
import HomeModule from './components/homeModule/homeModule';
import { Layout } from './components/layout/Layout';
import { Routes, Route } from 'react-router-dom'
import NotFound from './shared/notFound/NotFound';
import CategoriesModule from './components/categoriesModule/CategoriesModule';
import ProductsInCategories from './components/productsInCategoriesModule/productsInCategories/ProductsInCategories';
import All_products from './components/productsInCategoriesModule/all_products/All_products';
import Products_with_sale from './components/productsInCategoriesModule/products_with_sale/Products_with_sale';
import ProductsModule from './components/productsModule/productsModule';
import BasketModule from './components/basketModule/basketModule';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='' element={<HomeModule />} />
          <Route path='categories' element={<CategoriesModule />} />
          <Route path='allProducts' element={<All_products />} />
          <Route path='allSales' element={<Products_with_sale />} />
          <Route path='spade' element={<ProductsModule />} />
          <Route path='cart' element={<BasketModule />} />
          <Route path='sale' element={<Products_with_sale />} />
          <Route path='productsInCategories' element={<ProductsInCategories />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div >
  );
}

export default App;
