import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useLaunches from '../useLaunches/useLaunches';
import Youtube from 'react-youtube';
import Main from '../Main/Main';
import Loader from '../Loader/Loader';
import './details.css';

const Details = (props) => {

	const [launch, setLaunch] = useState(null);

	const { getLaunch } = useLaunches();

	useEffect(() => {
		setLaunch(getLaunch(props.match.params.id))
	}, [getLaunch])

	const history = useHistory();

	if (!launch) return <Loader />;

	return (
		<>
			<Main name={launch.name} />
			<main className="details">
				<div className="container">
					<div className="details-row">
						<div className="details-image">
							<img src={launch.links.patch.small} alt={launch.name} />
						</div>
						<div className="details-content">
							<ul className="details-info">
								<li><b>Date:</b> {new Date(launch.date_utc).toLocaleDateString()}</li>
								<li><b>Flight number:</b> {launch.flight_number}</li>
								<li><b>Status:</b>{' '}
									<span className={launch.success ? 'status-success' : 'status-failure'}>
										{launch.success ? 'Success' : 'Failure'}
									</span>
								</li>
							</ul>
							<p className="details-description">{launch.details}</p>
						</div>
					</div>

					<Youtube className="details-youtube" videoId={launch.links.youtube_id} />
				</div>
				<a onClick={history.goBack} className="button button-back">go back</a>
			</main>
		</>
	)
}

export default Details;