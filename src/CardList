return (
  <div className="cf pa2">
    <div className="mt2 mb2">
      <Search handleSearch={filterTags} />
    </div>

    <div className="mt2 mb2">
      {products.map((product) => (
        <Card key={product.id} {...product} />
      ))}
    </div>

    <div className="flex items-center justify-center pa4">
      <Button text="Previous" handleClick={handlePrevious} />
      <Button text="Next" handleClick={handleNext} />
    </div>
  </div>
);
