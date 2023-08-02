import React, { useContext } from 'react';
import { StateContext } from './StateProvider';
import { Link } from "react-router-dom";
import {Button,Card} from 'react-bootstrap';

function Product({ id, title, price, rating, image }) {
    const { addToBasket } = useContext(StateContext)
    //distructuring object js
    return (
        <div className='py-3 col-lg-3 col-md-6 col-12 '>
             <Card className='mb-4 d-flex justify-content-end shadow ' style={{ width: '100%' , height:"100%"}}>
            <Link to={`/products/${id}`} ><Card.Img variant="top" className='nav-link img-fluid ' src={image} /></Link> 
                <Card.Body>
                    <Card.Title className="text-center" >{title}</Card.Title>
                    <Card.Title className='d-flex text-center justify-content-center'>  {Array(rating)
                        .fill()
                        .map((_, i) => (
                        <div key={i}><span role="img" aria-label="star">⭐️</span> </div>))}
                        </Card.Title>
                    <Card.Title className="text-center " ><h4>{price} <small>$</small></h4></Card.Title>
                    <div className=' d-flex'>
                    <Button className="mx-auto" onClick={() => addToBasket(id)} variant="warning">Add to Basket</Button></div>
                </Card.Body>
            </Card> 
        </div>
    )
}
export default Product;