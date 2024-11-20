import PropTypes from "prop-types";

function Header({children}) {

  return (
    <header className="header">
      {children}
    </header>
  )
}

export default Header;

Header.propTypes = {
  children: PropTypes.node
}