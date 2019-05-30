import React from 'react'

import Header from './header'
import Footer from './footer'

import '../styles/index.scss'
import layoutStyles from './scss/layout.module.scss'

const Layout = props => (
	<div className={layoutStyles.container}>
		<Header />
		<div className={layoutStyles.content}>
			{props.children}
		</div>
		<Footer />
	</div>
)

export default Layout