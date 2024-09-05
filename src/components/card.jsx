import PropTypes from "prop-types";

function Card({
                product,
                checkIcon,
                notIcon,
                soldOutImage,
                image,
                altImage,
                productOutOfStock,
                nameOfProduct,
                priceOfProduct,
                televisionSizes
              }) {
  return (
    <div className="card">
      <div className="left-col">
        <img alt={altImage} className="featured-img"
             src={
               productOutOfStock ?
                 soldOutImage
                 :
                 image
             }></img>
      </div>
      <div className="right-col">
        <h3>{nameOfProduct}</h3>
        <strong
          className="price">{priceOfProduct}</strong>
        <p className="sizes">{televisionSizes}</p>
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
  product: PropTypes.node.isRequired,
  checkIcon: PropTypes.node.isRequired,
  notIcon: PropTypes.node.isRequired,
  soldOutImage: PropTypes.node.isRequired,
  image: PropTypes.node.isRequired,
  altImage: PropTypes.node.isRequired,
  productOutOfStock: PropTypes.node.isRequired,
  nameOfProduct: PropTypes.func.isRequired,
  priceOfProduct: PropTypes.func.isRequired,
  televisionSizes: PropTypes.func.isRequired,
}