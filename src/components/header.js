import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from '@emotion/styled'
import Image from './image'

const Header = styled('header')`
  background: #304455;
  width: 100%;
  padding: 1.2rem 1.0875rem;
  margin-bottom: 2rem;
  .title-icon {
    float: left;
    width: 28px;
    height: 28px;
    margin: 0 8px;
  }
`

const Nav = styled('nav')`
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem 0 0;
  font-size: 24px;

  ul {
    display: flex;
    justify-content: space-between;
    margin: 0;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    z-index: 10;
    &:first-child {
      position: relative;
      margin: 0;
      flex-basis: 100%;
      z-index: 9;
    }
  }

  a {
    vertical-align: text-bottom;
    text-decoration: none;
    color: #a9a9a9;
    font-weight: 600;
    transition: all 0.2s;
    &:hover {
      color: white;
      text-decoration: underline;
    }
  }
`

const activeLinkStyle = {
  color: 'white',
}

const Header1 = () => {
  return (
    <Header>
      <Nav>
        <ul>
          <li>
            <Image class="title-icon" filename="kani.svg" />
            <Link to="/" id="site-title" activeStyle={activeLinkStyle}>
              KaniDo-Luck!
            </Link>
          </li>
          <li>
            <Link to="/blog/" activeStyle={activeLinkStyle}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/tags/" activeStyle={activeLinkStyle}>
              Tags
            </Link>
          </li>
        </ul>
      </Nav>
    </Header>
  )
}

Header1.propTypes = {
  siteTitle: PropTypes.string,
}

Header1.defaultProps = {
  siteTitle: '',
}

export default Header1
