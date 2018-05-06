import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './index.scss'

const TemplateWrapper = ({ children }) => (
  <div style={{minHeight: '100%', position: 'relative'}}>
    <Helmet
      title="Francotorium"
      meta={[
        { name: 'description', content: 'christopher franco monterrosa creative' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      >
    </Helmet>
    <div style={{paddingBottom: 0}}>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
