import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Head = ({ title }) => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)
	return (
		<Helmet>
			<title>{`${title} | ${data.site.siteMetadata.title}`}</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
			<meta charSet="utf-8" />
		</Helmet>
	)
}

export default Head