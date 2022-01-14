import Link from 'next/link'
import styled from 'styled-components'
import { prefix } from '../../utils/prefix.js';
import { getPages } from './data'

const Logo = styled.img`
	margin: 10% 0 10% 10%;
	max-width:50%;
`
const NavImg = styled.img`
	position: absolute;
	width: 100%;
	bottom: 0;
	left: 0;
	@media screen and (max-height: 600px) {
		display: none; 
	}
`
const Button = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	padding: 2vh 0px;
	font-weight: bold;
	width: 100%;
	transition: 0.5s ease;

	color: ${p => p.active ? '#fff' : null};
	background-color: ${p => p.active ? '#303CFE' : null};
	border-left: solid ${p => p.active ? '5px' : '0'} #FFC024;
	border-radius: ${p => p.active ? '0 10px 10px 0' : '0'};
	transform: ${p => p.active ? 'scale(1.02)' : null};

	:hover {
		cursor: pointer;
		background-color: #303CFE;
		color: #ffffff;
	}

`
const Icon = styled.img`
	position: relative;
	display:inline-block
	height: 80%;
`
const Text = styled.span`
	display:inline-block;
	margin: 0px;
	padding: 0px;
	width: 65%;
	font-size: 1rem;
`
const Container = styled.nav`
	grid-area: sb;
	position: sticky;
	background-color: #1920EF;
	padding: 10px 0px 0px 0px;
	margin: 12px 0px 12px 8px; 
	border-radius:20px; 
	top: 12px;
	height: 92vh; 
	color: #bbb;
	box-shadow: -3px 0px 40px rgba(0, 0, 0, 0.4);

	@media screen and (max-width: 800px) {
		display: none; 
	}
`

const logo = `${prefix}/imgs/main/QB_blanco_vertical_1.png`
const navImg = `${prefix}/imgs/main/QV_textura.png`

const NavCont = ({pg}) => {
	const pages = getPages()
	return (
		<Container>
			<NavImg src={navImg} alt="nav-img"/>
			<Logo src={logo} alt="logo"/>
			{pages.map((item) => {
				return(
					<Link href={item.link} key={item.link}>
						<Button active={item.title === pg}>
							<Icon src={item.src} alt={item.link}/>
							<Text>{item.title}</Text>
						</Button>
					</Link>
				)
			})}
		</Container>
	);
}

export default NavCont;
