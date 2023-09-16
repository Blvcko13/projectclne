import React from 'react';
import Product from './components/product';
import laptop from './img/laptop.jpg'
import headphones from './img/headphones.jpg'
import speakers from './img/speakers.jpg'
import phone from './img/phone.jpg'
import './App.css';
import Header from './components/header';
import Footer from './components/footer';

class App extends React.Component {
  render(){
  const productData = [
  {
    name: 'Headphones',
    price: 1200,
    image: headphones,
  },
  {
    name: 'Speakers',
    price: 1500,
    image: speakers,
  },
  {
    name: 'Laptop',
    price: 3300,
    image: laptop,
  },
  {
    name: 'Phone',
    price: 1500,
    image: phone,
  }
];


return (
  
  <div id='container'>
    
    <Header />
    <main id='flex'>
      {productData.map((product, index) => (
        <Product
          key={product.index}
          name={product.name}
          photo={product.image}
          price={product.price}
        />
      ))}
   
   </main>
   <Footer />
  </div>
);

  
  }
}
export default App;
