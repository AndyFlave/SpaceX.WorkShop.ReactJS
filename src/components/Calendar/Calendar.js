import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './calendar.css';
import useLaunches from '../useLaunches/useLaunches';

import Main from '../Main/Main';
import Loader from '../Loader/Loader';

const Calendar = () => {

	const { data } = useLaunches();
	const [search, setSearch] = useState('');

	const filtered = data.filter(item =>
		item.name.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<>
			<Main name={data.length ? `Calendar Spacex (${data.length})` : 'Calendar Spacex'} />
			<section className="calendar">
				<div className="container">
					{!data.length && <Loader />}
					{!!data.length && (
						<input
							type="text"
							className="calendar-search"
							placeholder="Search by name..."
							value={search}
							onChange={e => setSearch(e.target.value)}
						/>
					)}
					{!!data.length && !filtered.length && (
						<p className="calendar-empty">Nothing found</p>
					)}
					<ul className="calendar-list">

						{
							filtered.map(item => (
								<li className="calendar-item" key={item.id}>
									<article className="launches">
										<div className="launches-image">
											<img src={item.links.patch.small} alt="" />
										</div>
										<div className="launches-content">
											<h2 className="launches-title">{item.name}</h2>
											<span className="launches-date">{new Date(item.date_utc).toLocaleDateString()}</span>
											<Link to={`/details/${item.id}`} className="button launches-details">Подробнее</Link>
										</div>
									</article>
								</li>
							))
						}

					</ul>
				</div>
			</section>
		</>
	)
}

export default Calendar;