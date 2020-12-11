import React from 'react'
import CTAButton from '../atoms/CTAButton'

interface IProps {
  slice: {
    slice_label: string
    primary: {
      cta: string
      description: {
        text: string
      }
      image: {
        url: string
      }
      title: {
        text: string
      }
    }
  }
}

export default ({ slice: { primary, slice_label } }: IProps) => (
  <section id={slice_label} className="section">
    <div className="container">
      <div className="columns">
        <div className="column">
          <h1 className="title is-2 is-size-3-mobile is-spaced">{primary.title.text}</h1>

          <p className="subtitle is-4 mb-6">{primary.description.text}</p>

          <CTAButton>{primary.cta}</CTAButton>
        </div>

        <div className="column">
          <img src={primary.image.url} alt="" />
        </div>
      </div>
    </div>
  </section>
)
