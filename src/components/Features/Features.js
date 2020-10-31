import React from 'react';
import RelaxWrapper from 'react-rellax-wrapper';
import './features.css';

import Main from '../Main/Main';

const rocketImages = {
	'Falcon 1': 'falcon-1',
	'Falcon 9': 'falcon-9',
	'Falcon Heavy': 'falcon-heavy',
	'Starship': 'starship',
}

const Features = ({ name, height, diameter, mass, payload_weights: payloadWeight, description }) => {
	return (
		<>
			<section className="features">
				<h2 className="features-title">
					{name} <br />Overview
		</h2>
				<div className="overview">

					<table className="table">
						<caption className="table-title">
							Size
				</caption>
						<thead>
							<tr>
								<td className="table-column">HEIGHT</td>
								<td className="table-column">{height.meters} m / {height.feet} ft</td>
							</tr>
							<tr>
								<td className="table-column">DIAMETER</td>
								<td className="table-column">{diameter.meters} m / {diameter.feet} ft</td>
							</tr>
							<tr>
								<td className="table-column">MASS</td>
								<td className="table-column">{mass.meters} kg / {mass.lb} lb</td>
							</tr>

							{payloadWeight.map((item) => (
								<tr key={item.id}>
									<td className="table-column">PAYLOAD TO {item.id.toUpperCase()}</td>
									<td className="table-column">{item.kg} kg / {item.lb} lb</td>
								</tr>
							))}

						</thead>
					</table>
					<RelaxWrapper speed={14}>
						<img
							src={`img/${rocketImages[name]}.png`}
							alt="rocket"
							className="rocket"
							data-rellax-speed="14"
						/>
					</RelaxWrapper>
					<article>
						<h3 className="features-subtitle">DESCRIPTION</h3>
						<p className="features-text">
							{description}
						</p>
					</article>
				</div>
			</section>
		</>
	)
}

export default Features;