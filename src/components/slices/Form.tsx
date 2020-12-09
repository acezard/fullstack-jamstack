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
  <section id={slice_type} className="has-background-light">
    <div className="container">
      <div className="columns">
        <div className="column">
          <h2>{primary.title.text}</h2>

          <p>{primary.description.text}</p>

          <form>
            {items.map((item) => (
              <div className="field">
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

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
)
