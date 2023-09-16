import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css';


class Product extends React.Component {

  render() {
    

    const {name, photo, price} = this.props;

   
    return(
      
      <Card  id='caard' style={{ width: '28rem',margin: '15px'}}>
      <Card.Img variant="top" src={photo} />
      <Card.Body >
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        Price: ${price}
        </Card.Text>
        <Button variant="outline-success" id='button'>Add to cart</Button>
      </Card.Body>
    </Card>
  
     
    );
   
  }
}



export default Product;
