import React, {useState} from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {Link, useParams, Route} from 'react-router-dom'
import DashBoard from './DashBoard';

const Header = () => {
    const { id } = useParams();
    const [collapsed, setCollapsed] = useState(true);
const toggleNavbar = () => setCollapsed(!collapsed);
    let styles ={color: 'white',
  textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
  textDecoration:'none',
  backgroundColor: 'rgba(167, 99, 47)',
  fontSize: '3rem'
}
let styles2 ={
  
}

    return (
        <div >
            

        <Navbar style={styles} className="navbar" >
        
        <NavbarBrand style={styles} href="/protected" className="mr-auto">Market List</NavbarBrand>
        
            <Nav navbar>
              <NavItem  className='Nav-items'>
                <NavLink style={styles}  href="https://wonderful-chandrasekhar-b134e0.netlify.app/index.html">Home</NavLink>
                <NavLink style={styles} href="https://wonderful-chandrasekhar-b134e0.netlify.app/about.html">About Us</NavLink>
                <NavLink style={styles} href='/dashboard'>My Store</NavLink>
                <NavLink style={styles} href='/'>Login</NavLink>
              </NavItem>
            </Nav>

         
    </Navbar>



        </div>
    )
}

export default Header
