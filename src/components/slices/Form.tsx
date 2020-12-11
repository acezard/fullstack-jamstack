import React from 'react'

interface IProps {
  slice: {
    slice_type: string
    primary: {
      description: {
        text: string
      }
      title: {
        text: string
      }
    }
    items: { form_field: string }[]
  }
}

export default ({ slice: { primary, slice_type, items } }: IProps) => (
  <section id={slice_type} className="has-background-light section">
    <div className="container">
      <div className="columns">
        <div className="column has-text-centered">
          <h2 className="title is-2 is-size-3-mobile is-spaced">{primary.title.text}</h2>

          <p className="subtitle is-4">{primary.description.text}</p>

          <form className="box column is-half is-offset-one-quarter px-6 py-5">
            {items.map((item) => (
              <div className="field mb-5">
                <div className="control">
                  <label htmlFor={item.form_field} className="is-sr-only">
                    {item.form_field}
                  </label>

                  {item.form_field.toLowerCase() === 'message' ? (
                    <textarea
                      id={item.form_field}
                      className="input"
                      placeholder={item.form_field}
                      required={item.form_field.slice(-1) === '*'}
                    ></textarea>
                  ) : (
                    <input
                      id={item.form_field}
                      className="input"
                      type={'text'}
                      placeholder={item.form_field}
                      required={item.form_field.slice(-1) === '*'}
                    />
                  )}
                </div>
              </div>
            ))}

            <div className="field is-grouped-centered">
              <div className="control ">
                <button id="ctaanchor" className="button is-link has-background-dark px-5">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
)
