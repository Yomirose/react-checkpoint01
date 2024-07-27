import React from 'react';
import Products from './Product';

const description = () => {
  return (
    <div className='description'>
      {Products.map((Product, i)=>{
        return <div key={i}>
          {Product.description}
        </div>
      })}
    </div>
  )
};

export default description;
