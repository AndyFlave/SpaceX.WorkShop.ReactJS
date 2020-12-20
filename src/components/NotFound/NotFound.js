import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.css';

const NotFound = () => (
	<section className="not-found">
		<div className="container">
			<h1 className="not-found-title">404</h1>
			<p className="not-found-text">Page lost in space</p>
			<Link to="/" className="button">Back to home</Link>
		</div>
	</section>
);

export default NotFound;
