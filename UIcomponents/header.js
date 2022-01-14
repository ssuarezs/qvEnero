import styled from 'styled-components'

const Jumbo = styled.div`
	margin: 90px 0 30px 0;
	border-radius: 20px;
	background-color: ${props => props.primary ? '#1920EF':'#FFC024'};
	position: relative;
	padding: 40px 10px 20px 20px;
	@media screen and (max-width: 1000px) {
		padding: 15px;
	}
`
const Title = styled.h1`
	font-weight: 600;
	font-size: 2.5em;
	margin: 0px;
	color: ${props => props.primary ? '#FFF':'#000'};

	@media screen and (max-width: 1000px) {
		width: 100%;
		font-size: 1.8em;
	}
`
const Desc = styled.h4`
	font-weight: ${props => props.primary ? 'bold': null};

	font-size: ${props => props.primary ? '1.4em':'1em'};
	margin: 0px;
	width: 50%;
	color: ${props => props.primary ? '#FFC024':'#000'};

	@media screen and (max-width: 1000px) {
		width: 100%;
	font-size: 1em;
	}
`
const Img = styled.img`
	position: absolute;
	width: 38%;
	bottom: 0;
	right: 0;
	z-index: 1;
	border-radius: 20px;
	@media screen and (max-width: 1000px) {
		width: 0px;
	}
`


const Header = ({ title, desc, imgH, primary }) => {
	return (
			<Jumbo primary={primary}>
				<Title  primary={primary}>{title}</Title>
				<Desc  primary={primary}>{desc}</Desc>
				<Img src={imgH}  primary={primary}/>
			</Jumbo>
	)
}

export default Header;
