import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BodyCtaSlice from '../slices/BodyCtaSlice'
import Form from '../slices/Form'
import HeroSlice from '../slices/HeroSlice'
import ImageGallery from '../slices/ImageGallery'
import Quote from '../slices/Quote'

export default () => {
  const {
    prismicLandingPage: {
      data: { body },
    },
  } = useStaticQuery(graphql`
    query SlicesQuery {
      prismicLandingPage {
        data {
          body {
            ... on PrismicLandingPageBodyHeroSlice {
              id
              slice_type
              primary {
                call_to_action
                description {
                  text
                }
                hero_image {
                  url
                }
                title {
                  text
                }
              }
            }
            ... on PrismicLandingPageBodyImageGallery {
              id
              slice_type
              items {
                gallery_image {
                  url
                  alt
                }
              }
            }
            ... on PrismicLandingPageBodyBodyCtaSlice {
              id
              slice_type
              primary {
                cta
                description {
                  text
                }
                image {
                  url
                  alt
                }
                title {
                  text
                }
              }
            }
            ... on PrismicLandingPageBodyQuote {
              id
              slice_type
              primary {
                description {
                  text
                }
                name_of_the_author {
                  text
                }
                portrait_author {
                  url
                }
                quote {
                  text
                }
                title {
                  text
                }
              }
            }
            ... on PrismicLandingPageBodyForm {
              id
              slice_type
              primary {
                description {
                  text
                }
                title {
                  text
                }
              }
              items {
                form_field
              }
            }
          }
        }
      }
    }
  `)

  const Components = {
    hero_slice: HeroSlice,
    image_gallery: ImageGallery,
    body_cta_slice: BodyCtaSlice,
    quote: Quote,
    form: Form,
  }

  return body.map((slice) =>
    typeof Components[slice.slice_type] !== 'undefined'
      ? React.createElement(Components[slice.slice_type], {
          slice,
          key: slice.id,
        })
      : null
  )
}
