import { useRouter } from 'next/router'
import Link from 'next/link'

import styled from 'styled-components';
import QV from '../../../../UIcomponents/qv';
import ZoneHeader from '../../../../UIcomponents/zoneHeader'
import Srcs from './srcs';
import Virt from './virt';
import Faqs from './faqs';

const types = [
	{
		title: 'CONTENIDO',
		link: '/zones/src/asesor',
		type: 'src'
	},
	{
		title: 'ASESORES VIRTUALES',
		link: '/zones/vir/asesor',
		type: 'vir'
	},
	{
		title: 'PREGUNTAS FRECUENTES',
		link: '/zones/faq/asesor',
		type: 'faq'
	}
]

const SelContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	margin: .8em 0 3em 1em;
	min-height: 3em;
`
const SelItem = styled.span`
	margin: 0 10px;
	padding: 5px 0;
	font-weight: bold;
	font-size: ${p => p.active ? '1.2' : '1'}em;
	color: ${p => p.active ? 'black' : 'grey'};
	border-bottom: solid ${p => p.active ? '3px' : '0px'} blue;
	transition: .3s ease;
	
	:hover{
		transform: translatey(-2px);
		cursor: pointer;
	}
`
const Selector = ({type}) => {
	return (
		<SelContainer>
			{types.map(i => 
				<Link key={i.title} href={i.link}>
					<SelItem active={type === i.type}>
						{i.title}
					</SelItem>
				</Link>
			)}
		</SelContainer>
	)
}

const Asesor = () => {
  const router = useRouter()
  const type = router.query.type

	return <QV pg="Zonas Comunes">
		<ZoneHeader	zone={3}/>
		<Selector type={type}/>
		<Srcs active={type === 'src'}/>
		<Virt active={type === 'vir'}/>
		<Faqs active={type === 'faq'}/>
	</QV>
}

export default Asesor;
