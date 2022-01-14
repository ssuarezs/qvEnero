import { useState, useEffect } from 'react'
import { useMainState } from '../../../libs/stateHooks'
import { prefix } from '../../../utils/prefix.js';
import Link from 'next/link'

import styled from 'styled-components';
import QV from '../../../UIcomponents/qv';
import ZoneHeader from '../../../UIcomponents/zoneHeader'
import PisosSel from '../../../UIcomponents/pisoSel'
import GroupSel from '../../../UIcomponents/groupSel'
import ItemList from '../../../UIcomponents/SrcItemList'

import { 
	statePiso, 
	getLobbyData 
} from '../../../public/data'


const TitleCont = styled.h2`
	font-weight: 600;
	font-size: 1.5em;
	line-height: 52px;
	letter-spacing: -0.03em;
	color: #272835;
	margin: 0px;
	z-index: 2;
`
const HeaderCont = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`
const SRCCnt = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-bottom: 1em;
`
const SRCBtn = styled.div`
	display: flex;
	align-items: center;
  border-radius: 20px;
  min-width: 200px;
  min-height: 60px;
  padding: .1em 1em;
  margin: .6em 0;
	font-weight: bold;
  box-shadow: 1px 2px 8px rgba(0, 0, 190, 0.5);
	transition: 0.3s;
	
	:hover {
		transform: scale(1.03);
		cursor: pointer;
	}
	div{
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #1920EF;
		width: 3em;
		height: 3em;
		border-radius: 25px;
		margin: 0 1em 0 .1em;
	}
	img{
		height: 50%;
	}
`

const Lobby = () => {
  const [mState, setMainState] = useMainState()
	const group = mState.group ? mState.group : 'dos'
	const piso = mState.piso ? mState.piso : 1
	const [data, setData] = useState({})
	const pisoA = statePiso()

	const openModal = (type) => {
    setMainState({
      ...mState,
      modal: {
        visibility: true,
        type: type
      }
    })
	}

	useEffect(() => {
		setData(getLobbyData(group, piso))
	}, [group, piso])

	return <QV pg="Zonas Comunes">
		<HeaderCont>
			<ZoneHeader	zone={2}/>
			<SRCCnt>
				<Link href="https://ingenieria.unal.edu.co/tpi/index.php/equipotpi/profesores"><SRCBtn>
					<div>
						<img src={`${prefix}/imgs/zones/mentores.svg`}/>
					</div>
					Conoce tus Mentores
				</SRCBtn></Link>
				<SRCBtn onClick={()=>openModal('Salon de la Fama')}>
					<div>
						<img src={`${prefix}/imgs/zones/hall.png`}/>
					</div>
					Salon de la Fama
				</SRCBtn>
			</SRCCnt>
		</HeaderCont>
		<GroupSel/>
		<PisosSel/>
		<TitleCont>Recursos de Piso</TitleCont>
			{piso <= pisoA
				?	<ItemList data={data}/>
				: null }
	</QV>
}

export default Lobby
