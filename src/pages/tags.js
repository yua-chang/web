import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import FlexTags from '../components/flex-tags'
import SEO from '../components/seo'

class TagsIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    // 各タグがいくつずつあるか
    const tagSummary = posts.reduce((a, c) => {
      const tags = c.node.frontmatter.tags || [];
      tags.forEach(tag => {
        if (a[tag]) {
          a[tag] = a[tag] + 1
        } else {
          a[tag] = 1
        }
      })
      return a;
    }, {})

    const discription = `タグの一覧です。`

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All tags"/>
        <FlexTags tagSummary={tagSummary} discription={discription}/>
      </Layout>
    )
  }
}

export default TagsIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`
