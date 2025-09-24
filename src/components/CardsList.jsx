// CardsList.jsx

const CardList = ({data}) => {
  return (
    <div className="cf pa2">
      <div className="mt2 mb2">
      // Using the data prop, we map over the list of products and render a Card component for each product
      {data.map((product) => (
        <Card key={product.id} {...product} />
      ))}
      </div>
    </div>
  )
}

export default CardList;