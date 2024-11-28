import Card from "./Card";
import Button  from "./Button";
import Search from "./Search";
import React ,  { useState, useEffect }from "react";

const CardList = ({data}) => {

  const limit = 25;
  const defaultDataset = data.slice(0, limit);
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(defaultDataset);

  const handlePrevious = () => {
    // set the offset to the previous 10 products
    setOffset(offset - limit);
  }
  const handleNext = () => {
    // set the offset to the next 10 products
    setOffset(offset + limit);
  }

  useEffect(() => {
    // set the products state variable to the next 10 products
    setProducts(data.slice(offset, offset + limit));
  }, [offset, limit, data]);

  const filterTags = (tag) => {
    const filtered = data.filter(product => {
      if (!tagQuery) {
        return product
      }
      return product.tags.find(({title}) => title == tagQuery)
    })

    setOffset(0)
    setProducts(filtered.slice(0, limit))
  }

  return (
    <div className="cf pa2">
      <Search />
      <div className="mt2 mb2">
        {products && products.map((product) => {
        return (
          <Card key={product.id} {...product} />
        )
      })}
      </div>

      
      <div className="flex items-center justify-center pa4">   
        <Button text="Previous" handleClick={handlePrevious} />
        <Button text="Next" handleClick={handleNext}/>
        </div>
    </div>
  )
}

export default CardList;