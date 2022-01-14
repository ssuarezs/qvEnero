import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { prefix } from '../../utils/prefix.js';

import Link from 'next/link'

import styled from 'styled-components'
import QV from '../../UIcomponents/qv';
import Header from '../../UIcomponents/header'

import About from './pages/about'
import Know from './pages/know'
import Faqs from './pages/faqs'

const imgInfo = `${prefix}/imgs/header/info.png`
const Cont = styled.div`
	padding: 0px 30px;
`
const Selector = styled.div`
	display: flex;
	position: relative;
`
const SelItem = styled.div`
	margin: .5em 1em;
	font-weight: bold;
	font-size: 1em;
	color: ${p=>p.active ?'black':'#999'};
	:hover {
		cursor: pointer;
	}
	@media screen and (max-width: 800px) {
		font-size: .8em;
	}
`
const SelBar = styled.div`
	position: absolute;
	background: #172BEF;
	height: 3px;
	width: ${p=>p.w || '60'}px;
	top: ${p=>p.y || '0'}px;
	left: ${p=>p.x || '0'}px;
	transition: .3s ease;
`


const Info = () => {
  const router = useRouter()
  const type = router.query.type

	const selRef = useRef()
	const barRef = useRef()
	const [selPos, setSelPos] = useState()
	const [barPos, setBarPos] = useState()
	const bx = barPos?.x - selPos?.x
	const by = barPos?.y - selPos?.y + barPos?.height + 2
	const bw = barPos?.width

	useEffect(()=>{
		setSelPos(selRef?.current?.getBoundingClientRect())
		setBarPos(barRef?.current?.getBoundingClientRect())
	}, [type])

	return <QV pg="Informacion">
		<Header
			title="Informacion"
			desc="Acerca del juego"
			imgH={imgInfo}
		/>
		<Selector ref={selRef}>
			<Link href='/info/about'>
				<SelItem 
					active={type==='about'}
					ref={type==='about'? barRef : null}
				>
				ACERCA DE
			</SelItem></Link>
			<Link href='/info/conoceQV'>
				<SelItem 
					active={type==='conoceQV'}
					ref={type==='conoceQV'? barRef : null}
				>
				CONOCE QV
			</SelItem></Link>
			<Link href='/info/faqs'>
				<SelItem 
					active={type==='faqs'}
					ref={type==='faqs'? barRef : null}
				>
				FAQS
			</SelItem></Link>
			<SelBar x={bx} y={by} w={bw}/>
		</Selector>
		<Cont>
			{type === 'about' 	&& (<About />)}
			{type === 'conoceQV'&& (<Know />)}
			{type === 'faqs' 		&& (<Faqs />)}
		</Cont>
	</QV>
}
export default Info;
