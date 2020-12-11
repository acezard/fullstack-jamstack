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
      author_job: string
    }
  }
}

export default ({ slice: { primary, slice_type } }: IProps) => (
  <section id={slice_type} className="section">
    <div className="container">
      <div className="columns level">
        <div className="column">
          <blockquote className="box">
            <p className="pl-6 mb-6">{primary.quote.text}</p>

            <p className="level">
              <img src={primary.portrait_author.url} alt="" />

              <div className="level-item is-flex-direction-column">
                <strong>{primary.name_of_the_author.text}</strong>
                <p>{primary.author_job}</p>
              </div>
            </p>
          </blockquote>
        </div>

        <div className="column">
          <h2 className="title is-2 is-spaced is-size-3-mobile">{primary.title.text}</h2>
          <p className="subtitle is-4">{primary.description.text}</p>
        </div>
      </div>
    </div>
  </section>
)
