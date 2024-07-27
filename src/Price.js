import React from 'react';
import Products from './Product';

const price = () => {
  return (
    <div className='price'>
      {Products.map((Product, i)=>{
        return <div key={i}>
          {Product.price}
        </div>
      })}
    </div>
  )
};
export default price;
