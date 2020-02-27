import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.module.scss"
import headerStyles from "./header.module.scss"


const Header = ({ siteTitle }) => (
  <header className={ headerStyles.header }>
    <div className={ headerStyles.headerContent }>
      <h1>
        <Link className={ headerStyles.title }to="/"> {siteTitle} </Link>
      </h1>

      <nav>
        <ul className={ headerStyles.navList }>
          <li>
            <Link className={ headerStyles.navItem } activeClassName={ headerStyles.activeNavItem } to="/">Home
            </Link>
            </li>
          <li>
            <Link className={ headerStyles.navItem } activeClassName={ headerStyles.activeNavItem } to="/about">About
            </Link>
          </li>
          <li>
            <Link className={ headerStyles.navItem } activeClassName={ headerStyles.activeNavItem } to="/blog">Blog
            </Link>
            </li>
          <li>
            <Link className={ headerStyles.navItem } activeClassName={ headerStyles.activeNavItem } to="/contact">Contact
            </Link>
            </li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
