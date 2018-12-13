import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const ListLink = props => (
  <li
    style={{
      textDecoration: 'none',
      marginLeft: 20,
      marginBottom: 0,
    }}
  >
    <Link
      style={{
        color: 'black',
        textDecoration: 'none',
        margin: 0,
        fontFamily: 'Chivo-regular',
      }}
      to={props.to}
    >
      {props.children}
    </Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <div
    style={{
      maxWidth: '100%',
      marginBottom: '20px',
      marginTop: '20px',

      padding: '1.45rem 1.0875rem',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-around',
    }}
  >
    <Link
      to="/"
      style={{
        color: 'Black',
        textDecoration: 'none',
        margin: 0,
      }}
    >
      <h2
        style={{
          margin: 0,
          fontFamily: 'Chivo-regular',
        }}
      >
        {siteTitle}
      </h2>
    </Link>
    <div
      style={{
        listStyle: `none`,
        display: 'flex',
      }}
    >
      <ListLink to="/about">About</ListLink>
      <ListLink to="/blog">Blog</ListLink>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
