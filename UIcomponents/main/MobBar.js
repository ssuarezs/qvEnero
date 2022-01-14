import styled from 'styled-components'
import { prefix } from '../../utils/prefix.js';


const Container = styled.div`
	position: absolute;
	height: 50px;
	width: 100%;
	background-color: #1920EF;
	z-index: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	
	@media screen and (min-width: 800px) {
		display: none;
	}
`
const Img = styled.img`
	height: 35px;
`
const Menu = styled.img`
	position: absolute;
	right: 1em;
	transition: .3s ease;

	:hover {
		transform: scale(1.1);
		cursor: pointer;
	}
`

const MobBar = ({ open }) => {
	return (
		<Container>
      <Img src={`${prefix}/imgs/main/QV_Blanco_horizontal.png`}/>
      <Menu 
				onClick={open}
				src={`${prefix}/imgs/menu.png`}
			/>
		</Container>
	)
}
export default MobBar
