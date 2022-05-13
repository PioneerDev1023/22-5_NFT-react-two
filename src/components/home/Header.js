import React from "react";
import {
    Container,
    Image,
    Nav,
    Navbar,
    Dropdown,
    Button,
    Form} from "react-bootstrap";
// import MenuItem from './MenuItem';
import Home_img from '../../assets/image/icon/home.png';
import Map_img from '../../assets/image/icon/map.png';
import Product_img from '../../assets/image/icon/product.png';
import Market_img from '../../assets/image/icon/market.png';
import Blog_img from '../../assets/image/icon/blog.png';
import Swap_img from '../../assets/image/icon/swap.png';
import Bag_img from '../../assets/image/icon/bag.png';
import World_img from '../../assets/image/icon/world.png';

function Header() {
    const MenuItemdata = [
        {iconimg: Home_img, menuname:"HOME", href:""},
        {iconimg: Map_img, menuname:"MAP", href:""},
        {iconimg: Product_img, menuname:"PRODUCT", href:""},
        {iconimg: Market_img, menuname:"MARKETPLACE", href:""},
        {iconimg: Blog_img, menuname:"BLOG", href:""},
        {iconimg: Swap_img, menuname:"SWAP", href:""},
    ];
  return (
    <div className="Header">
         <Navbar collapseOnSelect expand="sm" className="menu">
             <Container className="d-flex flex-wrap justify-content-between menubar">
                 <Navbar.Toggle className="navbar-icon" aria-controls="responsive-navbar-nav"/>
                 <Navbar.Collapse className="col-lg-8 col-md-12" id="responsive-navbar-nav">
                     <Nav>
                        {MenuItemdata.map((item, index) => (
                            <Nav.Link to={item.href} className="mt-2 mb-2 d-flex flex-row align-items-center"><Image className="menu-img" src={item.iconimg}/><span className="px-2 menuname">{item.menuname}</span></Nav.Link>
                        ))}
                     </Nav>
                 </Navbar.Collapse>
                 <Form className="col-lg-4 col-md-12 d-flex align-items-center menu-option">
                    <Button className="sign-btn px-3">SIGN IN</Button>
                    <Image className="bag-img" src={Bag_img} />
                    <Dropdown className="px-3">
                        <Image className="world-img" src={World_img} />
                        <Dropdown.Toggle className="lang-btn">
                            EN
                        </Dropdown.Toggle>
                        {/* <Dropdown.Menu>
                            <Dropdown.Item className="menu-dropitem" href="#/action-1">KR</Dropdown.Item>
                            <Dropdown.Item className="menu-dropitem" href="#/action-2">CN</Dropdown.Item>
                            <Dropdown.Item className="menu-dropitem" href="#/action-3">JP</Dropdown.Item>
                            <Dropdown.Item className="menu-dropitem" href="#/action-3">TH</Dropdown.Item>
                        </Dropdown.Menu> */}
                    </Dropdown>
                </Form>
             </Container>
         </Navbar>         
    </div>
  );
}

export default Header;