import PropTypes from "prop-types";


function Box({title, value, className}) {
  return (
    <div className={`box ${className}`}>
      <p>{title}</p>
      <p>{value}</p>
    </div>
  )

}

export default Box;

Box.propTypes = {
  title: PropTypes.node.isRequired,
  value: PropTypes.node.isRequired,
  className: PropTypes.node.isRequired,
}