import './App.css';
import NavBar from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Components/Pages/Shop';
import ShopCategory from './Components/Pages/ShopCategory';
import Product from './Components/Pages/Product';
import Cart from './Components/Pages/Cart';
import Login from './Components/Pages/Login';
import men_banner from './Components/Assets/banner_mens.png';
import woman_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';
import NoMatch from './Components/NoMatch';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Shop />}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>} />
        <Route path='/woman' element={<ShopCategory banner={woman_banner} category="woman"/>} />
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kids"/>} />
        <Route path='/product' element={<Product/>}>
          <Route path='/product/:id' element={<Product/>}/>   
        </Route>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='*' element={<NoMatch />}/>

        
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
