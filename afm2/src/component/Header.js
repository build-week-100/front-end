import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <Nav tabs>
        <NavItem>
          <Link  to='/market'>Home</Link>
        </NavItem>
       <NavItem>
       <Link  to='/market/user/:id'>Dashboard</Link>
        </NavItem>
        
      </Nav>
            
        </div>
    )
}

export default Header
