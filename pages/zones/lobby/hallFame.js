import { prefix } from '../../../utils/prefix.js';
import styled from 'styled-components';
import { getHFData } from '../../../public/data'

import { useMainState } from '../../../libs/stateHooks'

const Container = styled.div`
	border-radius: 20px;
	height: 100%;
`
const TeamTop = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	padding: .3em 3em;
	margin: .5em;
	min-height: 3em;
	background-color: #FFC024;
	border-radius: 10px;
`
const Title = styled.h2`
	color: black;
	margin: 0;
`
const TeamsBoard = styled.div`
	padding: 1em;
	height: 85%;

	iframe {
		width: 100%; 
		height: 100%; 
		border: none;
		border-radius: 20px;
	}

	@media screen and (max-width: 620px) {
		height: 70%;
	}
`
const SelectGrp = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #C79000;
	border-radius: 25px;
	height: 85%;
	padding: 0 1em;
`
const Button = styled.div`
	margin: 5px;
	padding: 5px 10px;
	background-color: ${p => p.active ? 'white' : '#C79000'};
	color: ${p => p.active ? '#C79000' : 'white'};
	border-style: none;
	border-radius: 25px;
	font-weight: bold;
	transition: .3s ease;

	:hover {
		transform: scale(1.03);
		cursor: pointer;
	}
`


const HallFame = () => {
  const [mState, setMainState] = useMainState()
	const group = mState.group ? mState.group : 'dos'
	const set = (group) => {
		setMainState({...mState, group})
	}
	const { studio, btns } = getHFData()
	return(
		<Container>
			<TeamTop>
				<Title>Tabla de Clasificacion</Title>
				<SelectGrp>
					{btns.map(i => 
					<Button key={i.name} active={group === i.gr} onClick={() => set(i.gr)}>
						{i.name}
					</Button>)}
				</SelectGrp>
			</TeamTop>
			<TeamsBoard>
				<iframe 
					id="iframe-lead"
					src={studio[group]}>
				</iframe>	
			</TeamsBoard>
		</Container>
	)
}
export default HallFame
