//this page is created for when we click on any product the all the info related to that product is opening.
import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Component/Breadcrum/Breadcrum';
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Component/DescriptionBox/DescriptionBox';
import RelatedProduct from '../Component/RelatedProduct/RelatedProduct';

const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();//used for accessing the parameters in the URL of a route
  const product=all_product.find((e)=>e.id===Number(productId))
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProduct/>
    </div>
  )
}

export default Product
