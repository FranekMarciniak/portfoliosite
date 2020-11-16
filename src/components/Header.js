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
              <Link to="/">Home</Link>
            </li>
            <li className="header__nav__list__item">
              <Link to="/projectsPage">Projects</Link>
            </li>
            <li className="header__nav__list__item">
              <Link
                to="/notes"
                style={{
                  pointerEvents: "none",
                  color: "rgba(255, 255, 255, 0.8)",
                }}
              >
                Notes
              </Link>
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
