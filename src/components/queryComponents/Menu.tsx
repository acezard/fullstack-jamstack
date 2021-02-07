import React, { useState } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

export default () => {
  const {
    prismicMainMenu: {
      data: { menu_links },
    },
  } = useStaticQuery(graphql`
    query MainMenu {
      prismicMainMenu {
        data {
          menu_links {
            link_label
          }
        }
      }
    }
  `)
  const [menuActive, toggleMenu] = useState(false)

  return (
    <nav
      className="navbar has-background-light has-text-weight-bold section"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="is-flex mr-6">
            <span className="is-sr-only">Gatsby Landing Page</span>
            <img alt="" />
          </Link>

          <a
            role="button"
            className={`${menuActive && 'is-active'} navbar-burger burger`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar"
            onClick={() => toggleMenu(!menuActive)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbar" className={`${menuActive && 'is-active'} navbar-menu`}>
          <div className="navbar-start">
            {menu_links.map((menu_link) => (
              <Link className="navbar-item" to="/" key={menu_link.link_label}>
                {menu_link.link_label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
