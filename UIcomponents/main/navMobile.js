import Link from 'next/link'
import styled from 'styled-components'
import { prefix } from '../../utils/prefix.js';
import { getPages } from './data'


const Button = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2vh 0px;
	height: 100%; 
	width: 100%;
	transition: 0.5s;

	:hover {
		transform: scale(1, 1.03);
		background-color: #55F;
		color: #ffffff;
	}
`
const Icon = styled.img`
	position: relative;
	display:inline-block
	height: 1.6em; 
	width:  1.6em;
`
const Container = styled.nav`
	display: none;
	position: fixed;
	background-color: #1920EF;
	left: 0;
	bottom: 0;
	height: 60px; 
	width: 100%;
	color: #999;
	box-shadow: -3px 0px 40px rgba(0, 0, 0, 0.4);
	justify-content: center;
	align-items: center;
	z-index: 2;

	@media screen and (max-width: 800px) {
		display: flex;
	}
`


const NavMob = () => {
	const pages = getPages()
	return (
		<Container>
			{pages.map((item) => {
				return(
					<Link href={item.link} key={item.link}>
						<Button>
							<Icon src={item.src} alt={item.link}/>
						</Button>
					</Link>
				)
			})}
		</Container>
	);
}
export default NavMob;
