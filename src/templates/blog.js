import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'
import Head from '../components/head'

import layoutStyles from '../components/scss/layout.module.scss'

//graphql fetch
export const query = graphql`
	query($slug: String!) {
		contentfulBlogPost(slug: {eq: $slug}) {
			title
			publishedDate(formatString: "MMMM Do, YYYY")
			body {
				json
			}
		}
	}
`

//blog page configuration
const Blog = props => {
	const options = {
		renderNode: {
			"embedded-asset-block": node => {
				const alt = node.data.target.fields.title['en-US']
				const url = node.data.target.fields.file['en-US'].url
				return <img alt={alt} src={url} />
			}
		}
	}
	return (
		<Layout>
			<Head title={props.data.contentfulBlogPost.title} />
			<div className={layoutStyles.blogContent}>
				<h1>{props.data.contentfulBlogPost.title}</h1>
				<p className={layoutStyles.blogDate}><em>{props.data.contentfulBlogPost.publishedDate}</em></p>
				{documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
			</div>
		</Layout>
	)
}

export default Blog