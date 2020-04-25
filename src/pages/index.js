import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Wrap = styled('div')`
  max-height: 100vh;
  .siteContainer,
  siteContent {
    position: fixed;
    max-height: 100vh;
    max-width: 100vw;
    background: #304455;
  }
  header {
    width: 100vw;
    padding-bottom: 200px;
    #site-title {
      position: fixed;
      margin-right: 2em;
      top: 32px;
      left: 32px;
      font-size: 2.4em;
      line-height: initial;
    }
    .title-icon {
      float: none;
      width: 100%;
      height: 100%;
      max-height: calc(100vh - 256px);
      margin: 0 8px;
    }
  }
  footer {
    position: fixed;
    bottom: 0;
    max-width: 100%;
  }
`

class Top extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Wrap>
        <Layout location={this.props.location} title={siteTitle}>
          <SEO
            title="Top"
            keywords={[`blog`, `カニ`, `javascript`, `yua-chang`]}
          />
        </Layout>
      </Wrap>
    )
  }
}

export default Top

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
