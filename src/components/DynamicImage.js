//components/image.js

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const DynamicImage = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      })
      if (!image) {
        return null
      }
      return (
        <Img
          fluid={image.node.childImageSharp.fluid}
          alt={props.alt}
          className={props.cls}
        />
      )
    }}
  />
)
export default DynamicImage
