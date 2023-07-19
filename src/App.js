import './App.css';
import HomeModule from './components/homeModule/homeModule';
import { Layout } from './components/layout/Layout';
import { Routes, Route } from 'react-router-dom'
import NotFound from './shared/notFound/NotFound';
import CategoriesModule from './components/categoriesModule/CategoriesModule';


function App() {
  return (
    <div className="App">
      {/* <CategoriesModule /> */}
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='' element={<HomeModule />} />
          <Route path='categories' element={<CategoriesModule />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div >
  );
}

export default App;
