import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout';
import Head from '../components/head'

const AboutPage = () => (
	<Layout>
		<Head title="About" />
		<h1>About Me</h1>
		<p>I'm Ljubiša, a React developer living in Prnjavor</p>
		<p><Link to='/contact'>Contact me</Link></p>
	</Layout>
)

export default AboutPage