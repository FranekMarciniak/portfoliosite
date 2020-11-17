import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import "../styles/header.scss"
import { FaDev } from "react-icons/fa"

const Header = () => {
  const [active, setActive] = useState(false)

  const onScroll = () => {
    if (window.scrollY >= 40) {
      setActive(true)
    } else {
      setActive(false)
    }
  }
  window.addEventListener("scroll", onScroll)
  return (
    <header className={!active ? "header" : "header header--active"}>
      <div className="header__wrapper">
        <div className="header__logo__wrapper">
          <span>
            <FaDev size="2.3rem" title="logo icon" />
          </span>
        </div>
        <nav className="header__nav">
          <ul className="header__nav__list" style={{ marginBottom: 0 }}>
            <li className="header__nav__list__item">
              <Link to="/" className="link--hovered">
                Home
              </Link>
            </li>
            <li className="header__nav__list__item">
              <Link to="/projectsPage" className="link--hovered">
                Projects
              </Link>
            </li>
            <li className="header__nav__list__item">
              <Link
                to="/notes"
                style={{
                  pointerEvents: "none",
                  color: "rgba(255, 255, 255, 0.8)",
                }}
                className="link--hovered"
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
