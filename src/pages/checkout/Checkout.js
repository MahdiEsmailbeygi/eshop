import React, { useContext, useState } from 'react';
import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct';
import Subtotal from '../../components/Subtotal/Subtotal';
import { StateContext } from '../../Containers/StateProvider';
import './Checkout.css';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Checkout() {
  const { basketProducts } = useContext(StateContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div >
      <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        alt="checkout__ad" className="img-fluid " />
      <div className="p-1 fs-4 fw-bold bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
        Your Shopping Basket
      </div>
      <div className='container m-1'>
        <div className='row mt-2'>
          <div className='col-lg-2 '>
            <Button className='shadow' variant="warning" onClick={handleShow}>
              Subtotal
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Subtotal</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Subtotal />
              </Offcanvas.Body>
            </Offcanvas>
          </div>
          <div className='col-lg-10  img-thumbnail shadow'>
            {basketProducts.map(i =>
              <CheckoutProduct
                key={i.id}
                id={i.id}
                title={i.title}
                image={i.image}
                price={i.price}
                rating={i.rating}
              />)}
          </div>
        </div>
      </div>
    </div >
  )
}
export default Checkout;