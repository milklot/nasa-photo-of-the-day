import React from "react"


const Photo = (props) => {

	const {source, altData} = props;
	return (
		<div>
			<img className="mainPhoto" src={source} alt={altData}></img>
		</div>

	)
}

export default Photo;