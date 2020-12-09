import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default () => {
  const data = useStaticQuery(graphql`
    query SliceQuery {
      allPrismicLandingPage {
        edges {
          node {
            id
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
                ... on PrismicLandingPageBodyQuote {
                  id
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
                    }
                    title {
                      text
                    }
                  }
                }
                ... on PrismicLandingPageBodyForm {
                  id
                  primary {
                    title {
                      text
                    }
                    description {
                      text
                    }
                  }
                  slice_type
                  items {
                    form_field
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return null
}
