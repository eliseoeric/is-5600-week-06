import React from 'react'

export default function Button({text, handleClick}) {
  return (
    <a href="#" className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4" onClick={handleClick}>
      <span className="pl1">{text}</span>
    </a>
  )
}
return (
  <div className="cf pa2">

    <div className="mt2 mb2">
      // Using the data prop, we map over the list of products and render a Card component for each product
      {data.map((product) => (
        <Card key={product.id} {...product} />
      ))}
    </div>
    