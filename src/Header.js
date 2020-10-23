import React from "react"
import styled from "styled-components"
import { Container } from "reactstrap"

const HeaderStyle = styled.h1`
	margin : 2%;
	margin-top:3%;
`
const DateH3 = styled.h3`
	font-size: 1.7rem;
`

const Header = (props) => {
	const {titleTag, date } = props;

	return (
		<Container>
		<HeaderStyle>{titleTag}</HeaderStyle>
		<DateH3>{date}</DateH3>
		</Container>
	)

}

export default Header;