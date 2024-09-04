import PropTypes from "prop-types";

function Card({
                product,
                checkIcon,
                notIcon,
                featuredImage,
                nameOfProduct,
                priceOfProduct,
                televisionSizes
              }) {
  return (
    <div className="card">
      <div className="left-col">
        <img alt={featuredImage} className="featured-img"
             src={product.sourceImg}></img>
      </div>
      <div className="right-col">
        <h3>{nameOfProduct(product)}</h3>
        <strong
          className="price">{priceOfProduct(product)}</strong>
        <p className="sizes">{televisionSizes(product)}</p>
        <p className="card-options">
          {/* Here I am just showing an old way of how would approach this*/}
          {/* I Kept it in here for example purposes*/}
          {product.options.map((option) => {
            if (option.applicable) {
              return (
                <span className="option-holder" key={option.name}>
                                <img className="icons"
                                     src={checkIcon}
                                     alt="not-icon"/>
                  {option.name}
                    </span>)
            } else {
              return (
                <span className="option-holder" key={option.name}>
                                <img className="icons"
                                     src={notIcon}
                                     alt="not-icon"/>
                  {option.name}
                    </span>)
            }
          })}
        </p>
      </div>
    </div>
  )
}

export default Card;

Card.propTypes = {
  product: PropTypes.object.isRequired,
  checkIcon: PropTypes.node.isRequired,
  notIcon: PropTypes.node.isRequired,
  featuredImage: PropTypes.node.isRequired,
  nameOfProduct: PropTypes.func.isRequired,
  priceOfProduct: PropTypes.func.isRequired,
  televisionSizes: PropTypes.func.isRequired,
}