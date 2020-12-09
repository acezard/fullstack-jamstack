import React from 'react'

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
  <section id={slice_label} className="has-background-light">
    <div className="container">
      <div className="columns">
        <div className="column">
          <h1>{primary.title.text}</h1>
          <p>{primary.description.text}</p>
          <button>{primary.call_to_action}</button>
        </div>

        <div className="column">
          <img src={primary.hero_image.url} alt="" />
        </div>
      </div>
    </div>
  </section>
)
