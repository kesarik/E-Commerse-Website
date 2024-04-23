/*This is ued for item in particular section like men,women etc*/
import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
/*props" (short for "properties")
props allow you to pass data from a parent component to a child component. 
this props is used in popular file*/
const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image}alt=""/></Link>
      <p>{props.name}</p>
    <div className="item-prices">
        <div className="item-price-new">
            ${props.new_price}
        </div>
        <div className="item-price-old">
            ${props.old_price}
        </div>
    </div>
    </div>
  )
}

export default Item
