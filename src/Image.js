import Products from './Product';

const imageUrl = () => {
  return (
    <div className='image'>
      {Products.map((Product, i)=>{
        return < img src={Product.imageUrl} alt='' />
      })}
    </div>
  )
};
export default imageUrl;
