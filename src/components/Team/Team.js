/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useHistory } from "react-router-dom";
const Team = (props) => {
	const { strTeam, idTeam, strTeamBadge, intFormedYear } = props.team;
	const history = useHistory();
	const handleClick = (idTeam) => {
		const url = `${idTeam}`;
		history.push(url);
	};

	return (
		<div className="card m-3">
			<img
				src={strTeamBadge}
				alt={strTeamBadge}
				className="card-img-top badge"
			/>
			<div className="card-body d-flex flex-column justify-content-center">
				<h5 className="card-title text-center">{strTeam}</h5>
				<p className="card-tex text-center">Formed: {intFormedYear}</p>
				<a
					className="btn btn-primary mx-auto px-5 border-0"
					onClick={() => handleClick(idTeam)}
				>
					Explore
				</a>
			</div>
		</div>
	);
};

export default Team;
