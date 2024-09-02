// import React from "react";
import PropTypes from "prop-types";

function Button({name, onClick, buttonText}) {
  return (
    <button
      name={name}
      className="main-btn"
      onClick={onClick}
    >
      {buttonText}
    </button>
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired,      // Validate that 'name' is a required string
  onClick: PropTypes.func.isRequired,     // Validate that 'onClick' is a required function
  buttonText: PropTypes.string.isRequired // Validate that 'buttonText' is a required string
};


export default Button;
