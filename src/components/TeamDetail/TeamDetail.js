/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TeamDetail = () => {
	const { idTeam } = useParams();
	const [team, setTeam] = useState({});
	// console.log(idTeam + " this is the one");

	useEffect(() => {
		const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setTeam(data.teams[0]))
			.then(() => console.log(team));
	}, []);
	console.log(team.strStadiumThumb);
	const bannerStyle = {
		backgroundImage: `url('${team.strStadiumThumb}')`,
	};
	return (
		<div>
			<div className="main">
				<div className="overlay d-flex flex-column justify-content-center align-items-center w-100">
					<img
						src={team.strTeamBanner}
						alt={team.strTeamBadge}
						className="logo"
					/>
				</div>
				<div
					className="banner d-flex justify-content-center align-items-center"
					style={bannerStyle}
				></div>
				<div className="container pt-5">
					<div className="row bg-primary  border-5 px-5 py-3 team">
						<div className="col-7 d-flex flex-column justify-content-center align-items-start px-5">
							{/* <h3>{team.strTeam}</h3> */}
							<h1 className="text-white pb-2">Team name: {team.strTeam}</h1>
							<h5 className="text-white pb-3 px-2">
								Year Founded: {team.intFormedYear}{" "}
							</h5>
							<h5 className="text-white pb-3 px-2">
								Country: {team.strCountry}{" "}
							</h5>
							<h5 className="text-white pb-3 px-2">
								Sport Type: {team.strSport}
							</h5>
						</div>
						<div className="col-5 d-flex flex-column justify-content-center align-items-center">
							{/* <h3>{team.strTeam}</h3> */}
							<img
								src={team.strTeamBadge}
								alt={team.strTeamBadge}
								className="photo"
							/>
						</div>
					</div>
					<div className="row p-5 mt-5">
						<p className="w-100 text-white description">
							{team.strDescriptionEN}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamDetail;
