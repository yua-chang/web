import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import styled from '@emotion/styled'

const Ul = styled('ul')`
  display: -webkit-flex;
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  margin: 32px 0 0 0;
  
  li {
    margin: 6px;
    padding: 6px;
    border-radius: 4px;
    line-hight: 1;
    background: #304455;
    flex-wrap: wrap;
    display: inline;
    margin-left: 8px;
    a {
      text-decoration: none;
      color: #fff;
    }
  }
`
const Tag = ({ tag, count }) => (
  <li>
    <Link to={`/blog/tags/${kebabCase(tag)}`}>
      {`#${tag} (${count})`}
    </Link>
  </li>
);

const FlexTags = ({ tagSummary }) => (
  <Ul>
    {Object.entries(tagSummary).map(([k, v]) => (
      <Tag key={k} tag={k} count={v} />
    ))}
  </Ul>
);

export default FlexTags;
