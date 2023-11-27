import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';

const ProductCards = () => {
  const [cardsPerRow, setCardsPerRow] = useState(3); // Valor predeterminado

  const products = [
    {
        id: 1,
        name: 'BlOUSE BASIC',
        image: process.env.PUBLIC_URL + '/images/21457.jpg',
        code:'21457',
        reference:'21457',
        brand:'Zaru',
        type:'Offer',
        // Otros datos...
      },
      {
        id: 2,
        name: 'BlOUSE FASHION CLOSED NECKLINE, 3/4 SLEEVE',
        image: process.env.PUBLIC_URL + '/images/21489.jpg',
        code:'21489',
        reference:'21489',
        type:'Season',
        // Otros datos...
      },
      {
        id: 3,
        name: 'BlOUSE FRANCE 3/4 SLEEVE',
        image: process.env.PUBLIC_URL + '/images/21312.jpg',
        code:'21312',
        reference:'21312',
        brand:'Zaru',
        type:'Season',
        // Otros datos...
      },
      {
        id: 4,
        name: 'BlOUSE MATILD 3/4 SLEEVE',
        image: process.env.PUBLIC_URL + '/images/21396.jpg',
        code:'21396',
        reference:'21396',
        brand:'Zaru',
        type:'Season',
        // Otros datos...
      },
      {
        id: 5,
        name: 'BlOUSE CANDY LONG SLEEVE',
        image: process.env.PUBLIC_URL + '/images/I21197.jpg',
        code:'21396',
        reference:'21396',
        brand:'Zaru',
        type:'Season',
        // Otros datos...
      },
      {
        id: 6,
        name: 'BlOUSE NORTH SHORT SLEEVE',
        image: process.env.PUBLIC_URL + '/images/21452.jpg',
        code:'21396',
        reference:'21396',
        brand:'Zaru',
        type:'Season',
        // Otros datos...
      },
      {
        id: 7,
        name: 'BlOUSE YELLOW LINE SHORT SLEEVE',
        image: process.env.PUBLIC_URL + '/images/21554.jpg',
        code:'21396',
        reference:'21396',
        brand:'Zaru',
        type:'Season',
        // Otros datos...
      },
      {
        id: 8,
        name: 'BlOUSE HOUSE OF DE DRAGON 3/4 SLEEVE',
        image: process.env.PUBLIC_URL + '/images/imagen_mujer.jpg',
        code:'21396',
        reference:'21396',
        brand:'Zaru',
        type:'Season',
        // Otros datos...
      },
      {
        id: 9,
        name: 'BlOUSE NEW YORK 3/4 SLEEVE ',
        image: process.env.PUBLIC_URL + '/images/21662.jpg',
        code:'21396',
        reference:'21396',
        brand:'Zaru',
        type:'Season',
        // Otros datos...
      },
      {
        id: 10,
        name: 'BlOUSE NORTIC 3/4 SLEEVE ',
        image: process.env.PUBLIC_URL + '/images/21489.jpg',
        code:'21396',
        reference:'21396',
        brand:'Zaru',
        type:'Season',
        // Otros datos...
      },
      {
        id: 11,
        name: 'BlOUSE PRINTED ROUND NECK',
        image: process.env.PUBLIC_URL + '/images/21584.jpg',
        code:'21396',
        reference:'21396',
        brand:'Zaru',
        type:'Season',
        // Otros datos...
      },
      {
        id: 12,
        name: 'BlOUSE PRINTED ROUND NECK',
        image: process.env.PUBLIC_URL + '/images/21312.jpg',
        code:'21396',
        reference:'21396',
        brand:'Zaru',
        type:'Season',
        // Otros datos...
      },
  ];

  
  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/config/config.json')
      .then(response => response.json())
      .then(data => {
        if (data.number_of_cards_per_row !== undefined) {
          //console.log('Cards per row:', data.number_of_cards_per_row); // Verifica si se obtiene el número de tarjetas por fila
          setCardsPerRow(parseInt(data.number_of_cards_per_row));
        }
      })
      .catch(error => {
        console.error('Error fetching configuration:', error);
      });
  }, []);


  const renderProductCards = () => {
    const colClass = `col-md-${Math.floor(12 / Math.min(cardsPerRow, 12))}`;
    /*const colClass = `col-md-${Math.floor(12 / cardsPerRow)}`;*/
    return products.map(product => (
            <div key={product.id} className={`col-sm-6 ${colClass}`}>
            {/* Resto de tu código para renderizar las tarjetas */}
            <div className="card">
            <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Image">
            <h6 className="card-title">{product.name}</h6>
              <div className="tab-content w-100" id={`myTabContent-${product.id}`}>
                <div className="tab-pane fade show active" id={`home-${product.id}`} role="tabpanel" aria-labelledby="home-tab">
                  <img className="card-img-bottom" src={product.image} alt="Product Thumbnail" />
                </div>
                {/* ...código de otras pestañas */}
            </div>
          </Tab>
          <Tab eventKey="profile" title="Profile">
          <p className="card-text text-left">
                                            <span className="titlecard"><span>Desc:</span>{product.name} </span>
                                            <span className="titlecard"><span>Cod:</span> {product.code}</span>
                                            <span className="titlecard"><span>Ref:</span> {product.reference}</span>
                                            <span className="titlecard"><span>SubF:</span> MANGA LARGA</span>
                                            <span className="titlecard"><span>Fondo:</span> ESTAMPADO</span>
                                            <span className="titlecard"><span>Tejido:</span> PLANO</span>
                                            <span className="titlecard"><span>Origen:</span> IMPORTADO</span>
                                            <span className="titlecard"><span>Composicion:</span> None</span>
                                            <span className="titlecard"><span>Atributo:</span> None</span>
                                            <span className="titlecard"><span>Fecha Creado:</span> None</span>
                                            <span className="titlecard"><span>Cuidados:</span> None</span>
                                            <span className="titlecard"><span>Tipo:</span> PROMOCION</span>
                                            <span className="titlecard"><span>Marca:</span> {product.brand}</span>
                                            <span className="titlecard"><font color="#FFBF00"><span>Linea:</span> CASUAL</font></span>                                      
                                    </p>
                                    <hr/>
                                     <p className="card-text text-left">
                                            <span className="titlecard"><span>Des Linea:</span> CASUAL</span>
                                            <span className="titlecard"><span>Dias Tienda:</span> CASUAL</span>
                                            <span className="titlecard"><span>SubF:</span> MANGA LARGA</span>
                                            <span className="titlecard"><span>Tipo:</span> PROMOCION</span>
                                            <span className="titlecard"><span>Marca:</span> XUSS</span>
                                            <span className="titlecard"><span>Precio:</span> 29900.0</span>
                                            <span className="titlecard"><span>DTO:</span>0%</span>
                                            <span className="titlecard"><font color="#54BF2B"><span>Rotacion:</span> BUENA</font></span>                                      
                                    </p>
          </Tab>
          <Tab eventKey="contact" title="Contact" >
          <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Color</th>
                    <th>Sales</th>
                    <th>Inv</th>
                    <th>Rot</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>010-Blue</td>
                    <td>25</td>
                    <td>250</td>
                    <td>75 %</td>
                  </tr>
                  <tr>
                    <td>325-Yellow</td>
                    <td>78</td>
                    <td>125</td>
                    <td>89 %</td>
                  </tr>
                  <tr>
                    <td>Sum</td>
                    <td>500</td>
                    <td>325</td>
                    <td>AVG 72%</td>
                  </tr>
                </tbody>
        </Table>
          </Tab>
        </Tabs>    
        
        </div>
        {/* Fin de tu código de renderizado de tarjetas */}
      </div>
    ));
  };

  return (
    <div className={`row row-cols-1 row-cols-md-${cardsPerRow} g-3`}>
      {renderProductCards()}
    </div>
  );
};

export default ProductCards;