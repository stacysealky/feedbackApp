import React from "react";
import PropTypes from "prop-types";


function Header({ title, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor
  }
  return (
    <>
    <header style={headerStyles}>
      <h2>{title}</h2>
    </header>
    </>
  );
}

Header.defaultProps = {
  title: "default title",
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  textColor: PropTypes.string
}

export default Header;

