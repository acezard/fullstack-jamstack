import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import logo from '../../images/Logo Synapse White.svg'
import fa from '../../images/fb.svg'
import li from '../../images/in.svg'
import yo from '../../images/youtube.svg'
import tw from '../../images/twitter.svg'
import CTAInput from '../atoms/CTAInput'

const Icons = {
  fa,
  li,
  yo,
  tw,
}

interface IProps {
  prismicFooterMenu: {
    data: {
      nav: {
        items: {
          sub_nav_link_label: {
            text: string
          }
        }[]
        primary: {
          label: {
            text: string
          }
        }
      }[]
    }
  }
  prismicFooterCta: {
    data: {
      description: string
      newsletter_link: boolean
      title: string
      social_links: [
        {
          social_icon: string
        },
        {
          social_icon: string
        },
        {
          social_icon: string
        },
        {
          social_icon: string
        }
      ]
    }
  }
  prismicFooterCgu: {
    data: {
      menu_links: [
        {
          link_label: string
        },
        {
          link_label: string
        },
        {
          link_label: string
        }
      ]
    }
  }
}

export default () => {
  const {
    prismicFooterMenu,
    prismicFooterCta,
    prismicFooterCgu,
  }: IProps = useStaticQuery(graphql`
    query FooterQuery {
      prismicFooterMenu {
        data {
          nav {
            ... on PrismicFooterMenuNavNavItem {
              items {
                sub_nav_link_label {
                  text
                }
              }
              primary {
                label {
                  text
                }
              }
            }
          }
        }
      }
      prismicFooterCta {
        data {
          description
          newsletter_link
          title
          social_links {
            social_icon
          }
        }
      }
      prismicFooterCgu {
        data {
          menu_links {
            link_label
          }
        }
      }
    }
  `)

  return (
    <footer className="main-footer has-background-primary has-text-white">
      <div className="container section">
        <div className="columns">
          <div className="column">
            <img src={logo} alt="Synapse" />
          </div>
          {prismicFooterMenu.data.nav.map((item) => (
            <div className="column is-flex is-flex-direction-column">
              <h3 className="is-size-4 mb-3 has-text-weight-bold	">
                {item.primary.label.text}
              </h3>
              {item.items.map((link) => (
                <a href="/" className="has-text-white mb-2">
                  {link.sub_nav_link_label.text}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <hr />

      <div className="container section">
        <div className="columns">
          <div className="column level">
            <h3 className="is-size-4 mb-3 has-text-weight-bold	">
              {prismicFooterCta.data.title}
            </h3>
            <p>{prismicFooterCta.data.description}</p>
          </div>

          {prismicFooterCta.data.newsletter_link && <CTAInput />}

          <div className="column is-flex is-justify-content-flex-end">
            {prismicFooterCta.data.social_links.map((item) => (
              <Link to="/" className="ml-4">
                <span className="is-sr-only">{item.social_icon}</span>
                <img src={Icons[item.social_icon]} alt={item.social_icon} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <hr />

      <div className="container section">
        <div className="columns is-size-6">
          <div className="column">© Synapse Medicine 2020</div>
          <div className="column is-flex is-justify-content-flex-end is-flex-wrap-wrap">
            {prismicFooterCgu.data.menu_links.map((item) => (
              <Link to="/" className="has-text-white ml-4">
                {item.link_label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
