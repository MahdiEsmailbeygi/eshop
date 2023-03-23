import React, { useContext } from 'react';
import './ProductDetails.css';
import { StateContext } from './StateProvider';
import { useParams } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';


function ProductDetails({ id }) {
  const { addToBasket } = useContext(StateContext);
  //console.log('addToBasket',addToBasket);
  const { removeFromBasket } = useContext(StateContext);
  //console.log('removeFromBasket',removeFromBasket);
  let { productId } = useParams();
  productId = Number(productId)
  // console.log("productId",productId )
  const { products } = useContext(StateContext)
  // console.log("products",products);
  const product = products.find(({ id }) => id === productId);
  // console.log("product",product)
  return (
    <div className='container m-1'>
      <div className="productDetails">
        <div className='row mt-2'>
          <div className='col-md-2'>
            <div className="d-grid gap-2 col-11 mx-auto">
              <button className="btn btn-warning shadow" type="button" onClick={() => addToBasket(product.id)}>Add to Basket</button>
              <button className="btn btn-danger shadow" type="button" onClick={() => removeFromBasket(product.id)}>Remove from Basket</button>
            </div>
          </div>
          <div className='col-md-10 img-thumbnail shadow'>
            <img src={product.image} alt="ProductDetails" className="productDetails__image img-fluid  " />
            <div className="productDetails__info">
              <h4 className="productDetails__title">
                {product.title}</h4>
              <br />
              <div className="productDetails__price  ">

                <h4>{product.price} <small>$</small></h4>
              </div>
              <div className="productDetails__rating ">
                {Array(product.rating)
                  .fill()
                  .map((_, i) => (<div key={i}><p>⭐️</p></div>))}
              </div>
              <br />
              <h3>Attributes this item</h3>

              <span  >{product.Attributes}</span>
              <br />
              <Accordion defaultActiveKey='0' alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>About this item</Accordion.Header>
                  <Accordion.Body>
                    {product.Description}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductDetails;