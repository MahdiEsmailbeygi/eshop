import React, { useContext } from 'react';
import Product from '../../components/Product';
import { StateContext } from '../../components/StateProvider';
import ControlledCarousel from '../../components/carousel/Carousel';

function HomePage() {
  const { products } = useContext(StateContext)
  return (
    <div >
      <ControlledCarousel />
      <div className="container text-center-">
        <div className="row row-cols-4">
          {products.map(pr => (
            <Product
              key={pr.id}
              id={pr.id}
              title={pr.title}
              price={pr.price}
              rating={pr.rating}
              image={pr.image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}


export default HomePage;