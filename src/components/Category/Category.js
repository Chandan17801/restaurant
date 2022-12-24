import React, { Fragment, useState } from 'react'

import CategoryItems from './CategoryItems'
import data from '../../data/data'
import burger from '../../photos/burger.png'
import pizza from '../../photos/pizza.png'
import fries from '../../photos/french-fries.png'
import starter from '../../photos/noodles.png'
import paneer from '../../photos/paneer.png'
import bread from '../../photos/flatbread.png'

import './Category.css'

function Category() {
  const [selectedCategory, setSelectedCategory] = useState("")
  const onClickSnack = () => {
    setSelectedCategory('Snacky Bites')
  }
  const onClickPizza = () => {
    setSelectedCategory('Pizza')
  }
  const onClickSpecial = () => {
    setSelectedCategory('All Time Favourite')
  }
  const onClickStarters = () => {
    setSelectedCategory('Starters')
  }
  const onClickIndian = () => {
    setSelectedCategory('North Indian')
  }
  const onClickBread = () => {
    setSelectedCategory('Breads')
  }
  return (
    <Fragment>
      <nav className="nav">
        <div onClick={onClickSnack}>
          <img src={burger} className="icon" alt="..." />
          <p>Snacky Bites</p>
        </div>
        <div onClick={onClickPizza}>
          <img src={pizza} className="icon" alt="..." />
          <p>Pizza</p>
        </div>
        <div onClick={onClickSpecial}>
          <img src={fries} className="icon" alt="..." />
          <p>Specials</p>
        </div>
        <div onClick={onClickStarters}>
          <img src={starter} className="icon" alt="..." />
          <p>Starters</p>
        </div>
        <div onClick={onClickIndian}>
          <img src={paneer} className="icon" alt="..." />
          <p>North Indian</p>
        </div>
        <div onClick={onClickBread}>
          <img src={bread} className="icon" alt="..." />
          <p>Breads</p>
        </div>
      </nav>
      <hr/>
      <div className="grid">
        {data.filter(props=>props.category===selectedCategory||selectedCategory==="").map((props) => (
          <CategoryItems
            key={props.id}
            id={props.id}
            title={props.title}
            price={props.price}
            pic={props.pic}
          />
        ))}
      </div>
    </Fragment>
  )
}

export default Category
