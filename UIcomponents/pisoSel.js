import styled from 'styled-components'
import { useMainState } from '../libs/stateHooks'
import { statePisoA } from '../public/data'

const Selector = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	text-align: center;
	justify-content: space-evenly;
	padding: 5px 5%;
	margin: 20px 0;
	background-color: #e0e5ed;
	border-radius: 20px;
	color: #1920EF;
	font-weight: bold;
	font-size: 1em;
	@media screen and (max-width: 1000px) {
		padding: 5px 15%;
	}
`
const SelItem = styled.div`
	border-radius: 20px;
	padding: 5px 10px;
	margin: 5px 0px;
	white-space: nowrap;
	transition: 0.5s;
  background-color: ${props => props.primary ? '#1920EF' : null};
  color: ${props => props.primary ? '#fff' : null};

	:hover {
		transform: scale(1.2);
		background-color: #979FF5;
		color: #ffffff;
		cursor: pointer;
	}
`

const PisosSel = () => {
  const [mState, setMainState] = useMainState()
	const pisoAct = statePisoA()
	const set = (piso) => {
		if(!(piso > pisoAct)) {
			setMainState({...mState, piso})
		}
	}
	return (
	<Selector>
		{[1,2,3,4,5,6].map((item) => 
			<SelItem 
				onClick={() => set(item)}
				primary={mState.piso === item}
				key={item.toString()}
			>
				    Piso {item}
			</SelItem>
		)}
	</Selector>
	);
}

export default PisosSel;
