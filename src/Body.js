import React from "react"

const Body = (props) => {	

	const {titleTag, explanation, copyright, date} = props;
	return (
		<>
		<div>
			<h1>{titleTag}</h1>
			<h3>{date}</h3>
			<p>{explanation}</p>
		</div>
		<div className="footer">
			<p>
				Copyright: {copyright}
			</p>
		</div>
		</>
	)
}

export default Body;