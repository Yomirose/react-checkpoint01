import React from 'react';
import Drinks from './Drinks';
import Products from './Product';
import Deodorants from './Deodorants ';
import "./App.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const greet = () =>{
    alert("Hello there! Welcome to my page.")
  }

  return (
    <div className="App">
      <div>
      <Card style={{ width: '18rem' }}>
       <Card.Body>
          <Card.Img  variant="top" src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/46/790517/1.jpg?1235"  href="" />
          <Card.Title>Hello</Card.Title>
          <Card.Text>My name is Roseline. Welcome to my first card</Card.Text>
         <Button style={{
              alignContent: "center"
           }} variant="primary" onClick={greet}>Click Me</Button>
        </Card.Body>
      </Card>
      </div>
      <div className="Products-section">
        {Products.map((Product, i)=>{
          return <div key={i} className="Products">
            <img src={Product.imageUrl} alt=""style={{
          width: "100%", 
          height: "300px",
          marginRight: "px"
        }} />
            <h1 className='name'>{Product.name}</h1>
            <p className='price'>{Product.price}</p>
            <p className='description'>{Product.description}</p>
          </div>
        })}
      </div>
      <div className="Deodorants-section">
        {Deodorants.map((Deodorant, i)=>{
          return <div key={i} className="Products">
            <img src={Deodorant.imageUrl} alt=""style={{
          width: "90%", 
          height: "300px",
          marginRight: "px"
        }} />
            <h1 className='name'>{Deodorant.name}</h1>
            <p className='price'>{Deodorant.price}</p>
            <p className='description'>{Deodorant.description}</p>
          </div>
        })}
      </div>
      <div className="Drinks-section">
        {Drinks.map((Drink, i)=>{
          return <div key={i} className="Products">
            <img src={Drink.imageUrl} alt=""style={{
          width: "100%", 
          height: "300px",
          marginRight: "px"
        }} />
            <h1 className='name'>{Drink.name}</h1>
            <p className='price'>{Drink.price}</p>
            <p className='description'>{Drink.description}</p>
          </div>
        })}
      </div>
    </div>
  );
}

export default App;
