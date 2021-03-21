import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from 'components/Header/Header';
import Home from './components/Home/Home';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Calendar from './components/Calendar/Calendar';
import Details from './components/Details/Details';
import Loader from './components/Loader/Loader';
import NotFound from './components/NotFound/NotFound';
import Upcoming from './components/Upcoming/Upcoming';

import FetchData from './service/FetchData';

import './style.css';

class App extends React.Component {

	fetchData = new FetchData();

	state = {
		rocket: 'Falcon 1',
		rocketFeatures: null,
		rockets: [],
		company: null,
		error: null
	};

	componentDidMount() {
		this.updateRocket();
		this.updateCompany();
	}

	onError = error => {
		this.setState({ error: error.message });
	}

	updateRocket() {
		this.fetchData.getRocket()
			.then(data => {
				this.setState({ rockets: data.map(item => item.name) });
				return data
			})
			.then(data => data.find(item => item.name === this.state.rocket))
			.then(rocketFeatures => this.setState({ rocketFeatures }))
			.catch(this.onError);
	}

	changeRocket = rocket => {
		this.setState({
			rocket
		}, this.updateRocket)
	}

	updateCompany = () => {
		this.fetchData.getCompany()
			.then(company => this.setState({ company }))
			.catch(this.onError);
	}

	render() {
		return (
			<BrowserRouter>
				<Header
					rockets={this.state.rockets}
					currentRocket={this.state.rocket}
					changeRocket={this.changeRocket} />

				{this.state.error && <div className="error-banner">{this.state.error}</div>}

				<Switch>
					<Route exact
						path='/'
						render={() => this.state.company ? <Home company={this.state.company} /> : <Loader />}
					/>
					<Route path='/rocket'
						render={() => this.state.rocketFeatures ?
							<Features {...this.state.rocketFeatures} /> : <Loader />} />

					<Route path='/calendar' component={Calendar} />

					<Route path='/upcoming' component={Upcoming} />

					<Route path='/details/:id' component={Details} />

					<Route component={NotFound} />
				</Switch>

				{this.state.company && <Footer {...this.state.company} />}
			</BrowserRouter>
		);
	}
}

export default App;