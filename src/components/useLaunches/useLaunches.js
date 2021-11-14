import { useEffect, useState } from 'react';
import FetchData from '../../service/FetchData';

const fetchData = new FetchData();

const useLaunches = () => {

	const [data, setData] = useState([]);

	useEffect(() => {
		let canceled = false;
		fetchData.getLaunches()
			.then(launches => {
				if (!canceled) setData(launches);
			});
		return () => { canceled = true; };
	}, []);

	const getLaunch = id => data.find(item => item.id === id);

	return { data, getLaunch };
};

export default useLaunches;