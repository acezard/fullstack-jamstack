import React from 'react'
import icon from '../../images/arrow-cta.svg'
import './_cta-input.scss'

export default () => (
  <div className="column">
    <div className="cta-input">
      <label htmlFor="email" className="is-sr-only">
        Email address
      </label>

      <input
        id="email"
        className="input"
        type="text"
        placeholder="Email address"
      />

      <img src={icon} alt="" />
    </div>
  </div>
)
