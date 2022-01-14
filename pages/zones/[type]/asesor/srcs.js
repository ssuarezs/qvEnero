import { useState, useEffect } from 'react'
import { useMainState } from '../../../../libs/stateHooks'
import { prefix } from '../../../../utils/prefix.js';

import styled from 'styled-components';
import PisosSel from '../../../../UIcomponents/pisoSel'
import GroupSel from '../../../../UIcomponents/groupSel'
import ItemList from '../../../../UIcomponents/SrcItemList'

import { statePiso, getAsesorSrc } from '../../../../public/data'


const Cont = styled.div`
	padding: 0px 20px;
	display: ${p => p.active ? 'block' : 'none'};
	transition: .3s ease;
`

const Srcs = ({active}) => {
  const [mState, setMainState] = useMainState()
	const group = mState.group ? mState.group : 'dos'
	const piso = mState.piso ? mState.piso : 1
	const [data, setData] = useState({})
	const pisoA = statePiso()

	useEffect(() => {
		setData(getAsesorSrc(group, piso))
	}, [group, piso])

	return <Cont active={active}>
		<GroupSel/>
		<PisosSel/>
			{piso <= pisoA
				?	<ItemList data={data}/>
				: null }
	</Cont>
}

export default Srcs
