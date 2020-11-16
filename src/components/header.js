import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/header.scss"
import { FaDev } from "react-icons/fa"

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo__wrapper">
          <span>
            <FaDev size="2.3rem" title="logo icon" />
          </span>
        </div>
        <nav className="header__nav">
          <ul className="header__nav__list">
            <li className="header__nav__list__item">
              <a href="#">Home</a>{" "}
            </li>
            <li className="header__nav__list__item">
              <a href="#">Projects</a>{" "}
            </li>
            <li className="header__nav__list__item">
              <a href="#">Notes</a>{" "}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
