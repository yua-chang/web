import React from 'react'
import { Link } from 'gatsby'

import Tags from '../components/tags'

import styled from '@emotion/styled'

const Article = styled('article')`
  margin-bottom: 0.5em;
  padding-bottom: 0.5rem;

  h3 {
    margin-bottom: 0.5rem;
    text-align: left;
  }

  h3 a {
    color: #0c2030;
    padding: 0
    transition: all 150ms linear;
    text-decoration: none;
    &:focus,
    &:active,
    &:hover {
      color: #380f6b;
      text-decoration: underline;
    }
  }
  
  small span {
    padding-left: 2px;
  }
`

const Headline = ({ title, node }) => [
  <>
    <Article key={node.fields.slug}>
      <h3>
        <Link to={node.fields.slug}>{title}</Link>
      </h3>
      <small>
        <span
          style={{
            float: `left`,
            marginBottom: '0.5rem',
          }}
        >
          {node.frontmatter.date}
        </span>
        <Tags tags={node.frontmatter.tags} />
      </small>
      {/*<p dangerouslySetInnerHTML={{ __html: node.excerpt }} />*/}
    </Article>
  </>,
]

export default Headline
