import React from 'react'
import CategoryImages from './CategoryImages'

const Categories = () => {
  return (
    <div className="">
    <h2 className="text-3xl font-semibold my-10">Shopping By Categories</h2>
    <div className="flex justify-center gap-8"> 
        <CategoryImages
 imageSrc='/Images/t-shirt.png'
 alt='t-shirt'        
        />
        <CategoryImages
 imageSrc='/Images/dropShoulder.png'
 alt='t-shirt'        
        />
        <CategoryImages
 imageSrc='/Images/full-sleeves.png'
 alt='t-shirt'   
 width={147}
 height={147}   
        />
        <CategoryImages
 imageSrc='/Images/half-shirt.png'
 alt='t-shirt'        
        />
        <CategoryImages
 imageSrc='/Images/Cap.png'
 alt='t-shirt'        
        />
    </div>
    </div>
         )
}

export default Categories;