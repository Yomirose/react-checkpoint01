import React from 'react';
import Products from './Product';

const Name = () => {
  return (
    <div className='name'>
      {Products.map((Product, i)=>{
        return <div key={i}>
          {Product.name}
        </div>
      })}
    </div>
  )
};

export default Name;
