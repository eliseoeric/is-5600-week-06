import Card from "./Card";
import Button from "./Button";
import React, { useState, useEffect } from "react";
import Search from "./Search";

const CardList = ({data}) => {

  const limit = 10;
const defaultDataset = data.slice(0, limit);
const [offset, setOffset] = useState(0);
const [products, setProducts] = useState(defaultDataset);


useEffect(() => {
  setProducts(data.slice(offset, offset + limit));
}, [offset, limit, data]);

const filterTags = (tagQyery) => {
  const filtered = data.filter(product => {
    if(!tagQyery) {
      return product
    }

    return product.tags.find(({title}) =>  title === tagQyery)
  })
 setOffset(0)
 setProducts(filtered)

}



  return (
    <div className="cf pa2">
      <Search handleSearch={filterTags}/>
      <div className="mt2 mb2">
      {products.map((product) => (
        <Card key={product.id} {...product} />
      ))}
      </div>
      <div className="flex items-center justify-center pa4">   
      <Button text="Previous" handleClick={() => setOffset(offset - limit)} />
      <Button text="Next" handleClick={() => setOffset(offset + limit)}  />
      </div>
    </div>
  )
}

export default CardList;