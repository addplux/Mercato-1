import React from 'react';
import ReactDOM from 'react-dom';

interface Product {
  id: number;
  name: string;
  image: string;
}

const products: Product[] = [
  { id: 1, name: 'Product 1', image: 'image1.jpg' },
  { id: 2, name: 'Product 2', image: 'image2.jpg' },
  
];

const App: React.FC = () => {
  return (
    <div>
      <header>
        <h1>Mercato</h1>
        <div className="dropdown">
          <button type="button" onClick="myFunction()" className="dropdown-contenet">Products
    <i className="fa fa-caret-down"></i>
  </button>
  <div className="dropdown-content" id="myDropdown">
    <a href="#">Electronics</a>
    <a href="#">Gloseries</a>
    <a href="#">Contruction meterial</a>
    <a href="#">Clothing</a>
    <a href="#">House Appliacies</a>
    </div>
  </div> 

        <button type="button">Search</button>
      </header>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
