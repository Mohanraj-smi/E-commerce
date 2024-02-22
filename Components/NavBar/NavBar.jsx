import React, { useContext} from 'react'
import logo from '../Assets/logo.png';
import cart from '../Assets/carted.svg';
import './NavBar.css';
import heart from '../Assets/heart.svg';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import { Navbar, NavbarBrand,Nav,Button } from 'react-bootstrap';


const NavBar=()=> {
    const {getTotalCartItems} =useContext(ShopContext);

  return (
    <Navbar expand="lg"  className='navbar' >
      <NavbarBrand className='nav-logo'>
    <img src={logo} alt='shop-logo' />
    <p>Shopsy</p>
    </NavbarBrand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className='side' />
    <Navbar.Collapse id="basic-nav">
        <Nav className="navlet" style={{fontSize:"1.2rem"}}>
          <Nav.Link as={Link} to='/' className='nav-link'  >Shop</Nav.Link>
          <Nav.Link as={Link} to='/mens' className='nav-link' >Men</Nav.Link>
          <Nav.Link as={Link} to='/woman' className='nav-link'>Woman</Nav.Link>
          <Nav.Link as={Link} to='/kids' className='nav-link'>Kids</Nav.Link>
        </Nav>
        <Nav className='butlet'>
          <Link to='/login'><Button variant="dark" className='loginbtn'>Login</Button></Link>
          <img src={heart} alt='heart-ion' className='icon' id='heartid' />
          <Link to='/cart'><img src={cart} alt='cart-icon' className='icon' id='cartid'/></Link>
          <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </Nav>
      </Navbar.Collapse>

    
    
    </Navbar>
  )
    
}
export default NavBar;