import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Cart from './components/Cart'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';import Admin from './components/Admin';
import MenuManagement from './components/MenuManagement';
import OrderManagement from './components/OrderManagement';
import Feedback from './components/Feedback';
import AddItem from './components/AddItem';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/admin' element={<Admin></Admin>}></Route>
        <Route path='/menu' element={<MenuManagement></MenuManagement>}></Route>
        <Route path='/order' element={<OrderManagement></OrderManagement>}></Route>
        <Route path='/feed' element={<Feedback></Feedback>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/add' element={<AddItem />}></Route>
      </Routes>
    </div>
  );
}

export default App;
