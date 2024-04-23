import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="description-nav-box">Description</div>
        <div className="description-nav-box fade">Reviews (124)</div>
      </div>
      <div className="descriptionbox-description">
        <p>"Discover a curated collection of fashion-forward essentials on our e-commerce shopping website.
            Elevate your style with sleek designs, quality craftsmanship, and comfortable fabrics. Browse effortlessly chic clothing and accessories, designed to enhance your everyday wardrobe. 
            Shop now for a seamless online shopping experience that brings fashion to your fingertips.
        </p>
        <p>
            Revamp your style effortlessly with our curated selection of trendy and comfortable fashion essentials. 
            Explore our online store for a seamless shopping experience, where quality meets convenience.
            Elevate your wardrobe today! 
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
