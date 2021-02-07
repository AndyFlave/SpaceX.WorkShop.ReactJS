import React, { useEffect, useState } from 'react';
import './upcoming.css';

import FetchData from '../../service/FetchData';
import Main from '../Main/Main';
import Loader from '../Loader/Loader';

const fetchData = new FetchData();

const Upcoming = () => {

	const [data, setData] = useState([]);

	useEffect(() => {
		fetchData.getUpcoming()
			.then(launches => setData(launches))
	}, [])

	return (
		<>
			<Main name="Upcoming launches" />
			<section className="upcoming">
				<div className="container">
					{!data.length && <Loader />}
					<ul className="upcoming-list">
						{
							data.map(item => (
								<li className="upcoming-item" key={item.id}>
									<h2 className="upcoming-title">{item.name}</h2>
									<span className="upcoming-date">
										{new Date(item.date_utc).toLocaleDateString()}
									</span>
									{item.details && <p className="upcoming-text">{item.details}</p>}
								</li>
							))
						}
					</ul>
				</div>
			</section>
		</>
	)
}

export default Upcoming;
