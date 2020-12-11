import React from 'react'

interface IProps {
  slice: {
    slice_label: string
    items: { gallery_image: { url: string; alt: string } }[]
  }
}

export default ({ slice: { slice_label, items } }: IProps) => (
  <section id={slice_label} className="section is-hidden-mobile">
    <div className="container">
      <div className="level is-justify-content-space-around	">
        {items.map((item) => (
            <img
              src={item.gallery_image.url}
              alt={item.gallery_image.alt ?? ""}
            />
        ))}
      </div>
    </div>
  </section>
)
