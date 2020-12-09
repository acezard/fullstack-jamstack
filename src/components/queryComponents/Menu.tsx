import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
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
      className="navbar has-background-light has-text-weight-bold"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src={logo} />
          </a>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            {menu_links.map((menu_link) => (
              <a className="navbar-item" href={`/`} key={menu_link.link_label}>
                {menu_link.link_label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
