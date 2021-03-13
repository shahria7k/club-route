import "./App.css";
// import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { useEffect } from "react";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import TeamDetail from "./components/TeamDetail/TeamDetail";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/home">
					<Home></Home>
				</Route>
				<Route path="/:idTeam">
					<TeamDetail></TeamDetail>
				</Route>
				<Route exact path="/">
					<Home></Home>
				</Route>
				<Route path="*">
					<NoMatch />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
