import React from 'react'
import '../styles/index.scss'
import Menu from '../components/queryComponents/Menu'
import SliceManager from '../components/queryComponents/SliceManager'
import Footer from '../components/queryComponents/Footer'
import SEO from '../components/SEO'

export default () => (
  <>
    <SEO />

    <Menu />

    <SliceManager />

    <Footer />
  </>
)
