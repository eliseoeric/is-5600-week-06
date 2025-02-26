// ....

return (
  <div className="cf pa2">

    <div className="mt2 mb2">
      // Using the data prop, we map over the list of products and render a Card component for each product
      {data.map((product) => (
        <Card key={product.id} {...product} />
      ))}
    </div>
    
    //  Pagination Buttons
    <div className="flex items-center justify-center pa4">   
      <Button text="Previous" />
      <Button text="Next" />
    </div>
  </div>
)

