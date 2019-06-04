import React from 'react'
import { Link } from 'gatsby'

import headerStyles from './scss/header.module.scss'

const Header = () => {
	return (
		<header className={headerStyles.header}>
			<div className={headerStyles.headerContainer}>
				<h1>
					<Link className={headerStyles.title} to='/'><span className={headerStyles.stoic}>Stoic's</span><span className={headerStyles.hangout}>Hangout</span></Link>
				</h1>
				<nav role="navigation">
					<ul className={headerStyles.navList}>
						<li><Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to='/blog'>Blog</Link></li>
						<li><Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to='/about'>About</Link></li>
						<li><Link className={[headerStyles.navItem, headerStyles.navItemContact].join(' ')} activeClassName={headerStyles.navItemActive} to='/contact'>Contact</Link></li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header

