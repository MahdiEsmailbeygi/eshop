import React, { useState, useContext } from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Link } from 'react-router-dom';
import { StateContext } from './StateProvider';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

 function Header() {
   const { basketProducts } = useContext(StateContext);
   const [searchInput, setSearchInput] = useState("");
   const { products } = useContext(StateContext);
   const handelClick = () => {
     result(false)
   }
   const handleChange = (e) => {
     // console.log("value before set", e.target.value)
     e.preventDefault();
     setSearchInput(e.target.value)
   };

  // console.log("searchInput ", searchInput);

   let result = []
   if (searchInput.length > 0) {
     result = products.filter((item) => {
       return item.title.toLowerCase().match(searchInput)
     });
   }

  //  console.log("result",result);

   return (
     <div className="fixed-top row mx-auto ">
       <Navbar bg="black" variant='dark' expand="lg">
         <Container fluid>
           <div className='header'  ><Link to="/" style={{ textDecoration: "none" }}>
             <div className="header--logo">
               <StorefrontIcon className='header--logoImage' fontSize='large' />
               <h2 className='header--logoTitel' >eShop</h2>
             </div>
           </Link></div>
           <Nav className="me-auto my-2 my-lg-0 " >
             <Link to="/" className='nav-link text-white fs-5 fw-bold me-'>Home</Link>
           </Nav>
           <Navbar.Toggle aria-controls="navbarScroll" />
           <Navbar.Collapse id="navbarScroll">
             <Form className="col-10 d-flex">
               <Form.Control
                 type="search"
                 placeholder="Search"
                 className="me-2"
                 aria-label="Search"
                 onChange={handleChange}
                 value={searchInput}
               />
               <Button variant="outline-warning">Search</Button>
               <div id='myTable'>
                 {result.map((product, id) => (
                   <div key={id}>
                     <Link to={`/products/${product.id}`} onClick={handelClick} >
                       <button style={{ display: 'block', position: 'absolute', zIndex: '2000', marginTop: '3rem', backgroundColor: '#ff9900', color: 'black', left: '289.703px', width: '744px' }} type="button" className="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover">
                         {product.title}</button></Link>
                   </div>
                 ))}
               </div>
             </Form>
             <Nav className="me-auto my-2 my-lg-0 " >
               <Link className="nav-link text-white" to="/login" style={{ textDecoration: "none" }}>
                 <div className="nav--item">
                   <span className="nav--itemLineOne">Hello Guest</span>
                   <span className="nav--itemLineTwo">Sign In</span></div></Link>
               <Link className="nav-link text-white" to="/checkout" style={{ textDecoration: "none" }} >
                 <div className="nav--itemBasket "> <ShoppingBasketIcon />
                   <span className="nave--itemLineTwo av--basketCount">{basketProducts.length}</span></div>
               </Link>
             </Nav>
           </Navbar.Collapse>
         </Container>
       </Navbar>
     </div >
   )
 }



// function Header() {
//   const { basketProducts, products } = useContext(StateContext);
//   const [searchInput, setSearchInput] = useState("");

//   const handleSearch = (e) => {
//     e.preventDefault();
//     setSearchInput(e.target.value);
//   };

//   const searchResults = products.filter((item) => {
//     return item.title.toLowerCase().match(searchInput);
//   });

//   return (
//     <div className="row mx-auto ">
//       <Navbar bg="black" variant='dark' expand="lg">
//         <Container fluid>
//           <div className='header'  >
//             <Link to="/" style={{ textDecoration: "none" }}>
//               <div className="header--logo">
//                 <StorefrontIcon className='header--logoImage' fontSize='large' />
//                 <h2 className='header--logoTitel' >eShop</h2>
//               </div>
//             </Link>
//           </div>
//           <Nav className="me-auto my-2 my-lg-0 " >
//             <Link to="/" className='nav-link text-white fs-5 fw-bold me-'>Home</Link>
//           </Nav>
//           <Navbar.Toggle aria-controls="navbarScroll" />
//           <Navbar.Collapse id="navbarScroll">
//             <Form className="col-10 d-flex">
//               <Form.Control
//                 type="search"
//                 placeholder="Search"
//                 className="me-2"
//                 aria-label="Search"
//                 onChange={handleSearch}
//                 value={searchInput}
//               />
//               <Button variant="outline-warning">Search</Button>
//               <div id='myTable'>
//                 {searchResults.map((product, id) => (
//                   <div key={id}>
//                     <Link to={`/products/${product.id}`}>
//                       <button style={{ display: 'block', position: 'absolute', zIndex: '2000', marginTop: '3rem', backgroundColor: '#ff9900', color: 'black', left: '289.703px', width: '744px' }} type="button" className="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover">
//                         {product.title}
//                       </button>
//                     </Link>
//                   </div>
//                 ))}
//               </div>
//             </Form>
//             <Nav className="me-auto my-2 my-lg-0 " >
//               <Link className="nav-link text-white" to="/login" style={{ textDecoration: "none" }}>
//                 <div className="nav--item">
//                   <span className="nav--itemLineOne">Hello Guest</span>
//                   <span className="nav--itemLineTwo">Sign In</span>
//                 </div>
//               </Link>
//               <Link className="nav-link text-white" to="/checkout" style={{ textDecoration: "none" }} >
//                 <div className="nav--itemBasket ">
//                   <ShoppingBasketIcon />
//                   <span className="nave--itemLineTwo av--basketCount">{basketProducts.length}</span>
//                 </div>
//               </Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div >
//   );
// }

export default Header;