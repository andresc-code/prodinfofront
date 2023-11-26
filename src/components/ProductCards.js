import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      {/* Tabs navs */}
      <ul className="nav nav-tabs mb-3" role="tablist">
        <li className="nav-item" role="presentation">
          <a className="nav-link active" id={`tab-${product.id}-1`} data-bs-toggle="tab" href={`#content-${product.id}-1`} role="tab" aria-controls={`content-${product.id}-1`} aria-selected="true">Tab 1</a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link" id={`tab-${product.id}-2`} data-bs-toggle="tab" href={`#content-${product.id}-2`} role="tab" aria-controls={`content-${product.id}-2`} aria-selected="false">Tab 2</a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link" id={`tab-${product.id}-3`} data-bs-toggle="tab" href={`#content-${product.id}-3`} role="tab" aria-controls={`content-${product.id}-3`} aria-selected="false">Tab 3</a>
        </li>
      </ul>
      {/* Tabs content */}
      <div className="tab-content">
        <div className="tab-pane fade show active" id={`content-${product.id}-1`} role="tabpanel" aria-labelledby={`tab-${product.id}-1`}>
          Tab 1 content
        </div>
        <div className="tab-pane fade" id={`content-${product.id}-2`} role="tabpanel" aria-labelledby={`tab-${product.id}-2`}>
          Tab 2 content
        </div>
        <div className="tab-pane fade" id={`content-${product.id}-3`} role="tabpanel" aria-labelledby={`tab-${product.id}-3`}>
          Tab 3 content
        </div>
      </div>
      {/* Tabs content */}
    </div>
  );
};

const ProductCards = () => {
  const [cardsPerRow, setCardsPerRow] = useState(3);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Tu lógica para cargar los productos desde algún lugar
    // Se establece el estado de productos con los datos cargados
    const loadedProducts = [
      {
        id: 1,
        name: 'BLUSA BASICO',
        image: process.env.PUBLIC_URL + '/images/21457.jpg',
        code:'21457',
        // Otros datos...
      },
      {
        id: 2,
        name: 'BLUSA BASICA ESCOTE REDONDO, MANGA 3/4',
        image: process.env.PUBLIC_URL + '/images/21489.jpg',
        code:'21489',
        // Otros datos...
      },
      {
        id: 3,
        name: 'BLUSA NEGRA MANGA 3/4 ESCOTE REDONDO MES',
        image: process.env.PUBLIC_URL + '/images/21312.jpg',
        code:'21312',
        // Otros datos...
      },
      {
        id: 4,
        name: 'BLUSA ESCOTE REDONDO EN CUERO ',
        image: process.env.PUBLIC_URL + '/images/21396.jpg',
        code:'21396',
        // Otros datos...
      },
      {
        id: 5,
        name: 'BLUSA ESCOTE ZARU CLASIC ',
        image: process.env.PUBLIC_URL + '/images/I21197.jpg',
        code:'21396',
        // Otros datos...
      },
      {
        id: 6,
        name: 'BLUSA ESCOTE REDONDO COORDINADA EN CUERO ',
        image: process.env.PUBLIC_URL + '/images/21452.jpg',
        code:'21396',
        // Otros datos...
      },
      {
        id: 7,
        name: 'BLUSA ESCOTE REDONDO COORDINADA EN CUERO ',
        image: process.env.PUBLIC_URL + '/images/21554.jpg',
        code:'21396',
        // Otros datos...
      },
      {
        id: 8,
        name: 'BLUSA ESCOTE REDONDO COORDINADA EN CUERO ',
        image: process.env.PUBLIC_URL + '/images/imagen_mujer.jpg',
        code:'21396',
        // Otros datos...
      },
      {
        id: 9,
        name: 'BLUSA ESCOTE REDONDO COORDINADA EN CUERO ',
        image: process.env.PUBLIC_URL + '/images/21662.jpg',
        code:'21396',
        // Otros datos...
      },
      {
        id: 10,
        name: 'BLUSA ESCOTE REDONDO COORDINADA EN CUERO ',
        image: process.env.PUBLIC_URL + '/images/21489.jpg',
        code:'21396',
        // Otros datos...
      },
      {
        id: 11,
        name: 'BLUSA ESCOTE REDONDO COORDINADA EN CUERO ',
        image: process.env.PUBLIC_URL + '/images/21584.jpg',
        code:'21396',
        // Otros datos...
      },
      {
        id: 12,
        name: 'BLUSA ESCOTE REDONDO COORDINADA EN CUERO ',
        image: process.env.PUBLIC_URL + '/images/21312.jpg',
        code:'21396',
        // Otros datos...
      },
    ];
    setProducts(loadedProducts);

    // Tu lógica para cargar la configuración de cardsPerRow desde algún lugar
    // Se establece el estado de cardsPerRow con el valor cargado
    const loadedCardsPerRow = 3; // Por defecto
    setCardsPerRow(loadedCardsPerRow);
  }, []);

  return (
    <div className={`row row-cols-1 row-cols-md-${cardsPerRow} g-3`}>
      {products.map((product) => (
        <div key={product.id} className={`col-md-${Math.floor(12 / cardsPerRow)}`}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
