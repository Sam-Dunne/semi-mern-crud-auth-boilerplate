import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import PrivateRoute from './utils/PrivateRoute';
import Navbar from './components/Navbar';
import Login from './views/Login';
import Register from './views/Register';

/* HOOK REACT EXAMPLE */
const App = (props: AppProps) => {

	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path='/login'>
					<Login />
				</Route>
				<Route exact path='/register'>
					<Register />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

interface AppProps { }

export default App;
