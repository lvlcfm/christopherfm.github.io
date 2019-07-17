import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { css } from '@emotion/core'

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
    <ul
      css={css`
        list-style-type: none;
        display: flex;
        margin: 0;
      `}
    >
      <ListLink to="/blog">Blog</ListLink>
      <ListLink to="/traversal">The Traversal</ListLink>
      <ListLink to="/cityscope">City Scope</ListLink>
      <ListLink to="/about">About</ListLink>
    </ul>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
