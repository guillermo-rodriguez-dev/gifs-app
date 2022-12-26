import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

export default function GifApp() {
  const [categories, setCategories] = useState(['Anime', 'Movies'])

  const onAddCategory = ({newCateogry}) => {
    console.log(newCateogry)
    setCategories([...categories, newCateogry])
  }

  return (
    <>
     <div>GifApp</div>
     <AddCategory onAddCategory={onAddCategory}/>
    {categories.map(category =>  <GifGrid category={category}/>)}
    </>
   
  )
}
