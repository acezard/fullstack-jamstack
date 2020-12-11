import React from 'react'
import icon from '../../images/arrow-cta.svg'

export default ({ children, ...props }) => (
  <button
    className="button p-0"
    onClick={() =>
      document
        .getElementById('ctaanchor')
        .scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    {...props}
  >
    {children && (
      <span className="mr-2 has-text-weight-bold is-size-4">{children}</span>
    )}
    <img src={icon} alt="" />
  </button>
)
