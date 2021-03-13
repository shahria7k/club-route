import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Team from "../Team/Team";

const Home = () => {
	const [teams, setTeams] = useState([]);

	useEffect(() => {
		fetch(
			"https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
		)
			.then((res) => res.json())
			.then((data) => setTeams(data.teams))
			.then(() => console.log(teams));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className="main">
			<div className="overlay">
				<h2>Team TRACKER</h2>
			</div>
			<div className="banner d-flex justify-content-center align-items-center"></div>
			<div className="container pt-5">
				<div className="row">
					{/* <h1>Teams : {teams.length}</h1> */}
					{teams.map((team) => (
						<Team team={team}></Team>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
