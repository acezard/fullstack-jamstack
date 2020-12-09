import React from 'react'

interface IProps {
  slice: {
    slice_type: string
    primary: {
      description: {
        text: string
      }
      name_of_the_author: {
        text: string
      }
      portrait_author: {
        url: string
      }
      quote: {
        text: string
      }
      title: {
        text: string
      }
    }
  }
}

export default ({ slice: { primary, slice_type } }: IProps) => (
  <section id={slice_type}>
    <div className="container">
      <div className="columns">
        <div className="column">
          <blockquote>
            <p>{primary.quote.text}</p>

            <p>
              <img src={primary.portrait_author.url} alt="" />
              {primary.name_of_the_author.text}
            </p>
          </blockquote>
        </div>

        <div className="column">
          <h2>{primary.title.text}</h2>
          <p>{primary.description.text}</p>
        </div>
      </div>
    </div>
  </section>
)
