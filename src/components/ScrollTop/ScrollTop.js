import React, { useState, useEffect } from 'react';
import './scrollTop.css';

const ScrollTop = () => {

	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			setVisible(window.pageYOffset > 400);
		};
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const scrollUp = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	if (!visible) return null;

	return (
		<button className="scroll-top" onClick={scrollUp} aria-label="Scroll to top">
			↑
		</button>
	);
};

export default ScrollTop;
