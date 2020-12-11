import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import logo from '../../images/logo-synapse-blue.svg'

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

  return (
    <nav
      className="navbar has-background-light has-text-weight-bold section"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="is-flex mr-6">
            <span className="is-sr-only">Synapse Medicine</span>
            <img src={logo} alt="Synapse Medicine" />
          </Link>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbar" className="navbar-menu">
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
