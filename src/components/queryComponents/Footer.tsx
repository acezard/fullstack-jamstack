import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import logo from '../../images/Logo Synapse White.svg'
import fa from '../../images/fb.svg'
import li from '../../images/in.svg'
import yo from '../../images/youtube.svg'
import tw from '../../images/twitter.svg'

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
    <footer className="has-background-primary has-text-white">
      <div className="container">
        <div className="columns">
          <div className="column">
            <img src={logo} alt="Synapse" />
          </div>
          {prismicFooterMenu.data.nav.map((item) => (
            <div className="column">
              <h3>{item.primary.label.text}</h3>
              {item.items.map((link) => (
                <a href="/">{link.sub_nav_link_label.text}</a>
              ))}
            </div>
          ))}
        </div>

        <div className="columns">
          <div className="column">
            <h3>{prismicFooterCta.data.title}</h3>
            <p>{prismicFooterCta.data.description}</p>
          </div>
          {prismicFooterCta.data.newsletter_link && (
            <div className="column">
              <input type="text" placeholder="Email address" />
            </div>
          )}
          <div className="column">
            {prismicFooterCta.data.social_links.map((item) => (
              <div className="column">
                <a href="/">
                  <img src={Icons[item.social_icon]} />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="columns">
          <div className="column">© Synapse Medicine 2020</div>
          <div className="column">
            {prismicFooterCgu.data.menu_links.map((item) => (
              <a href="/">{item.link_label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
