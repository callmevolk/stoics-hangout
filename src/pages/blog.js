import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Layout from '../components/layout';
import Head from '../components/head'

import blogStyles from './blog.module.scss';

const BlogPage = () => {
	const data = useStaticQuery(graphql`
		query {
			allContentfulBlogPost (
				sort: {
					fields: publishedDate,
					order: DESC
				}
			) {
				edges {
					node {
						title
						slug
						publishedDate (
							formatString: "MMMM Do, YYYY"
						)
					}
				}
			}
		}
	`)
	
	return (
		<Layout>
			<Head title="Blog" />
			<ol className={blogStyles.posts}>
				{data.allContentfulBlogPost.edges.map(edge => {
					return (
						<li className={blogStyles.post} key={edge.node.slug}>
							<Link to={`/blog/${edge.node.slug}`}>
								<h2>{edge.node.title}</h2>
								<p>{edge.node.publishedDate}</p>
							</Link>
						</li>
					)
				})}
			</ol>
			<h1>My Blog</h1>
			<p>Posts will show up here later on.</p>
		</Layout>
	)
}

export default BlogPage