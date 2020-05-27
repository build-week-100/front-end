import React from 'react'
import { Nav, NavItem, NavLink,  } from 'reactstrap';
import {Link, useParams, Route} from 'react-router-dom'
import DashBoard from './DashBoard';

const Header = () => {
    const { id } = useParams();

    return (
        <div>
            <Nav tabs>
        <NavItem>
          <Link  to= '/dashboard'> DashBoard</Link>
        </NavItem>
       <NavItem>
           <div component ={DashBoard}/>
       {/* <Route path = '/market/' component ={DashBoard} /> */}
        </NavItem>
        
      </Nav>
            
        </div>
    )
}

export default Header
