import React from 'react'

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
  <section id={slice_label}>
    <div className="container section">
      <div className="columns">
        <div className="column">
          <h1>{primary.title.text}</h1>
          <p>{primary.description.text}</p>
          <button>{primary.cta}</button>
        </div>

        <div className="column">
          <img src={primary.image.url} alt="" />
        </div>
      </div>
    </div>
  </section>
)
