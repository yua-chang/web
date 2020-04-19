import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Headline from '../components/headline'

import '../styles/global.css'

class TagTemplate extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const posts = this.props.data.allMdx.edges
    const { tag } = this.props.pageContext
    const discription = `"#${tag}" タグの付けられた記事一覧です。`

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={`#${tag}`} description={discription} />
        <span>{discription}</span>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Headline title={title} node={node} />
          )
        })}
      </Layout>
    )
  }
}

export default TagTemplate

export const pageQuery = graphql`
  query($tag: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMdx(filter: {frontmatter: {tags: {eq: $tag}}}) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            tags
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
