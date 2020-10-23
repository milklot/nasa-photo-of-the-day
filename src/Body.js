import React from "react"
import styled from 'styled-components'

const Explanation = styled.p`
	margin: 0% 10%;
	font-size: 1.4rem;
	background-color:lightgray;
`
const Copyright = styled.p`
	margin: 1.6% 0%;
	margin-bottom: 3%;
	font-size: 2rem;
	background-color:lightgray;
`

const Body = (props) => {	

	const { explanation, copyright } = props;
	return (
		<>
			<Explanation>{explanation}</Explanation>
		<div className="footer">
			<Copyright>
				Copyright: {copyright}
			</Copyright>
		</div>
		</>
	)
}

export default Body;