import React from 'react';
import logo from '../../logo.svg';
import './footer.css';

const Footer = ({ links: { elon_twitter: elonMask, flickr, twitter, website }, summary }) => (
	<footer className="footer">
		<img src={logo} alt="logo Space X" className="logo" />
		<nav className="footer-nav">
			<ul className="list">
				<li className="item">
					<a href={elonMask} rel="noopener noreferrer" target='_blank' className="item-link">Elon Musk Twitter</a></li>
				<li className="item">
					<a href={twitter} rel="noopener noreferrer" target='_blank' className="item-link">Twitter</a></li>
				<li className="item">
					<a href={flickr} rel="noopener noreferrer" target='_blank' className="item-link">Flickr</a></li>
				<li className="item">
					<a href="https://www.instagram.com/spacex/" rel="noopener noreferrer" target='_blank' className="item-link">Instagram</a></li>
				<li className="item">
					<a href="https://www.linkedin.com/company/spacex" rel="noopener noreferrer" target='_blank' className="item-link">LinkedIn</a></li>
				<li className="item">
					<a href={website} rel="noopener noreferrer" target='_blank' className="item-link">Website</a></li>
			</ul>
		</nav>
		<p className="footer-text">
			{summary}
			<a className="footer-link" href="mailto:rideshare@spacex.com">rideshare@spacex.com</a>
		</p>
		<p className="footer-copy">© {new Date().getFullYear()} SpaceX</p>
	</footer>
)

export default Footer;