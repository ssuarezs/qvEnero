import { prefix } from '../../utils/prefix.js';

import styled from 'styled-components'
import QV from '../../UIcomponents/qv';
import Header from '../../UIcomponents/header'
import Card from '../../UIcomponents/zcCard'
import { getZones } from '../../public/data'

const imgZones = `${prefix}/imgs/header/zones.png`

const Grid = styled.div`
	display: grid;
	grid-auto-flow: dense;
	grid-auto-rows: 150px;
	grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));
	grid-gap: 1rem;
	margin-top: 10px;
`

const Zones = () => {
	const datazones = getZones()
	return <QV pg="Zonas Comunes">
		<Header
			title="Zonas Comunes"
			desc="¡Espacios para todos!"
			imgH={imgZones}
		/>
		<Grid>
			{datazones.map(item => 
			<Card 
				key={item.name}
				item={item}
			/>)}
		</Grid>
	</QV>
}

export default Zones;
