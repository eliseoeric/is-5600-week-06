import Card from './Card';

const CardList = ({ products }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <Card key={product.id} {...product} />
      ))}
    </div>
  );
};

export default CardList;