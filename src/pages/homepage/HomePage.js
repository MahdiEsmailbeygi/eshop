import React, { useContext } from 'react';
import Product from '../../Containers/Product';
import { StateContext } from '../../Containers/StateProvider';
import ControlledCarousel from '../../components/Carousel/Carousel';

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
      {/* <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center">
    <li className="page-item disabled">
      <Link className="page-link" to="#" tabindex="-1">Previous</Link>
    </li>
    <li className="page-item"><Link className="page-link" to="#">1</Link></li>
    <li className="page-item"><Link className="page-link" to="#">2</Link></li>
    <li className="page-item"><Link className="page-link" to="#">3</Link></li>
    <li className="page-item"><Link className="page-link" to="#">4</Link></li>
    <li className="page-item"><Link className="page-link" to="#">5</Link></li>
    <li className="page-item"><Link className="page-link" to="#">6</Link></li>
    <li className="page-item"><Link className="page-link" to="#">7</Link></li>
    <li className="page-item"><Link className="page-link" to="#">8</Link></li>
    <li className="page-item"><Link className="page-link" to="#">9</Link></li>
    <li className="page-item"><Link className="page-link" to="#">10</Link></li>
    <li className="page-item">
      <Link className="page-link" to="#">Next</Link>
    </li>
  </ul>
</nav> */}
    </div>
  )
}


export default HomePage;