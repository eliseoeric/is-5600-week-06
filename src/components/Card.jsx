import Card from './Card'
import Button from './Button';
import Search from './Search';
import React, { useState, useEffect } from "react";

const CardList = ({data}) => {

  const limit = 10;
const defaultDataset = data.slice(0, limit);
const [offset, setOffset] = useState(0);
const [products, setProducts] = useState(defaultDataset);

useEffect(() => {
  setProducts(data.slice(offset, offset + limit));
}, [offset, limit, data]);

const filterTags = (tagQuery) => {
  const filtered = data.filter(product => {
    if (!tagQuery) {
      return product
    }

    return product.tags.find(({title}) => title === tagQuery)
  })

  setOffset(0)
  setProducts(filtered)
}

  return (
    <div className="cf pa2">
      <Search handleSearch={filterTags}/>
      <div className="mt2 mb2">
        {products && products.map((product) => (
            <Card key={product.id} {...product} />
        ))}
      </div>

      <div className="flex items-center justify-center pa4">   
        <Button text="Previous" handleClick={() => setoffset(offset - limit)} />
        <Button text="Next" handleClick={() => setoffset(offset + limit)} />
      </div>
    </div>
  )
const Card = ({description, alt_description, id, user, urls, likes}) => {

  const style = {
    backgroundImage: `url(${urls.small})`
  }
  
  return (
    <div className="fl w-50 w-25-m w-20-l pa2">
      <Link to={`/product/${id}`} className="db link dim tc"> 
        <div style={style} alt="" className="w-100 db outline black-10 h4 cover"></div>
        <dl className="mt2 f6 lh-copy">
          <dt className="clip">Title</dt>
          <dd className="ml0 black truncate w-100">{description ?? alt_description}</dd>
          <dt className="clip">Artist</dt>
          <dd className="ml0 gray truncate w-100">{user.first_name} {user.last_name}</dd>
          <dt className="clip">Likes</dt>
          <dd className="ml0 gray truncate w-100">{likes} Likes</dd>
        </dl>
      </Link>
    </div>
  )
}

export default Card;