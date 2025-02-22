import Card from "./Card";
import Button from "./Button";
import React,{useState,useEffect} from "react";
import Search from "./Search";

const CardList = ({data}) => {
  const limit = 10;
  const defaultDataset = data.slice(0,limit);
  const [offSet,setOffset] = useState(0);
  const [products, setProducts] = useState(defaultDataset);
  const [filteredData, setFilteredData]  = useState(data);


  const filterTags = (searchTerm) => {
    const filtered = data.filter((product) =>{
      console.log('Product Tag:',product.tags);
      return product.tags.some((tag) =>{
        console.log("Tag: ",tag);
        return typeof tag == "string" && tag.toLowerCase().includes(searchTerm.toLowerCase());
      });
    });
    console.log("Filterted products:", filtered);
    setFilteredData(filtered);
    setOffset(0);
  };

  const handlePagation = (direction) => {
    if(direction == 'next')
    {
      setOffset((prevOffSet) => Math.min(prevOffset + limit, filteredData.length - limit));

    }
    else if(direction == 'previous')
    {
      setOffset((prevOffSet) => Math.max(prevOffSet - limit, 0));
    }
  }

  const handlePrevious = () => {
    setOffset(offSet - 1);
  }
  const handleNext = () => {
    setOffset(offSet + 10);


useEffect (() => {
  setProducts(data.slice(offSet,offSet + limit));
},[offSet,limit,filteredData]);

 const hasNextPage = offSet + limit < filteredData.length;

  return (
    <div className="cf pa2">
      <div className="mt2 mb2">
       {products.map((product)=>(
        <Card key = {product.id} {...product}/>

       ))}
      </div>
    
      <div className="flex items-center justify-center pa4">   
      <Button text="Previous" handleClick={() => handlePagination('previous')} />
      <Button text="Next" handleClick={() => handlePagination('next')} disabled={!hasNextPage} />
      </div>

    </div>
  );
}

export default CardList;