//components/image.js

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

interface DynamicImageProps {
  filename: string
  alt: string
  cls: string
}

const DynamicImage = (props: DynamicImageProps) => (
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
      const image = data.images.edges.find((n: any) => {
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
