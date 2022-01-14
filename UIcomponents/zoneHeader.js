import styled from 'styled-components'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { prefix } from '../utils/prefix.js';
import { getZones } from '../public/data'

const Container = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: flex-start;
	margin: 60px 0em;
`
const Cont = styled.div`
	padding: 10px 20px;
`
const Title = styled.h1`
	font-size: 30px;
	letter-spacing: -0.03em;
	margin: 0;
`
const Desc = styled.h4`
	font-weight: normal;
	font-size: 14px;
	margin: 0;
`
const Img = styled.img`
	margin: 30px 0 0 0;
	max-width: 100px;
	max-height: 90px;
`
const Back = styled.img`
	height: 1.4em;
	transition: 0.3s ease;
	:hover {
		transform: scale(1.1);
		cursor: pointer;
	}
`


const ZoneHeader = ({ zone }) => {
	const router = useRouter()
	const {name, desc, img} = getZones()[zone]
	return (
			<Container>
				<Link href="/zones">
					<Back src={`${prefix}/imgs/items/back.png`}/>
				</Link>
				<Cont>
					<Img src={`${prefix}${img}`}/>
					<Title>{name}</Title>
					<Desc>{desc}</Desc>
				</Cont>
			</Container>
	)
}

export default ZoneHeader;
