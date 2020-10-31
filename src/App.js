import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Calendar from './components/Calendar/Calendar';
import Details from './components/Details/Details';

import FetchData from './service/FetchData';

import './style.css';

class App extends React.Component {

	fetchData = new FetchData();

	state = {
		rocket: 'Falcon 1',
		rocketFeatures: null,
		rockets: [],
		company: null
	};

	componentDidMount() {
		this.updateRocket();
		this.updateCompany();
	}

	updateRocket() {
		this.fetchData.getRocket()
			.then(data => {
				this.setState({ rockets: data.map(item => item.name) });
				return data
			})
			.then(data => data.find(item => item.name === this.state.rocket))
			.then(rocketFeatures => this.setState({ rocketFeatures }));
	}

	changeRocket = rocket => {
		this.setState({
			rocket
		}, this.updateRocket)
	}

	updateCompany = () => {
		this.fetchData.getCompany()
			.then(company => this.setState({ company }))
	}

	render() {
		return (
			<BrowserRouter>
				<Header rockets={this.state.rockets} changeRocket={this.changeRocket} />

				<Route exact path='/'>
					{this.state.company && <Home company={this.state.company} />}
				</Route>

				<Route path='/rocket'>
					<Main rocket={this.state.rocket} />
					{this.state.rocketFeatures &&
						<Features {...this.state.rocketFeatures} />}
				</Route>

				<Route path='/calendar' component={Calendar} />

				<Route path='/details/:id' component={Details} />


				{this.state.company && <Footer {...this.state.company} />}
			</BrowserRouter>
		);
	}
}

export default App;