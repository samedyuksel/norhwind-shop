import React, {useState} from 'react';
import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarText,
    NavbarToggler,
    NavItem,
    NavLink
} from 'reactstrap';
import CartSummary from "../cart/CartSummary";
import {Link} from "react-router-dom";

const Navi = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand><Link to="/">Northwind Shop</Link></NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink><Link to="/saveproduct">Add Product</Link></NavLink>
                        </NavItem>
                        <CartSummary/>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navi;