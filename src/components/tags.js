import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import styled from '@emotion/styled'

const Ul = styled('ul')`
  margin-bottom: 8px;
  li {
    display: inline;
    margin-left: 8px;
    a {
      font-size: .9em;
      text-decoration: none;
    }
  }
`
const Tag = ({ tag }) => (
  <li>
    <Link to={`/blog/tags/${kebabCase(tag)}`}>
      {`#${tag}`}
    </Link>
  </li>
);

const Tags = ({ tags }) => (
  <Ul>
    {(tags || []).map(tag => (
      <Tag key={tag} tag={tag} />
    ))}
  </Ul>
);

export default Tags;
