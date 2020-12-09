import React from 'react'

interface IProps {
  slice: {
    slice_label: string
    items: { gallery_image: { url: string; alt: string } }[]
  }
}

export default ({ slice: { slice_label, items } }: IProps) => (
  <section id={slice_label}>
    <div className="container">
      <div className="columns">
        {items.map((item) => (
          <div className="column">
            <img
              src={item.gallery_image.url}
              alt={item.gallery_image.alt ?? ''}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
)
