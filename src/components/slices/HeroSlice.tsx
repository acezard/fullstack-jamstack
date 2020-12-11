import React from 'react'
import CTAButton from '../atoms/CTAButton'

interface IProps {
  slice: {
    slice_label: string
    primary: {
      call_to_action: string
      description: {
        text: string
      }
      hero_image: {
        url: string
      }
      title: {
        text: string
      }
    }
  }
}

export default ({ slice: { primary, slice_label } }: IProps) => (
  <section id={slice_label} className="has-background-light section">
    <div className="container">
      <div className="columns level">
        <div className="column">
          <h1 className="title is-1 is-size-2-mobile is-spaced">{primary.title.text}</h1>

          <p className="subtitle is-3 is-size-4-mobile mb-6">{primary.description.text}</p>

          <CTAButton>{primary.call_to_action}</CTAButton>
        </div>

        <div className="column is-hidden-mobile">
          <img src={primary.hero_image.url} alt="" />
        </div>
      </div>
    </div>
  </section>
)
