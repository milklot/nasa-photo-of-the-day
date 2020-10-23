import React from "react"
import styled from "styled-components"

const Image = styled.img`
	margin : 1%;
`
const Photo = (props) => {

	const {source, altData} = props;
	return (
		<div>
			<Image className="mainPhoto" src={source} alt={altData}></Image>
		</div>

	)
}

export default Photo;